import React, { useState } from 'react';
import Header from './components/Header';
import Note from './components/Note';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [noteText, setNoteText] = useState(""); // State for note input

  const addNote = (text) => {
    if (text.trim()) {
      const newNote = { id: Date.now(), text, date: new Date().toLocaleDateString() }; // Assign a unique ID
      setNotes([newNote, ...notes]);
      setNoteText(""); // Clear the textarea after adding the note
    }
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id); // Filter by unique ID
    setNotes(newNotes);
  };

  const editNote = (id, newText) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, text: newText } : note // Update note by ID
    );
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter(note =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase()) // Filter notes based on search term
  );

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="note-keeper">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
          />
        </div>
        <div className="note-input">
          <textarea
            placeholder="Type your note here..."
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)} // Capture textarea input
          />
          <button onClick={() => addNote(noteText)}>Add Note</button> {/* Pass noteText to addNote */}
        </div>
        <div className="notes-list">
          {filteredNotes.map((note) => (
            <Note
              key={note.id} // Use the unique ID as the key
              note={note}
              onDelete={() => deleteNote(note.id)} // Use unique ID for deletion
              onEdit={(newText) => editNote(note.id, newText)} // Use unique ID for editing
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

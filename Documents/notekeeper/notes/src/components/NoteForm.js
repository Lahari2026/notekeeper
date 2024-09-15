import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [noteText, setNoteText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noteText) return;
    addNote({
      text: noteText,
      date: new Date().toLocaleDateString(),
    });
    setNoteText('');
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Type your note here..."
        required
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;

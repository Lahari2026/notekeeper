// src/components/Note.js
import React, { useState } from 'react';
import './Note.css';

const Note = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(note.text);

  const handleEdit = () => {
    onEdit(editText);
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <textarea
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <p>{note.text}</p>
      )}
      <p>{note.date}</p>
      {isEditing ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Note;

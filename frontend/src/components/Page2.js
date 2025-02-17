import React, { useState } from 'react';
import Calendar from 'react-calendar'; // For Calendar
import 'react-calendar/dist/Calendar.css'; // Calendar styles

const Page2 = () => {
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState(''); // For the note the user writes
  const [savedNotes, setSavedNotes] = useState([]); // Array of saved notes

  // Handle date selection
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // Handle note change
  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  // Handle saving the note for the selected date
  const handleSaveNote = () => {
    if (note.trim()) {
      setSavedNotes([...savedNotes, { date: date.toLocaleDateString(), note }]);
      setNote(''); // Clear note input after saving
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#1e3a8a', // Blue background
        color: 'white',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      {/* Header */}
      <header style={{ textAlign: 'center', padding: '20px', fontSize: '2rem' }}>
        <h1>Calendar</h1>
      </header>

      <div className="container">
        <div className="row">
          {/* Calendar Column */}
          <div className="col-md-4">
            <div className="calendar-section">
              <Calendar onChange={handleDateChange} value={date} />
            </div>
          </div>

          {/* Notes Column */}
          <div className="col-md-4">
            <div className="notes-section">
              <h3>Write Notes</h3>
              <textarea
                value={note}
                onChange={handleNoteChange}
                rows="6"
                className="form-control"
                placeholder="Write your notes here..."
              />
              <button onClick={handleSaveNote} className="btn btn-light mt-3">
                Save Note
              </button>
            </div>
          </div>

          {/* Saved Notes Column */}
          <div className="col-md-4">
            <div className="saved-notes-section">
              <h3>Saved Notes</h3>
              {savedNotes.length > 0 ? (
                <ul>
                  {savedNotes.map((savedNote, index) => (
                    <li key={index}>
                      <strong>{savedNote.date}</strong>: {savedNote.note}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No notes saved yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#1e3a8a',
          color: 'white',
          textAlign: 'center',
          padding: '10px',
          position: 'fixed',
          bottom: 0,
          width: '100%',
        }}
      >
        <p>Happy Journey!</p>
      </footer>
    </div>
  );
};

export default Page2;

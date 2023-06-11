import React, { useState } from 'react';
import './TextInput.css';

function TextInput({ onSubmit }) {
  const [inputTitle, setInputTitle] = useState('');
  const [inputAuthor, setInputAuthor] = useState('');
  const [inputText, setInputText] = useState('');
  const handleTitleChange = (event) => {
    setInputTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setInputAuthor(event.target.value);
  };

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit({
      title: inputTitle,
      author: inputAuthor,
      text: inputText,
    });
  };

  /*const handleSubmit = () => {
    fetch(`http://127.0.0.1:5000/process_text`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: inputTitle, author: inputAuthor, text: inputText }),
    })
      .catch((error) => {
        console.error('Error:', error);
      });
  };*/

  return (
    <div className="form-container">
      <input className="input-title" placeholder="Title" value={inputTitle} onChange={handleTitleChange} />
      <input className="input-author" placeholder="Author" value={inputAuthor} onChange={handleAuthorChange} />
      <textarea className="input-text" placeholder="Text" value={inputText} onChange={handleTextChange} />
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default TextInput;

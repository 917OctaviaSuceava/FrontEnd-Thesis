import React, { useState } from 'react';

function TextInput() {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    fetch(`http://127.0.0.1:5000/process_text`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: inputText }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the response state with the received message
        setResponse(data.response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <textarea value={inputText} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
      <p>{response}</p>
    </div>
  );
}

export default TextInput;
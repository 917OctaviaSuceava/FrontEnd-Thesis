import React, { useCallback, useEffect, useState } from 'react';
import './TableML.css';

function TableML() {
  const [accuracies, setAccuracies] = useState({
    lr_accuracy_1: '',
    lr_accuracy_2: '',
    lr_accuracy_3: '',
    dt_accuracy_1: '',
    dt_accuracy_2: '',
    dt_accuracy_3: '',
    pa_accuracy_1: '',
    pa_accuracy_2: '',
    pa_accuracy_3: '',
  });

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    text: '',
  });

  const { title, author, text } = formData;

  const fetchAccuracies = useCallback(() => {
    fetch('http://127.0.0.1:5000/process_text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), 
    })
      .then((response) => response.json())
      .then((data) => {
        setAccuracies(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [formData]);

  useEffect(() => {
    fetchAccuracies();
  }, [fetchAccuracies]);

  const handleTitleChange = (event) => {
    setFormData({ ...formData, title: event.target.value });
  };

  const handleAuthorChange = (event) => {
    setFormData({ ...formData, author: event.target.value });
  };

  const handleTextChange = (event) => {
    setFormData({ ...formData, text: event.target.value });
  };

  const handleSubmit = () => {
    fetchAccuracies();
  };

  const getPrediction = () => {
    if (text.trim() === '') {
    return '';
    } else {
      const totalAccuracy =
      accuracies.lr_accuracy_3 +
      accuracies.dt_accuracy_3 +
      accuracies.pa_accuracy_3 +
      accuracies.lr_accuracy_2 +
      accuracies.dt_accuracy_2 +
      accuracies.pa_accuracy_2 +
      accuracies.lr_accuracy_1 +
      accuracies.dt_accuracy_1 +
      accuracies.pa_accuracy_1;
      return totalAccuracy >= 5 ? 'FAKE' : 'REAL';
    }}

  return (
    <div className="container">
      <div className="form-container">
        <input className="input-title" placeholder="Title" value={title} onChange={handleTitleChange} />
        <input className="input-author" placeholder="Author" value={author} onChange={handleAuthorChange} />
        <textarea className="input-text" placeholder="Text" value={text} onChange={handleTextChange} />
        {/* <button className="submit-button" onClick={handleSubmit}>Submit</button>*/} 
      </div>
      <p>The prediction is: {getPrediction()}</p>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Text</th>
              <th>Text + Author</th>
              <th>Text + Author + Title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Logistic Regression</td>
              <td>{accuracies.lr_accuracy_1 !== '' ? accuracies.lr_accuracy_1 : '-'}</td>
              <td>{accuracies.lr_accuracy_2 !== '' ? accuracies.lr_accuracy_2 : '-'}</td>
              <td>{accuracies.lr_accuracy_3 !== '' ? accuracies.lr_accuracy_3 : '-'}</td>
            </tr>
            <tr>
              <td>Decision Trees</td>
              <td>{accuracies.dt_accuracy_1 !== '' ? accuracies.dt_accuracy_1 : '-'}</td>
              <td>{accuracies.dt_accuracy_2 !== '' ? accuracies.dt_accuracy_2 : '-'}</td>
              <td>{accuracies.dt_accuracy_3 !== '' ? accuracies.dt_accuracy_3 : '-'}</td>
            </tr>
            <tr>
              <td>Passive-Aggressive Classifier</td>
              <td>{accuracies.pa_accuracy_1 !== '' ? accuracies.pa_accuracy_1 : '-'}</td>
              <td>{accuracies.pa_accuracy_2 !== '' ? accuracies.pa_accuracy_2 : '-'}</td>
              <td>{accuracies.pa_accuracy_3 !== '' ? accuracies.pa_accuracy_3 : '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableML;
import React from 'react';

const aboutStyle = {
    fontFamily: 'Candara, sans-serif',
    backgroundColor: 'rgba(237, 245, 225, 1)',
    color: 'rgb(77, 102, 83)',
    minHeight: '100vh',
    padding: '20px'
  };
  

const headingStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const paragraphStyle = {
  fontSize: '22px',
  lineHeight: '1.5',
  marginBottom: '20px',
};

const paragraphStyle1 = {
    fontSize: '22px',
    lineHeight: '1.5',
    marginBottom: '20px',
    textAlign: 'left'
  };

const subheadingStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '10px',
  //marginLeft: '20px',
  textAlign: 'left'
};

function About() {
  return (
    <div style={aboutStyle}>
      <h2 style={headingStyle}>Welcome to my Fake News Detection project!</h2>
      <p style={paragraphStyle}>
        My name is Suceava Octavia and I'm a Computer Science student at BBU, Cluj-Napoca. <br />
        This project was developed as part of my thesis to tackle the issue of fake news and misinformation.
      </p><br/>
      <p style={paragraphStyle1}>
        The goal of this project is to use machine learning algorithms and natural language processing techniques to classify 
        news articles as either real or fake.
      </p>
      <tr></tr>
      <h3 style={subheadingStyle}>Contact Information</h3>
      <ul style={{textAlign: 'left'}}>
        <li>Email: codreanu_octavia@yahoo.com</li>
        <li>GitHub: https://github.com/917OctaviaSuceava</li>
        <li>LinkedIn: https://www.linkedin.com/in/octavia-suceava-5a206a234/</li>
      </ul>
    </div>
  );
}

export default About;

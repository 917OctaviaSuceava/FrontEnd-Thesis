import React from 'react';
import './Page.css';
import TextInput from './textInput';
import Header from './header';
import TableML from './TableML';

function Page() {
  return (
    <div class="page">
        
        <div class="intro">
            <div class="text">
                <h1 style={{fontWeight: 500}}>Separate Fact from Fiction!</h1>
                <p class="title_par">Considering the development of technology, as well as the number of people<br></br> that are using the internet
                 nowadays, detection of fake news has become a very important task to combat misinformation. 
                Although not harmful at first, misinformation can lead to significant negative aftermaths. <br/><br/>Therefore, our powerful tool 
                analyzes news articles using multiple Machine Learning algorithms, fact-checks information, 
                    and tells you what you need to know.</p>
            </div>
            <div class="image"><a class="lg" href="https://www.flaticon.com/free-icons/search"><img style={{ width: 150, height: 150 }} alt='logo' 
                            src={require('./loupe.png')}/></a>
            </div>
        </div>
        <div class="nextpage">
        <h2 class="par">Below you can test your article to see how likely it is to be fake news or not. <br/> Simply input the 
        title, the author and the content of the news. <br></br>If you do not know the title or the author, you can only input the text
        and the algorithm will only work on that.</h2>
        
        <TableML/>
    </div>
        
    </div>
  );
}

export default Page;
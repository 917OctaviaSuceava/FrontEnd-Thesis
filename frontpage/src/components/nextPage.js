import React from 'react';
import './NextPage.css';
import TableML from './TableML';
import TextInput from './textInput';


function NextPage() {
  return (
    <div class="nextpage">
        <h2 class="par">Below you can test your article to see how likely it is to be fake news or not. <br/> Simply input the 
        title, the author and the content of the news. <br></br>If you do not know the title or the author, you can only input the text
        and the algorithm will only work on that.</h2>
        
        <TableML/>
    </div>
  );
}

export default NextPage;
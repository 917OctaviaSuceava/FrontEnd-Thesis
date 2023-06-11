import logo from './logo.svg';
import './App.css';
import './components/textInput'
import TextInput from './components/textInput';
import Header from './components/header';
import Page from './components/page';
import NextPage from './components/nextPage';
function App() {
  return (
    <div className="App">
      
      <Page/>
      <NextPage/>
    </div>
  );
}

export default App;

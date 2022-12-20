import logo from './logo.svg';
import './App.css';
import RecordBook from './Models/RecordBook'
import HomeView from './Pages/HomeView'

function App() {

    var allText;
    var readTextFile = file => {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = () => {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    allText = rawFile.responseText;
                }
            }
        };
        rawFile.send(null);
    };

  readTextFile("./profile/cowvin.tsv");
  var recordBook = RecordBook.loadRecordFromTSV(allText);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <HomeView recordBook={recordBook}></HomeView>
    </div>
  );
}

export default App;

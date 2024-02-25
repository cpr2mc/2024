// import logo from './logo.svg';
import './App.css';
import  { Greet }  from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
// import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Message />
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman" />
        <button>Action</button>
      <Greet name="Diana" heroName="Wonderwoman" />
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonderwoman" /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
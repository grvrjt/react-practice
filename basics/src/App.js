import logo from './logo.svg';
import './App.css';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <FunctionClick />
       <ClassClick />
      </header>
    </div>
  );
}

export default App;

import './App.css';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EventBind />
       <FunctionClick />
       <ClassClick />
      </header>
    </div>
  );
}

export default App;

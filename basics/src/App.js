import './App.css';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParentComponent />
        <EventBind />
       <FunctionClick />
       <ClassClick />
      </header>
    </div>
  );
}

export default App;

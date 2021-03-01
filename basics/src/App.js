import './App.css';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NameList/>
        {/* <UserGreeting /> */}
        {/* <ParentComponent />
        <EventBind />
       <FunctionClick />
       <ClassClick /> */}
      </header>
    </div>
  );
}

export default App;

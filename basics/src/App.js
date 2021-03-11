import "./App.css";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./components/appStyles.css";
import style from "./components/appStyles.module.css";
import Form from "./components/Form";
import ParentComp from "./components/ParentComp";
import RefDemo from "./components/RefDemo";
function App() {
  return (
    <div className="App">
      {/* <h1 className={style.success}>Success</h1> */}
      {/* <h1 className="error">Error</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList/> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent />
        <EventBind />
       <FunctionClick />
       <ClassClick /> */}
      {/* <Stylesheet /> */}
      {/* <Form /> */}
      <ParentComp></ParentComp>
      <RefDemo />
    </div>
  );
}

export default App;

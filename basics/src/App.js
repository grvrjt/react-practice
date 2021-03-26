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
import AutoFocusTextInput from "./components/AutoFocusTextInput";
import Input from "./components/Input";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import FRParentInput from "./components/FRParentInput";
import Hero from "./Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HowerCounterTwo from "./components/HowerCounterTwo";
import User from "./components/User";
import Counter from "./components/Counter";
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
      {/* <ParentComp></ParentComp>
      <RefDemo /> */}
      {/* <Input /> */}
      {/* <AutoFocusTextInput/> */}
      {/* <FragmentDemo />
      <Table /> */}
      {/* <FRParentInput/> */}
      {/* <ErrorBoundary>
        <Hero heroName="joker" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Gaurav" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Manoj" />
      </ErrorBoundary> */}
      {/* <ClickCounter name="click" />
      <HoverCounter name="hover" /> */}

      <Counter>
        {(count, increamentCount) => (
          <ClickCounterTwo count={count} increamentCount={increamentCount} />
        )}
      </Counter>
      <Counter>
        {(count, increamentCount) => (
          <HowerCounterTwo count={count} increamentCount={increamentCount} />
        )}
      </Counter>

      {/* <ClickCounterTwo></ClickCounterTwo>
      <HowerCounterTwo />
      <User
        name={(isLoggedIn) => (isLoggedIn ? "MANOJ KUMAR" : "Guest")}
      ></User> */}
    </div>
  );
}

export default App;

import FormHandling from "./components/FormHandling";
import React from "react";
import "./App.css";
import FormHandlingObj from "./components/FormHandlingObj";
import Promises from "./components/Promises";
import EventBubbling from "./components/EventBubbling";
import Refs from "./components/Refs";
import A from "./components/Context/A";
import { UserProvider } from "./components/Context/CreateContext";
import Effect from "./components/Effect";
import ReducerHook from "./components/ReducerHook";
// import Parent from "./components/IncrementFromChild/Parent";
import RenderList from "./components/Excercise/RenderList";
import Watch from "./components/Stopwatch/Watch";
import ShowHide from "./components/ShowHide/ShowHide";
import Disable from "./components/DisableButton/Disable";
import Parent from "./components/UpdateParentFromChild/Parent";
import Child from "./components/UpdateParentFromChild/Parent";
import Sum from "./components/SumOfNumbers.jsx/Sum";
import Api from "./components/Axios/Api";
import AxiosCancellation from "./components/Axios/AxiosCancellation";
import Comment from "./components/Comment/Comment";
import FromValidation from "./components/FormValidation/FromValidation";
import { Typography } from "@mui/material";
import SessionTimeout from "./components/SessionTimeout";
import ParentSingleTon from "./components/SingleTon/Parent";
import ThisKeyWord from './components/ThisKeyword'

function App() {
  return (
    <div className="App">
      {/* <Typography variant="h6">Learning React</Typography> */}
      {/* <FormHandling/>  */}
      {/* <FormHandlingObj/> */}
      {/* <Promises />  */}
      {/* <EventBubbling/> */}
      {/* <Refs/> */}
      {/* Creating user Provider and Calling the parent component in App.js*/}
      {/* <UserProvider value="anubhav">
        <A/>
      </UserProvider> */}
      {/* <Effect/> */}
    {/* <ReducerHook/> */}
    {/* <Parent/> */}
      {/* <RenderList/> */}
    {/* <Watch/> */}
    {/* <ShowHide/> */}
      {/* <Disable/> */}
      {/* <Parent/> */}
      {/* <Sum/> */}
      {/* <Api/> */}
      {/* <Comment/> */}
      {/* <FromValidation/> */}
      {/* <AxiosCancellation/> */}
      {/* <SessionTimeout/> */}
      {/* <ParentSingleTon/> */}
     
      <ThisKeyWord/>
    </div>
  );
}

export default App;

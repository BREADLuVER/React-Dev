import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CounterList from "./AddingInteractivity/1-Interactivity/CounterList";
import Gallery from "./AddingInteractivity/2-ComponentMemory/1/App.jsx";
import Form from "./AddingInteractivity/2-ComponentMemory/2/App.jsx";
import FeedbackForm from "./AddingInteractivity/2-ComponentMemory/3/App.jsx";
import FeedbackForm2 from "./AddingInteractivity/2-ComponentMemory/4/App.jsx";
import Clock from "./AddingInteractivity/3-RenderCommit/1/Clock.jsx";
import TrafficLight from "./AddingInteractivity/4-SnapShot/App.jsx";
import RequestTracker from "./AddingInteractivity/5-QueueingState/1/App.jsx";
import ProcessQueueApp from "./AddingInteractivity/5-QueueingState/2/App.jsx";
import Scoreboard from "./AddingInteractivity/6-UpdateObjectState/1/App.jsx";
import Canvas from "./AddingInteractivity/6-UpdateObjectState/2/App.jsx";
import ShoppingCart from "./AddingInteractivity/7-UpdatingArrays/1/App.jsx";
import TaskApp from "./AddingInteractivity/7-UpdatingArrays/3/App.jsx";
import ErrorMessage from "./Mocks/1/App.jsx";
import Picture from "./ManageState/1-ReactingToInput/1/App.jsx";
import EditProfile from "./ManageState/1-ReactingToInput/2/App.jsx";
import ClockProp from "./ManageState/2-ChoosingState/1/App.jsx";
import TravelPlan from "./ManageState/2-ChoosingState/2/App.jsx";
import SyncedInputs from "./ManageState/3-SharingState/1/App.jsx";
import HiddenHint from "./ManageState/4-PreservingState/1/App.jsx";
import ReduceMessenger from "./ManageState/5-ExtractingStateLogic/1/App.jsx";
import SelectForm from "./Mocks/SelectAll/App.jsx";
import TodoListR from "./Mocks/TodoListR/App.jsx";
import { TodoProvider } from "./Mocks/TodoListR/TodoContext.jsx";
import LargeImagePractice from "./ManageState/6-PassingDataDWC/App.jsx";
import GoalTracker from "./Mocks/FitnessGoalTracker/App.jsx";
import ReduxLogin from "./Mocks/LoginRedux/App.jsx"
import { store } from "./Mocks/LoginRedux/store/store.jsx"
import TodoApp from "./Debugging/TodoList/App.jsx";
import MoodTracker from "./Debugging/MoodTracker/App.jsx";
import { ThemeProvider } from "./Debugging/MoodTracker/ThemeContext.jsx";
import Button from "./components/Button";
import { UndoRedoList1 } from "./Mocks/UndoRedo-reduce/UndoRedoList.jsx";
import DebugCounter from "./Debugging/BasicCounter/App.jsx";

export default function App() {
  return (
    <div className="App" style={{ border: '2px solid red' }}>
      {/* <CounterList />
      <Gallery />
      <Form />
      <FeedbackForm />
      <FeedbackForm2 />
      <Clock />
      <TrafficLight />
      <RequestTracker />
      <ProcessQueueApp />
      <Scoreboard />
      <ShoppingCart />
      <TaskApp />
      <Picture />
      <EditProfile /> 
      <ErrorMessage />
      <Canvas /> */}
      {/* <ClockProp time="12:45 PM" />
      <TravelPlan />
      <SyncedInputs />
      <HiddenHint />
      <ReduceMessenger /> */}
      {/* <SelectForm />
      <TodoProvider>
        <TodoListR />
      </TodoProvider>
      <LargeImagePractice />  */}
      {/* <GoalTracker />
      <Provider store={store}>
        <div>
          <ReduxLogin />
        </div>
      </Provider>
      <TodoApp />
      <ThemeProvider>
        <MoodTracker />
      </ThemeProvider>
      
      <div style={{ marginTop: "2rem" }}>
        <Button variant="primary" onClick={() => alert("Hello!")}>
          Test Button
        </Button>
      </div>

      <UndoRedoList1 /> */}
      <DebugCounter />
    </div>
  );
}

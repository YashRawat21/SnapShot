
import './App.css';
import { appStore } from './store/appStore';
import {Provider} from "react-redux";
import WebcamCapture from './components/WebcamCapture';
function App() {
  return (
    // <Provider store = {appStore}> 
    <div className="App">    
    <WebcamCapture />
         </div>
    //  </Provider>
  );
}

export default App;

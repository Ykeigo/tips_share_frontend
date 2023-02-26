import './App.css';
import MyTips from "./MyTips/MyTips"
import MasteredMyTips from "./MyTips/MasteredMyTips"
import { MyTipsProvider} from "./MyTips/MyTipsProvider";


function App() {
  return (
    <div className="App">
    <MyTipsProvider>
        <MyTips />
        <MasteredMyTips/>
    </MyTipsProvider>
    </div>
  );
}

export default App;

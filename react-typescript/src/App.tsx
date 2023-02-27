import './App.css';
import MyTips from "./MyTips/MyTips"
import Backyard from "./Backyard"
import { MyTipsProvider} from "./MyTips/MyTipsProvider";


function App() {
  return (
    <div className="App">
    <MyTipsProvider>
        <MyTips />
        <Backyard/>
    </MyTipsProvider>
    </div>
  );
}

export default App;

import './App.css';
import MyTips from "./MyTips/MyTips"
import { MyTipsProvider} from "./MyTips/MyTipsProvider";


function App() {
  return (
    <div className="App">
    <MyTipsProvider>
        <MyTips />
    </MyTipsProvider>
    </div>
  );
}

export default App;

import { useContext } from "react";
import "./MyTips.css";
import { FaRegLightbulb } from "react-icons/fa";
import { MyTipsContext, MyTip } from "./MyTipsProvider";
import { TipsHeplfulButton, TipsForgotButton } from "./TipsHelpfulForm";
import { AddTipForm } from "./AddTipForm";

export default function MyTips() {
  const { myTips } = useContext(MyTipsContext);

  return (
    <div className="MyTips">
      <div>お役に立ちましたか？</div>
      {myTips.map((tip) => MyTipField(tip))}
      <AddTipForm />
    </div>
  );
}

function MyTipField(myTip: MyTip) {
  const items = [];
  for (let i = 0; i < myTip.helpful_num; i++) {
    items.push(<FaRegLightbulb key={i}></FaRegLightbulb>);
  }

  return (
    <div className="MyTip" key={myTip.id}>
      <div className="title">{myTip.tip.title}</div>
      <div className="HelpfulLevelBar">
        {TipsHeplfulButton(myTip.id)}
        {TipsForgotButton(myTip.id)}
        <div className="HelpfulNumIcons">{items}</div>
      </div>
    </div>
  );
}

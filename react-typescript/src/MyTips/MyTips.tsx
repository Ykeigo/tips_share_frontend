import { useContext } from "react";
import "./MyTips.css";
import { GrStatusGood } from "react-icons/gr";
import { GiBrightExplosion } from "react-icons/gi";
import { MyTipsContext, MyTip } from "./MyTipsProvider";
import { TipsHeplfulButton, TipsForgotButton } from "./TipsCountButton";
import { AddTipForm } from "./AddTipForm";

export default function MyTips() {
  const { myTips } = useContext(MyTipsContext);

  return (
    <div className="MyTips">
      <div>お役に立ちましたか？</div>
      {myTips.map((tip) => tip.helpful_num < 10 ? MyTipField(tip) : <></>)}
      <AddTipForm />
    </div>
  );
}

function MyTipField(myTip: MyTip) {
  const helpfulIcons = [];
  for (let i = 0; i < myTip.helpful_num; i++) {
    helpfulIcons.push(<GrStatusGood key={i} />);
  }
  const forgetIcons = [];
  for (let i = 0; i < myTip.forget_num; i++) {
    forgetIcons.push(<GiBrightExplosion key={i} />);
  }

  return (
    <div className="MyTip" key={myTip.id}>
      <div className="title">{myTip.tip.title}</div>
      <div className="HelpfulLevelBar">
        {TipsHeplfulButton(myTip.id)}
        <div className="HelpfulNumIcons">{helpfulIcons}</div>
      </div>
      <div className="HelpfulLevelBar">
        {TipsForgotButton(myTip.id)}
        <div className="HelpfulNumIcons">{forgetIcons}</div>
      </div>
    </div>
  );
}

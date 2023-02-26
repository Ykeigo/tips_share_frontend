import { useEffect, useContext } from "react";
import "./MyTips.css";
import { FaRegLightbulb } from "react-icons/fa";
import { MyTipsContext, MyTip } from "./MyTipsProvider";
import TipsHeplfulButton from "./TipsHelpfulButton";

export default function MyTips() {
  const { myTips } = useContext(MyTipsContext);

  return (
      <div className="MyTips">
        <div>お役に立ちましたか？</div>
        {myTips.map((tip) => MyTipField(tip))}
      </div>
  );
}

function MyTipField(myTip: MyTip) {
  const items = [];
  for (let i = 0; i < myTip.helpful_num; i++) {
    items.push(<FaRegLightbulb fontSize={20}></FaRegLightbulb>);
  }

  return (
    <div className="MyTip">
      <div className="title">title = {myTip.tip.title}</div>
      {TipsHeplfulButton(myTip.id)}
      {items}
    </div>
  );
}


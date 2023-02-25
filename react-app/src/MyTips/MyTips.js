import React from "react";
import "./MyTips.css";
import { FaRegLightbulb } from "react-icons/fa";
import TipsHeplfulButton from "./TipsHelpfulButton";
import { useMyTips } from "./MyTipsProvider";

export default function MyTips() {
  const { myTips } = useMyTips();
  return (
    <div className="MyTips">
      <div>お役に立ちましたか？</div>
      {myTips.map((tip) => MyTip(tip))}
    </div>
  );
}

function MyTip( tip ) {
  console.log(tip)
  return (
    <div className="MyTip">
      <div className="title">title = {tip.title}</div>
      {HelpfulLevelBar(tip)}
    </div>
  );
}

function HelpfulLevelBar(tip) {
  console.log(tip)
  const items = [];
  for (let i = 0; i < tip.helpful_num; i++) {
    items.push(<FaRegLightbulb fontSize={20}></FaRegLightbulb>);
  }

  return (
    <div className="HelpfulLevelBar">
      <TipsHeplfulButton {...tip} />
      <div className="helpful">{items}</div>
    </div>
  );
}

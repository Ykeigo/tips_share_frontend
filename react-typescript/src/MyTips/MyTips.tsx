import React, { useState } from "react";
import "./MyTips.css";
import { FaRegLightbulb } from "react-icons/fa";
import TipsHeplfulButton from "./TipsHelpfulButton";
import tipsData from "./my-tips-data.json";
import {Tip, MyTip} from "../types"

export default function MyTips() {
  const [myTips, setMyTips] = useState<Array<MyTip>>(tipsData.MyTips);

  return (
    <div className="MyTips">
      <div>お役に立ちましたか？</div>
      {myTips.map((tip) => MyTip(tip,setMyTips))}
    </div>
  );
}

function MyTip(myTip: MyTip, setMyTips) {
  const items = [];
  for (let i = 0; i < myTip.helpful_num; i++) {
    items.push(<FaRegLightbulb fontSize={20}></FaRegLightbulb>);
  }

  return (
    <div className="MyTip">
      <div className="title">title = {myTip.tip.title}</div>
    <div className="HelpfulLevelBar">
      {HelpfulButton(myTip,setMyTips)}
      <div className="helpful">{items}</div>
    </div>
    </div>
  );
}

function HelpfulButton(myTip:MyTip, setMyTips) {
  

  const updateMyTip = (toUpdate:MyTip) => setMyTips(
    myTips.map((myTip) => (myTip.id === toUpdate.id ? { ...toUpdate } : myTip))
  );

  return (
    {TipsHeplfulButton(myTip, )}
  );
}

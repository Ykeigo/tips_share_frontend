import React from "react";
import "./MyTips.css";
import tipsData from "./tips-data.json";
import { IoMdSchool } from "react-icons/io";

export default function MyTips() {
  return (
    <div class="MyTips">
      <div>お役に立ちましたか？</div>
      {tipsData.MyTips.map((tip) => MyTip(tip))}
    </div>
  );
}

function MyTip({ title }) {
  return <div class="MyTip">
    <div class="title">title = {title}</div>
    <div class="worth"><IoMdSchool fontSize={20}></IoMdSchool></div>
    </div>;
}
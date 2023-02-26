import React, { useContext } from "react";
import { MyTipsContext, MyTip } from "./MyTipsProvider";
import "./MasteredMyTips.css";

export default function MasteredMyTips() {
  const { myTips } = useContext(MyTipsContext);

  return (
    <div className="MasteredMyTips">
      <div>ためになったねえ</div>
      {myTips.map((tip) => tip.helpful_num >= 10 ? MasteredMyTipField(tip) : <></>)}
      <div>10回役に立ったと回答したtipsがここに追加されます。</div>
    </div>
  );
}

function MasteredMyTipField(myTip: MyTip) {
  return (
    <div className="MasteredMyTip" key={myTip.id}>
      <div className="title">{myTip.tip.title}</div>
    </div>
  );
}

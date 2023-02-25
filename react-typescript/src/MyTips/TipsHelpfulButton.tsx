import React from "react";
import { MyTip } from "../types";

export default function TipsHeplfulButton(myTip: MyTip, updateTip:(updated:MyTip) => void) {
  const submit = () => {
    //e.preventDefault();

    const updated = {
      ...myTip,
      helpful_today: !myTip.helped_today,
      helpful_num: myTip.helpful_num + 1,
    };

    updateTip(updated);
  };

  return (
    <div className="TipsHelpfulButton">
      <button onClick={submit}>参考になった！</button>
    </div>
  );
}

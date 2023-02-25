import React from "react";
import { useMyTips } from "./MyTipsProvider";

export default function TipsHeplfulButton({ id }) {
  const { updateTip, getTip } = useMyTips();

  const submit = (e) => {
    //e.preventDefault();

    const current = getTip(id);
    const updated = {
      ...current,
      helpful_today: !current.helpful_today,
      helpful_num: current.helpful_num + 1,
    };

    updateTip(updated);
  };

  return (
    <div className="TipsHelpfulButton">
      <button onClick={submit}>参考になった！</button>
    </div>
  );
}

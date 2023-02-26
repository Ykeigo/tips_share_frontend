import React, { useContext } from "react";
import { MyTipsContext, MyTip } from "./MyTipsProvider";

export function TipsHeplfulButton(id: string) {
  const { getTip, updateTip } = useContext(MyTipsContext);

  const submit = () => {
    //e.preventDefault();

    const current = getTip(id);
    if (current) {
      const numDiff = current.helped_today ? -1 : 1;
      const updated = {
        ...current,
        helped_today: !current.helped_today,
        helpful_num: current.helpful_num + numDiff,
      };
      updateTip(updated);
    }
  };

  return (
    <div className="TipsHelpfulButton">
      <button onClick={submit}>
        {getTip(id)?.helped_today ? "取り消し" : "役立った"}
      </button>
    </div>
  );
}

export function TipsForgotButton(id: string) {
  const { getTip, updateTip } = useContext(MyTipsContext);

  const submit = () => {
    //e.preventDefault();

    const current = getTip(id);
    if (current) {
      const numDiff = current.forgot_today ? 1 : -1;
      const updated = {
        ...current,
        forgot_today: !current.forgot_today,
        helpful_num: current.helpful_num + numDiff,
      };
      updateTip(updated);
    }
  };

  return (
    <div className="TipsForgotButton">
      <button onClick={submit}>
        {getTip(id)?.forgot_today ? "取り消し" : "忘れてた"}
      </button>
    </div>
  );
}

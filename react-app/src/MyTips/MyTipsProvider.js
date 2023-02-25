import React, { createContext, useState, useContext } from "react";
import tipsData from "./my-tips-data.json";
import { v4 } from "uuid";

const MyTipsContext = createContext();
export const useMyTips = () => useContext(MyTipsContext);

export default function MyTipsProvider({ children }) {
  const [myTips, setMyTips] = useState(tipsData.MyTips);

  const addTip = (title, helped_num, helped_today) =>
    setMyTips([
      ...myTips,
      {
        id: v4(),
        title,
        helped_num,
        helped_today,
      },
    ]);

  const getTip = (tip) => myTips.filter((myTip) => myTip.id === tip.id);

  const updateTip = (tip) =>
    setMyTips(
      myTips.map((myTip) => (myTip.id === tip.id ? { ...tip } : myTip))
    );

  const removeTip = (id) =>
    setMyTips(myTips.filter((myTip) => myTip.id !== id));

  return (
    <MyTipsContext.Provider value={{ myTips, addTip, getTip, updateTip, removeTip }}>
      {children}
    </MyTipsContext.Provider>
  );
}

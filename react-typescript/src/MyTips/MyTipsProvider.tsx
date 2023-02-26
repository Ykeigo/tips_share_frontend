import React, { createContext, useState } from "react";

export type Tip = {
  title: string;
  description: string;
};

export type MyTip = {
  id: string;
  tip: Tip;
  helpful_num: number;
  helped_today: boolean;
};

export type MyTipsContextType = {
  myTips: Array<MyTip>;
  addTip: (myTip: MyTip) => void;
  getTip: (id: string) => MyTip | undefined;
  updateTip: (myTips: MyTip) => void;
  deleteTip: (id: string) => void;
};

const defaultMyTipsValue = {
  id: "",
  tip: {
    title: "",
    description: "",
  },
  helpful_num: 0,
  helped_today: false,
};
export const MyTipsContext = createContext<MyTipsContextType>({
  myTips: [],
  addTip: (dummy) => {},
  getTip: (dummy) => undefined,
  updateTip: (dummy) => {},
  deleteTip: (dummy) => {},
});

/**
 * プロバイダ (これ以下の要素で UserContext を使える)
 */
export const MyTipsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const initial = [
    {
      id: "id1",
      tip: {
        title: "testはちゃんと書いたほうがいい",
        description: "動くかわからんからね",
      },
      helpful_num: 3,
      helped_today: false,
    },
    {
      id: "id2",
      tip: {
        title: "testはちゃんと書いたほうがいい",
        description: "動くかわからんからね",
      },
      helpful_num: 3,
      helped_today: false,
    },
  ];
  // ユーザ情報の初期値
  const [myTips, setMyTips] = useState<Array<MyTip>>(initial);

  const addTip = (entity: MyTip) => setMyTips([...myTips, entity]);

  const getTip = (id: string) =>
    myTips.filter((myTip) => myTip.id === id).at(0);

  const updateTip = (entity: MyTip) =>
    setMyTips(
      myTips.map((myTip) => (myTip.id === entity.id ? { ...entity } : myTip))
    );

  const deleteTip = (id: string) =>
    setMyTips(myTips.filter((myTip) => myTip.id !== id));

  return (
    <MyTipsContext.Provider
      value={{ myTips, addTip, getTip, updateTip, deleteTip }}
    >
      {children}
    </MyTipsContext.Provider>
  );
};

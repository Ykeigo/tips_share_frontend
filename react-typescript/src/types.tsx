export interface Tip {
  title: string;
  description: string;
}

export interface MyTip {
  id: string;
  tip: Tip;
  helpful_num: number;
  helped_today: boolean;
}

import "./Background.css";
import MasteredMyTips from "./MyTips/MasteredMyTips";
import Discover from "./OthersTips/DiscoverTab";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import {AiOutlineStar} from "react-icons/ai"
import {BsSnow} from "react-icons/bs"
import {IoTelescopeOutline} from "react-icons/io5"
import{GiLaurels} from "react-icons/gi"

export default function Backyard() {
  return (
    <div className="Backyard">
      <Tabs>
        <TabList>
          <Tab><AiOutlineStar /></Tab>
          <Tab><IoTelescopeOutline /></Tab>
          <Tab><BsSnow /></Tab>
          <Tab><GiLaurels /></Tab>
        </TabList>

        <TabPanel>
          <h1>いいねした他人のtipsが保存される予定</h1>
        </TabPanel>
        <TabPanel>
          <Discover />
        </TabPanel>
        <TabPanel>
          <h1>助かりが更新されなすぎて凍結されたやつが保存される予定</h1>
        </TabPanel>
        <TabPanel>
          <MasteredMyTips />
        </TabPanel>
      </Tabs>
    </div>
  );
}

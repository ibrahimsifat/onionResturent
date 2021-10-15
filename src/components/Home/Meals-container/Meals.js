import React from "react";
import Brackfast from "./Meals/Brackfast/Brackfast";
import Dinner from "./Meals/Dinner/Dinner";
import Lunch from "./Meals/Lunch/Lunch";



const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap mt-14">
        <div className="w-full">
          <ul
            className="flex mb-5 list-none flex-wrap pt-3 pb-4 flex-row justify-center"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal " +
                  (openTab === 1
                    ?"text-" + color + "-600 bg-white"
                    : "text-gray-600 bg-white ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                BrackFast
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-center text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 2
                    ?"text-" + color + "-600 bg-white"
                    : "text-gray-600 bg-white ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Lunch
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-center text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 3
                    ?"text-" + color + "-600 bg-white"
                    : "text-gray-600 bg-white ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Dinner
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1  rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Brackfast></Brackfast>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                 <Lunch></Lunch>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <Dinner></Dinner>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Meals() {
  return (
    <>
       <Tabs color="pink" />;
    </>
  );
}
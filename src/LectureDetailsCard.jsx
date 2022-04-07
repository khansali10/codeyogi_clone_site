import React from "react";
import { BiLinkExternal } from "react-icons/bi";
function LectureDetailsCard(params) {
  return (
    <>
      <div className=" px-4 py-2 bg-white rounded-md shadow-md w-full">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col grow rounded-md">
            <div className="font-semibold">
              <span>Lecture</span>
              <span className="ml-2">#{params.id}</span>
              <span className="text-slate-500 ml-3">({params.date})</span>
            </div>
            <span className="text-slate-400 text-sm">
              Duration: {params.duration}
            </span>
            <div className="font-semibold text-sm p-5 mx-2 mt-2 ">
              <ul className="list-disc">
                <li>{params.lectureTopics}</li>
              </ul>
            </div>
            <div className="">
              <a href="https://google.com" className="">
                <span className="flex items-center justify-center p-3 text-md font-semibold text-slate-500">
                  <BiLinkExternal className="w-6 h-6 mr-2" />
                  Watch/Download Recording
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LectureDetailsCard;

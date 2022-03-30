import React from "react";
import { Link } from "react-router-dom";
function LectureDetailsCard(params) {
  return (
    <>
      <div className=" px-4 py-2 bg-white rounded-md shadow-md">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col grow rounded-md">
            <div className="font-semibold">
              <span>Lecture</span>
              <span className="ml-2">#</span>
              {params.id}
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
              <a
                href="https://google.com"
                className=" flex justify-center p-5 text-slate-700 font-semibold "
              >
                Watch/Download Recording
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LectureDetailsCard;

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";

function AssignContentDetailsCard(params) {
  const { id, title, due_date, created_at, submissions } = params.pass;
  const [showSubmissionButton, updateShowSubmissionButton] = useState(true);
  let submitButton;
  let submitted = "Re-Submit";
  let msg;
  let submission_link;

  if (submissions.length === 0) {
    submitted = "submit";
  } else {
    submission_link = (submissions.length - 1).submission_link;
  }
  return (
    <>
      <div className="w-full px-12 py-2 bg-white rounded-md shadow-md mb-4">
        <Link to={`/assignment/${id}/assigndetail`}>
          <div className="flex justify-between items-center ">
            <div className="flex flex-col ">
              <div className="font-semibold">
                <span>#</span>
                {id}
                <span className="ml-2">{title}</span>
              </div>
              <span className="mt-2 text-stale-100">Due Date: {due_date}</span>
            </div>
          </div>
        </Link>
        <div className="bg-white mt-4 flex justify-center items-center divide-x">
          <button className="w-full p-4 flex justify-center items-center text-green-500 font-semibold bg-white">
            <TiTick /> {submitted}
          </button>
        </div>
        {showSubmissionButton && (
          <a
            href={submission_link}
            className="w-full p-4 font-semibold text-indigo-500  text-center"
          >
            <button className="w-full">
              <BiLinkExternal className="w-6 h-6 mr-2 inline" />
              Show Your Submission
            </button>
          </a>
        )}
      </div>
    </>
  );
}
export default AssignContentDetailsCard;

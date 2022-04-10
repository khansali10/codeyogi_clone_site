import React, { useEffect, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsCheckCircle } from "react-icons/bs";

let isSubmitted;
let isSubmittedClass = "text-red-500 font-semibold";

function AssignContentDetailsCard(params) {
  const { id, title, due_date, created_at, submissions } = params.pass;
  const [showSubmissionButton, updateShowSubmissionButton] = useState(true);
  const [submitPopup, updateSubmitPopup] = useState(false);
  const [submitButton, changeSubmitButton] = useState("Submit");
  const [isSubmitted, changeIsSubmitted] = useState(
    <span className="text-red-600 font-semibold">Not-Submitted</span>
  );
  const [href, updateHref] = useState("");
  useEffect(() => {
    const href = submissions.map((item) => {
      updateHref(item.submission_link);
    });
  }, []);
  console.log(href);
  useEffect(() => {
    if (submissions.length === 0) {
      updateShowSubmissionButton(false);
    } else {
      changeIsSubmitted(
        <span className="text-green-600 font-semibold">Submitted</span>
      );
      changeSubmitButton("Re-Submit");
    }
  }, []);
  return (
    <>
      <div className="w-full px-3 py-2 bg-white rounded-md shadow-lg mb-4">
        <Link to={`/assignment/${id}/assigndetail`}>
          <div className="flex justify-between items-center ">
            <div className="flex flex-col ">
              <div className="font-semibold">
                <span>#</span>
                {id}
                <span className="ml-1">{title}</span>
                <span className="text-slate-500 ml-3">({created_at})</span>
              </div>
              <span className="mt-2 text-stale-300">Due Date: {due_date}</span>
            </div>
            <div>{isSubmitted}</div>
          </div>
        </Link>
        <div className="flex items-center mt-4 divide-x">
          <button
            className="w-full p-4 flex justify-center items-center text-green-600 font-semibold bg-white"
            onClick={() => updateSubmitPopup(true)}
          >
            <BsCheckCircle className="w-6 h-6 mr-2 inline" /> {submitButton}
          </button>
          {showSubmissionButton && (
            <div className="text-center text-indigo-500 font-semibold mt-2 w-full bg-red-200 flex items-stratch">
              <a
                href={href}
                target="_blank"
                className="p-4 w-full bg-green-200"
              >
                <BiLinkExternal className="inline w-6 h-6 mr-2" />
                Show Your Submission
              </a>
            </div>
          )}
          {/* {showSubmissionButton && (
            <a
              href={submissions.submission_link}
              className="w-full p-4 font-semibold text-indigo-500  text-center"
            >
              <BiLinkExternal className="w-6 h-6 mr-2 inline" /> Show Your
              Submission
            </a>
          )} */}
        </div>
      </div>
      <div>
        {submitPopup && (
          <div className="min-h-screen w-full flex justify-center items-center fixed top-0 left-0 p-12 bg-indigo-500 opacity-50">
            <div className=" w-3/4 h-60 bg-white opacity-100 rounded-md">
              <span>it is popup</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default AssignContentDetailsCard;

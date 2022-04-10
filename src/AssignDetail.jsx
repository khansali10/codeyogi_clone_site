import axios from "axios";
import React, { useEffect, useState } from "react";
function AssignDetail(props) {
  let assignmentId = props.assignmentId;
  const [assignmentDetails, updateAssignmentDetail] = useState([]);
  useEffect(() => {
    const wholeData = axios.get(
      "https://api.codeyogi.io/assignments/:assignmentId",
      { withCredentials: true }
    );
    wholeData.then((response) => {
      updateAssignmentDetail(response.data);
    });
  }, []);
  return (
    <>
      <div className="px-4 bg-white rounded-md">
        <div className=" py-4 border-b border-b-slate-200">
          <span className="text-lg font-semibold">Assignment Details</span>
        </div>
        <div className="border-b border-b-slate-200 py-5 flex justify-between">
          <span className="font-semibold text-slate-500 text-sm">Title</span>
          <span className="">{title}</span>
          <span></span>
        </div>
        <div className="border-b border-b-slate-200 py-5 flex justify-between">
          <span className="font-semibold text-slate-500 text-sm">Due Date</span>
          <span>{due_date}</span>
          <span></span>
        </div>
        <div className="border-b border-b-slate-200 py-5 flex justify-between">
          <span className="font-semibold text-slate-500 text-sm">
            Description
          </span>
          <span></span>
          <span></span>
        </div>
        <div className="pt-5 pb-8">
          <button className="bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-lg font-semibold text-white">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
export default AssignDetail;

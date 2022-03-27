import React from 'react';
import AssignContentDetailsCard from "./AssignContentDetailsCard";
import { Link } from "react-router-dom";
function AssignContentList(params) {
  return (
    <>
      <div className="flex-col py-5 px-16 space-y-5">
        <Link to="/assignment/assigndetail"><AssignContentDetailsCard assignmentTitle="Fifth assignment" id="5" dueDate="Wed 26 Mar 2022" submited={false}></AssignContentDetailsCard></Link>
        <AssignContentDetailsCard assignmentTitle="Forth assignment" id="4" dueDate="Wed 26 Mar 2022" submited={true}></AssignContentDetailsCard>
        <AssignContentDetailsCard assignmentTitle="Third assignment" id="3" dueDate="Wed 26 Mar 2022" submited={true}></AssignContentDetailsCard>
        <AssignContentDetailsCard assignmentTitle="Second assignment" id="2" dueDate="Wed 26 Feb 2022" submited={true}></AssignContentDetailsCard>
        <AssignContentDetailsCard assignmentTitle="First assignment" id="1" dueDate="Wed 26 Jan 2022" submited={true}></AssignContentDetailsCard>
      </div>
    </>
  );

}
export default AssignContentList;
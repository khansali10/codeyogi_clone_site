import React from 'react';
import AssignContentDetailsCard from "./AssignContentDetailsCard";

function AssignContentList(params) {
  return(
    <>
      <div className="flex-col p-5 bg-slate-400 space-y-4">
        <AssignContentDetailsCard assignmentTitle="first assignment" id="1" dueDate="23/2/22" submited={true}></AssignContentDetailsCard>
        <AssignContentDetailsCard assignmentTitle="second assignment" id="2" dueDate="23/2/22" submited={true}></AssignContentDetailsCard>
        <AssignContentDetailsCard assignmentTitle="third assignment" id="3" dueDate="23/2/22" submited={false}></AssignContentDetailsCard>
        <AssignContentDetailsCard assignmentTitle="forth assignment" id="4" dueDate="23/2/22" submited={false}></AssignContentDetailsCard>
        <AssignContentDetailsCard assignmentTitle="fifth assignment" id="5" dueDate="23/2/22" submited={false}></AssignContentDetailsCard>
      </div>
    </>
  );
  
}
export default AssignContentList;
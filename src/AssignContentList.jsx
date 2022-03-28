import React from 'react';
import AssignContentDetailsCard from "./AssignContentDetailsCard";
import { Link } from "react-router-dom";
import ListLayout from './ListLayout';
function AssignContentList() {
  return (
    <>
      <ListLayout>
        <Link to="/assignment/assigndetail"><AssignContentDetailsCard assignmentTitle="Fifth assignment" id="5" dueDate="Wed 26 Mar 2022" submited={false}></AssignContentDetailsCard></Link>
        <Link to="/assignment/assigndetail"> <AssignContentDetailsCard assignmentTitle="Forth assignment" id="4" dueDate="Wed 26 Mar 2022" submited={true}></AssignContentDetailsCard></Link>
        <Link to="/assignment/assigndetail"><AssignContentDetailsCard assignmentTitle="Third assignment" id="3" dueDate="Wed 26 Mar 2022" submited={true}></AssignContentDetailsCard></Link>
        <Link to="/assignment/assigndetail"><AssignContentDetailsCard assignmentTitle="Second assignment" id="2" dueDate="Wed 26 Feb 2022" submited={true}></AssignContentDetailsCard></Link>
        <Link to="/assignment/assigndetail"><AssignContentDetailsCard assignmentTitle="First assignment" id="1" dueDate="Wed 26 Jan 2022" submited={true}></AssignContentDetailsCard></Link>
      </ListLayout>
    </>
  );

}
export default AssignContentList;
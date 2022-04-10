import React, { useEffect, useState } from "react";
import AssignContentDetailsCard from "./AssignContentDetailsCard";
import { Link } from "react-router-dom";
import ListLayout from "./ListLayout";
import axios from "axios";
function AssignContentList() {
  const [assignmentData, updateAssignmentData] = useState([]);
  console.log("assignmentData ", assignmentData);
  useEffect(() => {
    axios
      .get("https://api.codeyogi.io/batches/1/assignments", {
        withCredentials: true,
      })
      .then((response) => {
        console.log("response.data ", response.data);
        updateAssignmentData(response.data);
      });
  }, []);
  return (
    <>
      <ListLayout>
        {assignmentData.map((item) => (
          
            <AssignContentDetailsCard
              key={item}
              pass={item}
            ></AssignContentDetailsCard>
          
        ))}
      </ListLayout>
    </>
  );
}
export default AssignContentList;

import React, { useEffect, useState } from "react";
import AssignContentDetailsCard from "./AssignContentDetailsCard";
import ListLayout from "./ListLayout";
import axios from "axios";
import { Link } from "react-router-dom";
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
              key={item.id}
              pass={item}
            ></AssignContentDetailsCard>
        ))}
      </ListLayout>
    </>
  );
}
export default AssignContentList;

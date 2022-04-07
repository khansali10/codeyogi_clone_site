import React from "react";
import AssignContentDetailsCard from "./AssignContentDetailsCard";
import { Link } from "react-router-dom";
import ListLayout from "./ListLayout";
function AssignContentList(params) {
  const data = [
    {
      name: "fifth assignment",
      id: 5,
      dueDate: "Thus 24 Mar 2022",
      submited: false,
    },
    {
      name: "forth assignment",
      id: 4,
      dueDate: "Tue 22 Mar 2022",
      submited: true,
    },
    {
      name: "third assignment",
      id: 3,
      dueDate: "Sun 20 Mar 2022",
      submited: true,
    },
    {
      name: "second assignment",
      id: 2,
      dueDate: "Fri 18 Mar 2022",
      submited: true,
    },
    {
      name: "first assignment",
      id: 1,
      dueDate: "Wed 16 Mar 2022",
      submited: true,
    },
  ];

  return (
    <>
      <ListLayout>
        {data.map((item) => (
          <Link to={`/assignment/${item.id}/assigndetail`}>
            <AssignContentDetailsCard
              assignmentTitle={item.name}
              id={item.id}
              submited={item.submited}
              dueDate={item.dueDate}
              key={item.id}
            ></AssignContentDetailsCard>
          </Link>
        ))}
      </ListLayout>
    </>
  );
}
export default AssignContentList;

import React from "react";
import LectureDetailsCard from "./LectureDetailsCard";
import { Link } from "react-router-dom";
import ListLayout from "./ListLayout";

function LectureContentList() {
  const lectureData = [
    {
      topic: "Responsive Design",
      id: 5,
      date: "Wed 24 Mar 2022",
      duration: "3hr",
    },
    {
      topic: "CSS Position and Units",
      id: 4,
      date: "Mon 21 Mar 2022",
      duration: "3hr",
    },
    {
      topic: "Tailwind CSS",
      id: 3,
      date: "Sat 19 Mar 2022",
      duration: "3hr",
    },
    {
      topic: "Utility Classes",
      id: 2,
      date: "Thus 17 Mar 2022",
      duration: "3hr",
    },
    {
      topic: "Basic HTML CSS",
      id: 1,
      date: "Wed 16 Mar 2022",
      duration: "3hr",
    },
  ];
  return (
    <>
      <ListLayout>
        {lectureData.map((item) => (
          <LectureDetailsCard
            lectureTopics={item.topic}
            id={item.id}
            date={item.date}
            duration={item.duration}
            key={item.id}
          ></LectureDetailsCard>
        ))}
      </ListLayout>
    </>
  );
}
export default LectureContentList;

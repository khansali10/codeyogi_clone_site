import React from 'react';
import LectureDetailsCard from "./LectureDetailsCard";
import { Link } from "react-router-dom";
import ListLayout from './ListLayout';

function LectureContentList() {
    return (
        <>
            <ListLayout>
                <LectureDetailsCard lectureTopics="Responsive Design" id="5" date="Wed 26 Mar 2022" duration="3hr"></LectureDetailsCard>
                <LectureDetailsCard lectureTopics="CSS Position and Units" id="4" date="Wed 26 Mar 2022" duration="3hr"></LectureDetailsCard>
                <LectureDetailsCard lectureTopics="Tailwind CSS" id="3" date="Wed 26 Mar 2022" duration="3hr"></LectureDetailsCard>
                <LectureDetailsCard lectureTopics="Utility Classes" id="2" date="Wed 26 Feb 2022" duration="3hr"></LectureDetailsCard>
                <LectureDetailsCard lectureTopics="Basic HTML CSS" id="1" date="Wed 26 Jan 2022" duration="3hr"></LectureDetailsCard>
            </ListLayout>
        </>
    );

}
export default LectureContentList;
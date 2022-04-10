import React from "react";
import ReactMarkdown from "react-markdown";
function LectureDetailsCard(props) {
  const { id, topic, start_time, end_time } = props.pass;
  return (
    <>
      <div className="w-full px-4 py-2 bg-white rounded-md shadow-md mb-4">
        <div className="flex-col justify-between items-center ">
          <div className="flex items-center">
            <div className="font-semibold">
              <span className="mr-2">Lecture</span>
              <span>#{id}</span>
            </div>
            <span className="ml-2 text-stale-500">Date: ({start_time})</span>
          </div>
          <div className="mt-2">Duration: {end_time}</div>
          <div>
            <span className="font-semibold mt-3 ">
              <ul className="list-decimal">
                <ReactMarkdown>{topic}</ReactMarkdown>
              </ul>
            </span>
          </div>
        </div>
        {/* <div>
          <a href={recording_url} className="p-5 w-full bg-red-300">
            Watch/Download Recording
          </a>
        </div> */}
      </div>
    </>
  );
}
export default LectureDetailsCard;

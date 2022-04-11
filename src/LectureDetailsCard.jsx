import React from "react";
import ReactMarkdown from "react-markdown";
import { BiLinkExternal } from "react-icons/bi";
import { DateTime } from "luxon";
function LectureDetailsCard(props) {
  const { id, topic, start_time, end_time, recording_url, created_at } =
    props.pass;
  const date1 = new Date(start_time);
  const date2 = new Date(end_time);
  const diffTime = Math.abs(date2 - date1);
  const duration = Duration.fromMillis(150000).toFormat("mm'm' ss's'");

  const createdDate = DateTime.fromISO(created_at);
  const createdAt = createdDate.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);

  return (
    <>
      <div className="w-full px-4 py-2 flex-col bg-white rounded-md shadow-lg mb-4">
        <div className="flex-col justify-between items-center ">
          <div className="flex items-center">
            <div className="font-semibold">
              <span className="mr-1">Lecture</span>
              <span>#{id}</span>
            </div>
            <span className="ml-2 text-stale-500 font-semibold text-slate-500">
              ({createdAt})
            </span>
          </div>
          <div className="mt-2 text-sm text-slate-500">
            Duration: {duration}
          </div>
          <div className="p-5">
            <span className="font-semibold mt-3 ">
              <ReactMarkdown>{topic}</ReactMarkdown>
            </span>
          </div>
        </div>
        <div className="text-center text-slate-500 font-semibold mt-2 w-full  flex items-stratch">
          <a href={recording_url} className="p-4 w-full ">
            <BiLinkExternal className="inline w-6 h-6 mr-2" />
            Watch/Download Recording
          </a>
        </div>
      </div>
    </>
  );
}
export default LectureDetailsCard;

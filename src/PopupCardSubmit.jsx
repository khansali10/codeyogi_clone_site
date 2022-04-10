import React, { useState } from "react";
function PopupCardSubmit() {
  const [inputUrl, updateInputUrl] = useState("");
  const changeFun = (event) => {
    updateInputUrl(event.target.value);
    console.log(inputUrl);
  };

  const submitAssignment = () => {
    console.log("assignment not posted");
  };
  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center fixed top-0 left-0 p-12  bg-slate-300">
        <div className=" w-1/2 h-60 bg-white opacity-100 rounded-lg px-3 py-4 bg-blend-lighten text-slate-500">
          <div className="p-5 border-y border-y-slate-200  flex justify-between items-center">
            <span className="font-semibold">Submission Link</span>
            <input
              type="url"
              id="assignmentUrl"
              className="p-3 rounded-md w-3/4 border border-slate-400 bg-slate-50"
              placeholder="Submission Link"
              onChange={changeFun}
            />
          </div>
          <button
            type="submit"
            className="mt-6 py-2 px-9 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-semibold"
            onClick={submitAssignment}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
export default PopupCardSubmit;

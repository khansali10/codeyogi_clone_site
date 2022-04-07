import React from "react";
function UserDetailCard(props) {
  return (
    <div className="w-72  bg-slate-200 rounded-md p-3 ">
      <img src={props.profilePicture} className="w-72 h-48 object-cover" />
      <div className="space-y-2 my-3">
        <div>
          <span className="text-lg font-semibold">
            {props.title} {props.firstName} {props.lastName}
          </span>
        </div>
        <div>
          <span className="text-lg font-semibold text-indigo-500 ">
            {props.city}
          </span>
        </div>
        <div className="flex justify-start space-x-2">
          <a href="https://twitter.com">
            <img src={props.twitterIcon} className="w-6 h-6"></img>
          </a>
          <a href="https://linkdin.com">
            <img src={props.linkdinIcon} className="w-6 h-6"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
export default UserDetailCard;

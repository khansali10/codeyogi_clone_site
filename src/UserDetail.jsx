import React, { useState } from "react";
import UserDetailCard from "./UserDetailCard";

function UserDetail({ userDetail } = props) {
  console.log(userDetail);
  return (
    <>
      <div className=" inline-block ml-2">
        {userDetail.name.first}
        <UserDetailCard
          profilePicture={userDetail.picture.large}
          title={userDetail.name.title}
          firstName={userDetail.name.first}
          lastName={userDetail.name.last}
          city={userDetail.location.city}
          twitterIcon="twitter_logo_in_userDetail.webp"
          linkdinIcon="linkdin_logo_in_userDetail.webp"
        />
      </div>
    </>
  );
}
export default UserDetail;

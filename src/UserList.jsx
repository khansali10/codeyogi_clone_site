import React, { useState, useCallback, useEffect } from "react";
import ListLayout from "./ListLayout";
import UserDetail from "./UserDetail";
import axios from "axios";
function UserList() {
  const [allUserData, updateAllUserData] = useState([]);
  console.log("1 ", allUserData);
  useEffect(() => {
    const token = axios.get("https://randomuser.me/api/?results=10");
    token.then((response) => {
      updateAllUserData(response.data.results);
      console.log("2 all user data ", allUserData);
    });
  }, []);

  return (
    <>
      <ListLayout>
        {allUserData.map((item) => (
          <UserDetail userDetail={item} key={item.id.value} />
        ))}
      </ListLayout>
    </>
  );
}
export default UserList;

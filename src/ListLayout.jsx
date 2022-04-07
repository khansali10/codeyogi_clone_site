import React from "react";
function ListLayout(props) {
  return (
    <div className=" w-full justify-between py-5 px-12 space-y-5">
      {props.children}
    </div>
  );
}
export default ListLayout;

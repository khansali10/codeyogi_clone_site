import React from "react";
function ListLayout(props) {
    return (
        <div className="flex-col py-5 px-16 space-y-5">
            {props.children}
        </div>
    );
}
export default ListLayout;
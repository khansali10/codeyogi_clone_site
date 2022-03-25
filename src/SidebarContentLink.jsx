import React from 'react';

import { Link } from "react-router-dom";

function SidebarContentLink(params) {
  return(
    <>
      <div className="bg-red-300 ">
        <Link to={params.linkTo} className="flex p-2 text-white text-lg font-semibold border border-black rounded-lg bg-red-400"><div className="text-2xl  mr-2">{params.icon}</div>
           {params.linkText}</Link>
      </div>
    </>
  );
  
}
export default SidebarContentLink;
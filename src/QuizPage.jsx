import React from 'react';
import {Link} from "react-router-dom"

function QuizPage(params) {
  return(
    <>
      <div className="bg-red-500 grow ">
        <Link to="/lecture" className="text-5xl"><button>Back</button></Link>
      </div>
    </>
  );
  
}
export default QuizPage;
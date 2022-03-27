import PreviousMap from 'postcss/lib/previous-map';
import React from 'react';
import { useParams } from 'react-router-dom';


function AssignDetail(props) {
    return (
        <>
            <div className="py-3 px-4 bg-white rounded-md">
                <span className='text-lg font-semibold'>assignment Details</span>
                <div>
                    <span>AssignmentTitle</span>
                </div>
                <div>
                    <span>Due Date</span>
                </div>
                <div>
                    <span>Description</span>
                </div>
                <button>Submit</button>
            </div>
        </>
    );

} export default AssignDetail;
import React from 'react';
import { Outlet } from 'react-router-dom';
import { TiTick } from "react-icons/ti"

function AssignContentDetailsCard(params) {
	const [
		showYourSubmissionButton,
		// updateShowYourSubmissionButton
	] = React.useState(false);

	let submitButton;
	let submitted;
	let msg;

	if (params.submited) {
		submitButton = 're-submit';
		submitted = <span className="text-green-500">Submitted</span>
		msg = "(Submission will count as late now)";
	} else {
		submitButton = 'submit';
		submitted = <span className="text-red-500">Not-submitted</span>
	}

	return (
		<>
			<div className=" px-4 py-2 bg-white rounded-md shadow-md mb-4">
				<div className="flex justify-between items-center ">
					<div className="flex flex-col ">
						<div className="font-semibold">
							<span>#</span>
							{params.id}
							<span className="ml-2">{params.assignmentTitle}</span>
						</div>
						<span className="mt-2 text-stale-500">Due Date: {params.dueDate}</span>
						<span className="text-red-500 text-sm">{msg}</span>
					</div>
					<span className="text-green-500">{submitted}</span>
				</div>
				<div className="bg-white mt-4 flex justify-center items-center divide-x">
					
					<button className="w-full p-4 flex justify-center items-center text-green-500 bg-white"><TiTick /> {submitButton}</button>
					{showYourSubmissionButton && (
						<button className="w-full p-4 ">{submitButton}</button>
					)}
				</div>
			</div>
		</>
	);
}
export default AssignContentDetailsCard;

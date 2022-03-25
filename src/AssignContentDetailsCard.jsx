import React from 'react';
import { Outlet } from 'react-router-dom';

function AssignContentDetailsCard(params) {
	const [
		showYourSubmissionButton,
		updateShowYourSubmissionButton
	] = React.useState(false);

	let submmision;
	let submit;
	if (params.submited) {
		submmision = 're-submit';
		submit = 'submitted';
	} else {
		submmision = 'submit';
	}
	return (
		<>
			<div className=" py-5 px-2 bg-white rounded-md shadow-md">
				<div className="flex justify-between items-center ">
					<div className="flex flex-col p-3">
						<div className="font-semibold">
							<span>#</span>
							{params.id}
							<span className="ml-2">{params.assignmentTitle}</span>
						</div>
						<span className="text-red-500">Due Date: {params.dueDate}</span>
					</div>
					<span className="text-green-500">{submit}</span>
				</div>
				<div className="bg-red-100 flex justify-center items-center divide-x">
					<button className="w-full p-4  bg-red-400">{submmision}</button>
					{showYourSubmissionButton && (
						<button className="w-full p-4 ">{submmision}</button>
					)}
				</div>
			</div>
		</>
	);
}
export default AssignContentDetailsCard;

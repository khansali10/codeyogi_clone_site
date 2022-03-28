import React from 'react';
import WebsiteTitle from './WebsiteTitle';
import SidebarContentLink from './SidebarContentLink';
import { MdOutlineQuiz } from 'react-icons/md';
import { MdAssignment } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';

function Sidebar() {
	return (
		<>
			<div className="w-60 p-3 bg-slate-800 flex flex-col justify-between sticky top-0 h-screen">
				<h1 className="p-2 text-3xl text-white font-extrabold uppercase">{<WebsiteTitle />}</h1>
				<div className=' flex flex-col justify-between  h-screen mt-3'>
					<div className="" >
						<SidebarContentLink
							linkTo="quiz"
							linkText="Quiz"
							icon={<MdOutlineQuiz />}
						/>
						<SidebarContentLink
							linkTo="lecture"
							linkText="Lecture"
							icon={<SiGoogleclassroom />}
						/>
						<SidebarContentLink
							linkTo="assignment"
							linkText="Assignment"
							icon={<MdAssignment />}
						/>
					</div>
					<div className=" ">
						<SidebarContentLink
							linkTo="profile"
							linkText="Profile"
							icon={<CgProfile />}
						/>
						<SidebarContentLink
							linkTo="/logout"
							linkText="Logout"
							icon={<BiLogOut />}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Sidebar;

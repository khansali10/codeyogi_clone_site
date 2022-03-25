import React from 'react';
import SidebarContentLink from './SidebarContentLink';
import { MdAssignment } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';
function Sidebar() {
	return (
		<>
			<div className="w-60 p-3 bg-slate-700 flex flex-col justify-between sticky top-0 h-screen">
				<div>
					<h1 className="p-2 text-4xl text-white font-extrabold">CODEYOGI</h1>
					<SidebarContentLink
						linkTo="quiz"
						linkText="quiz"
						icon={<MdAssignment />}
					/>
					<SidebarContentLink
						linkTo="assignment"
						linkText="assignment"
						icon={<MdAssignment />}
					/>
					<SidebarContentLink
						linkTo="lecture"
						linkText="lecture"
						icon={<SiGoogleclassroom />}
					/>
				</div>
				<div className=" ">
					<SidebarContentLink
						linkTo="profile"
						linkText="profile"
						icon={<CgProfile />}
					/>
					<SidebarContentLink
						linkTo="logout"
						linkText="logout"
						icon={<BiLogOut />}
					/>
				</div>
			</div>
		</>
	);
}

export default Sidebar;

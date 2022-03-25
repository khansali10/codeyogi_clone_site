import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function MainLayout() {
	return (
		<>
      <div className="flex  grow">
			<div className="sticky top-0 bg-indigo-800">
				<Sidebar />
			</div>
			<div className="p-4 grow bg-yellow-500 ">
				<Outlet />
			</div>
      </div>
		</>
	);
}
export default MainLayout;

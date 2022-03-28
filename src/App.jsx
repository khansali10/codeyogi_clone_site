import React from 'react';
import QuizPage from './QuizPage';
import LecturePage from './LecturePage';
import AssignmentPage from './AssignmentPage';
import MainLayout from "./MainLayout";
import {Routes, Route } from 'react-router-dom';
import AssignDetail from './AssignDetail';
import Logout from "./Logout";
function App() {
	return (
		<>
			<div className="flex items-stretch ">
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route path="/" element={<AssignmentPage />} />
						<Route path="/assignment" element={<AssignmentPage />} />
						<Route path="/assignment/assigndetail" element={<AssignDetail />} />
						<Route path="/lecture" element={<LecturePage />} />
						<Route path="/logout" element={<Logout />} />
					</Route>
					<Route path="/quiz" element={<QuizPage username="sachin" />} />
				</Routes>
			</div>
		</>
	);
}

export default App;

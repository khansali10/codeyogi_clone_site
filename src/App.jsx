import React from 'react';
import QuizPage from './QuizPage';
import LecturePage from './LecturePage';
import AssignmentPage from './AssignmentPage';
import MainLayout from "./MainLayout";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<div className="flex items-stretch ">
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route path="/assignment" element={<AssignmentPage />} />
						<Route path="/lecture" element={<LecturePage />} />
					</Route>
					<Route path="quiz" element={<QuizPage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;

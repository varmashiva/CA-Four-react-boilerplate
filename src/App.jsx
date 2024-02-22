// importing files
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Result from './components/Result';
import QuestionPage from './components/QuestionPage';
const App = () => {
  return (
    <div>
  {/* using routes */}
      <Routes>
        <Route path="/" element={<QuestionPage />} />
        <Route path="/result/:id" element={<Result />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </div>
  );
};

export default App;

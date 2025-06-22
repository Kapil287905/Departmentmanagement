import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Sidebar from './sidebar';
import DepartmentList from './components/DepartmentList'
import DepartmentForm from './components/DepartmentForm'
import './index.css';
import RoleListPage from './components/RoleList';
import RoleFormPage from './components/RoleForm';

function App() {
  return (
    <>    
    <div className="container">
      <Sidebar/>     
      <div className="content flex-grow-1" style={{ marginLeft: window.innerWidth >= 768 ? '160px' : '0px', textAlign:'left' }}> {/* Adjust margin for sidebar width */}
        {/* Your main page content goes here */}
        <div className="container-fluid p-4">
          <Routes>
            <Route path="/" element={<DepartmentList />} />
            <Route path="/add" element={<DepartmentForm />} />
            <Route path="/edit/:id" element={<DepartmentForm />} />
            <Route path="/role" element={<RoleListPage />} />
            <Route path="/roleadd" element={<RoleFormPage />} />
            <Route path="/editrole/:id" element={<RoleFormPage />} />
          </Routes>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
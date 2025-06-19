import { Routes, Route, Link } from 'react-router-dom'
import DepartmentList from './components/DepartmentList'
import DepartmentForm from './components/DepartmentForm'
import './index.css'
import { toggleSidebar } from './script.js'

function App() {
  return (
    <>
    <nav>
        <div className="logo-name">  
            <span className="logo_name">Logo</span>
        </div>

        <div className="menu-items">
            <ul className="nav-links" style={{paddingLeft:"0rem"}}>
                <li><a href="/">
                    <i className="uil uil-estate"></i>
                    <span className="link-name">View Departments</span>
                </a></li>
                <li><a href="/add">
                    <i className="uil uil-files-landscapes"></i>
                    <span className="link-name">Add Department</span>
                </a></li>
                
            </ul>
            
            <ul className="logout-mode">                
              <li>
                <div className="mode-toggle">
                </div>
              </li>
            </ul>  
        </div>
    </nav>
    <section className="dashboard">
      <div className="top">
           <i className="uil uil-bars sidebar-toggle"  onClick={toggleSidebar}></i>
                      
      </div>
      <div className="dash-content">
      <div class="overview">
      <div class="title">
          <i class="uil uil-tachometer-fast-alt"></i>
          <span class="text">Department Management</span>
      </div>
      <Routes>
        <Route path="/" element={<DepartmentList />} />
        <Route path="/add" element={<DepartmentForm />} />
        <Route path="/edit/:id" element={<DepartmentForm />} />
      </Routes>
      </div>
      </div>
    </section>
    </>
  )
}


export default App

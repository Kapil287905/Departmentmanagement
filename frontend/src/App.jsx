import { Routes, Route, Link } from 'react-router-dom'
import DepartmentList from './components/DepartmentList'
import DepartmentForm from './components/DepartmentForm'

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Department Management</h1>
      <nav className="mb-4">
        <Link to="/" className="btn btn-outline-primary me-2">View Departments</Link>
        <Link to="/add" className="btn btn-primary">Add Department</Link>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">Admin Dashboard</Link>
          <div>
            <Link className="nav-link d-inline" to="/">Departments</Link>
            <Link className="nav-link d-inline" to="/add">Add New</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<DepartmentList />} />
        <Route path="/add" element={<DepartmentForm />} />
        <Route path="/edit/:id" element={<DepartmentForm />} />
      </Routes>
    </div>
  )
}


export default App

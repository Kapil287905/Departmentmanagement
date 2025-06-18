import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/api/departments/'

const DepartmentListPage = () => {
  const [departments, setDepartments] = useState([])

  const fetchDepartments = async () => {
    const res = await axios.get(API_URL)
    setDepartments(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    fetchDepartments()
  }, [])

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}${id}/`)
    fetchDepartments()
  }

  return (
    <table className="table table-bordered">
      <thead className="table-light">
        <tr>
          <th>Sr.No</th>
          <th>Department Name</th>
          <th>Description</th>          
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {departments.map((dept, index) => (
          <tr key={dept.dept_id}>
            <td>{index + 1}</td>
            <td>{dept.dept_name}</td>
            <td>{dept.description}</td>
            <td><Link to={`/edit/${dept.dept_id}`} className="btn btn-warning btn-sm me-2">Edit</Link></td>
            <td>              
              <button onClick={() => handleDelete(dept.dept_id)} className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DepartmentListPage

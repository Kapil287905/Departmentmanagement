import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/api/role/'

const RoleListPage = () => {
  const [Roles, setRoles] = useState([])

  const fetchRoles = async () => {
    const res = await axios.get(API_URL)
    setRoles(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    fetchRoles()
  }, [])

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}${id}/`)
    fetchRoles()
  }

  return (
    <>
    <div className="title">
        <i className="uil uil-tachometer-fast-alt"></i>
        <span className="text">Role Management</span>
    </div>    
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Sr.No</th>
            <th>Role Name</th>       
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Roles.map((role, index) => (
            <tr key={role.id}>
              <td>{index + 1}</td>
              <td>{role.role}</td>
              <td>
                <Link to={`/editrole/${role.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
              </td>
              <td>
                <button onClick={() => handleDelete(role.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default RoleListPage

import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/api/departments/'

const DepartmentFormPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    dept_name: '',
    description: '',
    status: true,
  })

  useEffect(() => {
    if (id) {
      axios.get(`${API_URL}${id}/`).then((res) => {
        setForm(res.data)
      })
    }
  }, [id])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (id) {
      await axios.put(`${API_URL}${id}/`, form)
    } else {
      await axios.post(API_URL, form)
    }
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Department Name</label>
        <input
          type="text"
          name="dept_name"
          className="form-control"
          value={form.dept_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={form.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="status"
          name="status"
          checked={form.status}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="status">Active</label>
      </div>
      <button type="submit" className="btn btn-success">{id ? "Update" : "Add"} Department</button>
    </form>
  )
}

export default DepartmentFormPage

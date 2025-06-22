import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/role/'

const RoleFormPage = () => {
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams(); // id is present if it's edit

  const ROLE_CHOICES = [
    { value: 'admin', label: 'Admin' },
    { value: 'manager', label: 'Manager' },
    { value: 'team_leader', label: 'Team-Leader' },
    { value: 'employee', label: 'Employee' },
  ];

  // Fetch existing role data if editing
  useEffect(() => {
    if (id) {
      axios.get(`${API_URL}${id}/`)
        .then(res => setRole(res.data.role))
        .catch(err => {
          console.error(err);
          setMessage('Error loading role.');
        });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Editing
        await axios.put(`${API_URL}${id}/`, { role });
        setMessage('Role updated successfully!');
      } else {
        // Adding
        await axios.post(API_URL, { role });
        setMessage('Role added successfully!');
      }
    } catch (error) {
      setMessage('Operation failed.');
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h3>{id ? 'Edit Role' : 'Add Role'}</h3>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Select Role:</label>
          <select
            className="form-control"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">-- Select Role --</option>
            {ROLE_CHOICES.map(r => (
              <option key={r.value} value={r.value}>{r.label}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? 'Update' : 'Add'} Role
        </button>
      </form>
    </div>
  );
};

export default RoleFormPage;



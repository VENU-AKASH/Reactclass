import Task12 from "./task12/Task12";
import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // GET - Fetch users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // POST - Create user
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.website
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      if (editingId) {
        // PUT - Update user
        const response = await fetch(`${API_URL}/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: editingId,
            ...formData,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to update user");
        }

        const updatedUser = await response.json();

        setUsers(
          users.map((user) =>
            user.id === editingId ? updatedUser : user
          )
        );

        setEditingId(null);
      } else {
        // POST - Create user
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to create user");
        }

        const newUser = await response.json();

        setUsers([...users, newUser]);
      }

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
      });
    } catch (err) {
      setError(err.message);
    }
  };

  // Edit button
  const handleEdit = (user) => {
    setEditingId(user.id);

    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // DELETE - Delete user
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      // Update UI
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  // Cancel edit
  const handleCancel = () => {
    setEditingId(null);

    setFormData({
      name: "",
      email: "",
      phone: "",
      website: "",
    });
  };

  return (
    <div className="app">
      <div className="container">

        <header>
          <h1>User Management</h1>
          <p>React CRUD Operations using JSONPlaceholder API</p>
        </header>

        {/* Add / Edit Form */}
        <div className="form-card">
          <h2>{editingId ? "Edit User" : "Add New User"}</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Website</label>
                <input
                  type="text"
                  name="website"
                  placeholder="Enter website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="form-buttons">
              <button type="submit" className="primary-btn">
                {editingId ? "Update User" : "Add User"}
              </button>

              {editingId && (
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Error Message */}
        {error && <div className="error">{error}</div>}

        {/* User Table */}
        <div className="table-card">
          <div className="table-header">
            <h2>Users List</h2>
            <span>{users.length} Users</span>
          </div>

          {loading ? (
            <div className="loading">
              Loading users...
            </div>
          ) : users.length === 0 ? (
            <div className="empty">
              No users found.
            </div>
          ) : (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td className="user-name">
                        {user.name}
                      </td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.website}</td>

                      <td>
                        <div className="actions">
                          <button
                            className="edit-btn"
                            onClick={() => handleEdit(user)}
                          >
                            Edit
                          </button>

                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(user.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
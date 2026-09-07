import { useEffect, useState } from "react";
import "./Task12.css";

function Task12() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState(null);

  // GET - Fetch users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  // POST - Add user
  const addUser = (e) => {
    e.preventDefault();

    const newUser = {
      name: name,
      email: email,
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers([...users, data]);
        setName("");
        setEmail("");
      });
  };

  // PUT - Update user
  const updateUser = (e) => {
    e.preventDefault();

    const updatedUser = {
      name: name,
      email: email,
    };

    fetch(`https://jsonplaceholder.typicode.com/users/${editingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(
          users.map((user) =>
            user.id === editingId ? { ...user, ...data } : user
          )
        );

        setName("");
        setEmail("");
        setEditingId(null);
      });
  };

  // DELETE - Delete user
  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    }).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  // Edit button
  const editUser = (user) => {
    setEditingId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  return (
    <div className="task12-container">
      <h1>Task 12 - CRUD Operations</h1>

      <form onSubmit={editingId ? updateUser : addUser}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">
          {editingId ? "Update User" : "Add User"}
        </button>

        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setName("");
              setEmail("");
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>

              <td>
                <button onClick={() => editUser(user)}>Edit</button>

                <button onClick={() => deleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task12;
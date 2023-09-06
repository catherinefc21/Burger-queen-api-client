import React from "react";
import "./users.css";

const Users = ({ users }) => {
  return (
    <section className='users'>
      {users.map((user) => (
        <div className='info-users' key={user.id}>
          <div className='email'>{user.email}</div>
          <div className='role'>{user.role}</div>
          <button className='btn-edit'>Editar</button>
          <button className='delete-admin'>Borrar</button>
        </div>
      ))}
    </section>
  );
};

export default Users;

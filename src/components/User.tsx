import { useState } from 'react';

export const User = () => {

  interface User {
    id: number;
    name: string;
  }

  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      id: 123,
      name: 'Marianela',
    })  
  }

  return (
    <div className="mt-5">
      <h3>User: useState</h3>
      <button
      onClick={ login }
        className="btn btn-outline-primary">
        Login
      </button>
      {user ? (
        <div>
          <p>Id: {user.id}</p>
          <p>Name: {user.name}</p>
        </div>
        ) : <p>There is no user</p>}
    </div>
  )
}
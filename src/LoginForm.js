import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import'./LoginForm.css'

const mockData = [
  { email: 'user1@example.com', password: 'password1', name: 'User 1' },
  { email: 'user2@example.com', password: 'password2', name: 'User 2' },
  { email: 'user3@example.com', password: 'password3', name: 'User 3' },
];

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  // const history = useNavigate();
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

  const handleSubmit = (e) => {

    e.preventDefault();
    const user = mockData.find((user) => user.email === email && user.password === password);
    if (user) {
      setauthenticated(true)
localStorage.setItem("authenticated", true);
      navigate("/test");
    // window.alert(`Welcome, ${user.name}!`);

    } else {
      setError('Invalid email or password.');
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='root'>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}    style={{
      maxWidth: 600,
    }}>
        <label htmlFor="email">Email: </label>
        &nbsp;&nbsp;&nbsp;&nbsp; <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}

          required
        />
        <label htmlFor="password">Password:</label>&nbsp;
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;

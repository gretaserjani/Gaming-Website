import '../SignIn/SignIn.css';
import { useState } from 'react';
import Header from '../Header/Header';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    const numberRegex = /\d/;
    const capitalLetterRegex = /[A-Z]/;

    if (
      password.length < 8 ||
      !specialCharRegex.test(password) ||
      !numberRegex.test(password) ||
      !capitalLetterRegex.test(password)
    ) {
      setError(
        'Password must contain at least 8 characters, including a special character, a number, and a capital letter.'
      );
      return;
    }

    if (username === 'exampleuser' && password === 'password123') {
      // You can perform actions like redirecting or displaying a success message here.
      console.log('Sign in successful');
    } else {
      setError('Incorrect username or password');
    }
  };

  return (
    <>
    <Header/>
    <div className="signin-container">
      <div className="signin-form">
        <h1 className="signin-title">Sign In</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="signin-input"
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signin-input"
            />
          </div>
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignIn;
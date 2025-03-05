import React, { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    if (!email || !password) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    if (isLogin) {
      // Simulated login logic
      if (email === 'user@example.com' && password === 'password') {
        alert('Login successful!');
        setErrorMessage('');
      } else {
        setErrorMessage('Invalid credentials.');
      }
    } else {
      // Simulated registration logic
      alert('Registration successful!');
      setErrorMessage('');
    }
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {!isLogin && (
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      )}
      <button onClick={handleSubmit}>{isLogin ? 'Login' : 'Register'}</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: 'pointer', color: 'blue' }}>
        {isLogin ? 'Create an account' : 'Already have an account? Login'}
      </p>
    </div>
  );
};

export default AuthForm;

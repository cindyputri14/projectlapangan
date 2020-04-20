import React, { Component, useState } from 'react';
import axios from 'axios';

function Register(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const email = useFormInput('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  // handle button click of login form
  const handleRegister = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost/lapangan/public/register', { username: username.value, email: email.value, password: password.value }).then(response => {
      if (response.data.message !== "Register berhasil") {
        setLoading(false);
        setError("Gagal melakukan pendaftaran.");
      } else {
        setLoading(false);
        setMessage("Berhasil mendaftar.");
      }
    });
  }

  return (
    <div className="text-center">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Mendaftar untuk booking lapangan</h1>
        {error && <>
          <div className="alert alert-danger">
            {error}
          </div></>}
        {message && <>
          <div className="alert alert-success">
            {message}
          </div></>}
        <input type="text" className="form-control" {...username} autoComplete="new-password" placeholder="Username" required autoFocus />
        <input type="email" className="form-control" {...email} autoComplete="new-password" placeholder="Email" required />
        <input type="password" className="form-control" {...password} autoComplete="new-password" placeholder="Password" required />
        <input className="btn btn-lg btn-primary btn-block" type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleRegister} disabled={loading} />
      </form>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Register;

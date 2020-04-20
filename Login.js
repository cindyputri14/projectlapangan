import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';
import { NavLink } from 'react-router-dom';

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost/lapangan/public/login', { username: username.value, password: password.value }).then(response => {
      if (response.data.status === false) {
        setLoading(false);
        setError("User tidak ditemukan.");
      } else {
        setLoading(false);
        setUserSession(response.data.token, response.data.users);
        props.history.push('/dashboard');
      }
    });
  }

  return (
    <div className="text-center">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Masuk Untuk Booking Lapangan</h1>
        {error && <>
          <div className="alert alert-danger">
            {error}
          </div></>}
        <input type="text" id="inputEmail" className="form-control" {...username} autoComplete="new-password" placeholder="Username" required autoFocus />
        <input type="password" id="inputPassword" className="form-control" {...password} autoComplete="new-password" placeholder="Password" required />
        <input className="btn btn-lg btn-primary btn-block" type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} />
        <br/>
        <p>
          Tidak punya akun? <NavLink to="/register" >Mendaftar sekarang</NavLink>.
        </p>
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

export default Login;

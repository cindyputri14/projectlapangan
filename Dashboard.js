import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';

function Dashboard(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (
    <div className="container text-center py-5 my-5">
      <div className="row">
        <div className="col-lg-4 offset-4">
          <svg className="bd-placeholder-img rounded-circle" width="140"
               height="140" xmlns="http://www.w3.org/2000/svg"
               preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
               aria-label="Placeholder: 140x140"><title>Placeholder</title>
            <rect width="100%" height="100%" fill="#007bff"/>
          </svg>
          <h2>{user.username}</h2>
          <h5 className="text-muted">{user.email}</h5>
          <br/>
          <p>
            <button className="btn btn-secondary" onClick={handleLogout}>Keluar</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

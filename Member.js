import React, {Component} from 'react';
import { MDBDataTable } from 'mdbreact';
import Axios from 'axios';

class Member extends Component {
  constructor (props) {
    super(props);

    this.state = {
      member: []
    }

    this.header = [
      { title: "Username", prop: "username", sortable: true, filterable: true },
      { title: "Email", prop: "email", sortable: true, filterable: true },
      { title: "Role", prop: "role", sortable: true, filterable: true },
      { title: "gender", prop: "gender", sortable: true, filterable: true }
    ];
  }

  componentDidMount () {
    Axios.get("http://localhost/lapangan/public/member").then(response => {
      console.log(response.data.member);
      this.setState({ member: response.data.member });

      console.log(this.state.member);
    })
  }

  render () {
    return(
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h4>Data Member Futsal</h4>
          </div>
          <div className="col-6 text-right">
            <button className="btn btn-primary" onClick="">Tambah Member</button>
          </div>
          <div className="col-12 py-5">
            <MDBDataTable
              className="text-center"
              striped
              bordered
              hover
              noBottomColumns={true}
              theadColor={true}
              displayEntries={true}
              paging={true}
              data={
                {
                  columns: [
                    { label: 'Username', field: 'username', sort: 'asc' },
                    { label: 'Email', field: 'email', sort: 'asc'},
                    { label: 'Role', field: 'role', sort: 'asc'},
                    { label: 'Gender', field: 'gender', sort: 'asc'},
                  ],
                  rows: this.state.member
                }
              }
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Member;

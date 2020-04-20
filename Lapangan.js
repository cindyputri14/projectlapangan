import React, {Component} from 'react';
import { MDBDataTable } from 'mdbreact';
import Axios from 'axios';

class Lapangan extends Component {
  constructor (props) {
    super(props);

    this.state = {
      listLapangan: []
    }
  }

  componentWillMount () {
    Axios.get("http://localhost/lapangan/public/lapangan").then(response => {
      console.log(response.data.lapangan);
      this.setState({listLapangan: response.data.lapangan});
      console.log(this.state.listLapangan);
    })
  }

  render () {
    return(
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h4>Data Lapangan Futsal</h4>
          </div>
          <div className="col-6 text-right">
            <button className="btn btn-primary" onClick={() => {}}>Tambah Lapangan</button>
          </div>
          <div className="col-12 py-5">
            <MDBDataTable
              className="text-center"
              striped
              bordered
              hover
              noBottomColumns={true}
              displayEntries={true}
              paging={true}
              data={
                {
                  columns: [
                    { label: 'Nama', field: 'nama', sort: 'asc' },
                    { label: 'Harga', field: 'harga', sort: 'asc'},
                    { label: 'Foto', field: 'foto', sort: 'asc'},
                  ],
                  rows: this.state.listLapangan
                }
              }
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Lapangan;

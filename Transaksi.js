import React, {Component} from 'react';
import { MDBDataTable } from 'mdbreact';
import Axios from 'axios';

class Transaksi extends Component {
  constructor (props) {
    super(props);

    this.state = {
      listTransaksi: []
    }
  }

  componentWillMount () {
    Axios.get("http://localhost/lapangan/public/sewa").then(response => {
      console.log(response.data.sewa);
      this.setState({listTransaksi: response.data.sewa});
      console.log(this.state.listTransaksi);
    })
  }

  render () {
    return(
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>Data Transaksi Sewa Lapangan Futsal</h4>
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
                    { label: 'Nama Lapangan', field: 'nama_lapangan', sort: 'asc' },
                    { label: 'Username', field: 'username', sort: 'asc'},
                    { label: 'Biaya', field: 'biaya', sort: 'asc'},
                    { label: 'Tanggal', field: 'tgl_book', sort: 'asc'},
                    { label: 'Mulai', field: 'wkt_mulai', sort: 'asc'},
                    { label: 'Durasi', field: 'durasi', sort: 'asc'},
                    { label: 'Status', field: 'status', sort: 'asc'},
                  ],
                  rows: this.state.listTransaksi
                }
              }
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Transaksi;

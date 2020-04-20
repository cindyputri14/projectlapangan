import React, { Component } from 'react';
import Axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listLapangan: []
    }
  }

  componentDidMount() {
    Axios.get('http://localhost/lapangan/public/lapangan').then(response => {
      this.setState({ listLapangan: response.data.lapangan });
    });
  }

  render() {
    return (
      <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Daftar harga lapangan</h1>
          <p className="lead">Berikut ini daftar harga lapangan yang ada di SM Futstal.</p>
        </div>
        <div className="container">
          <div className="row mb-3 text-center">
            { this.state.listLapangan ? this.state.listLapangan.map((item, index) =>
              <div className="col-md-4" key={index}>
                <div className="card mb-4 box-shadow">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">{item.nama}</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">Rp {Intl.NumberFormat().format(item.harga)} <small className="text-muted">/ jam</small></h1>
                    <button type="button" className="btn btn-lg btn-block btn-outline-primary">Booking Sekarang</button>
                  </div>
                </div>
              </div>
            ) : <h3>Loading ...</h3>}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

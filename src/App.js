import React, { Component } from "react";
import "./App.css";
import CoinbaseCommerceButton from "react-coinbase-commerce";
import "react-coinbase-commerce/dist/coinbase-commerce-button.css";
import MyPay from "./MyPay";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      chargeId: "",
      chargeData: ""
    };
  }
  createCheckout() {
    this.setState({ chargeId: "" }, () => {
      var data = { amount: this.state.amount };
      console.log("inside create");
      var self = this;
      axios("http://localhost:8000/create-charge", {
        method: "post",
        data: data
      }).then(function(res) {
        console.log(res);
        self.setState({
          chargeId: res.data.code,
          chargeData: res.data
        });
      });
    });
  }

  onChange(e) {
    this.setState({ amount: e.target.value });
  }
  render() {
    return (
      <div className="App" style={{ marginTop: "50px" }}>
        <div className="form-group row" style={{ marginLeft: "30%" }}>
          <label className="col-sm-2 col-form-label">Amount: </label>
          <input
            className="form-control"
            style={{ width: 150 }}
            value={this.state.amount}
            onChange={this.onChange.bind(this)}
            type="number"
          />
          <button
            className="btn btn-primary"
            style={{ marginLeft: 10 }}
            onClick={this.createCheckout.bind(this)}
          >
            Create Payment
          </button>
        </div>

        <div className="container" style={{ marginTop: 60 }}>
          <div className="row">
            <div className="col-sm">
              {this.state.chargeId ? (
                <div>
                  <h3>Coinbase Payment Component</h3>
                  <CoinbaseCommerceButton
                    className="btn btn-success"
                    chargeId={this.state.chargeId}
                  />
                </div>
              ) : null}
            </div>
            <div className="col-sm">
              {this.state.chargeData ? (
                <div>
                  <h3>Custom Payment Component</h3>
                  <MyPay chargeData={this.state.chargeData} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

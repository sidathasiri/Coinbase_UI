import React, { Component } from "react";

export default class PayBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
      icons: {
        Bitcoin: "fab fa-bitcoin fa-lg",
        Ethereum: "fab fa-ethereum fa-lg"
      }
    };
  }
  payBitcoin() {
    this.setState({ visibility: !this.state.visibility });
  }

  render() {
    let currType = this.props.type.toLowerCase();
    let address = `https://chart.googleapis.com/chart?chs=225x225&cht=qr&chl=${currType}:${
      this.props.address
    }`;

    if (
      currType === "USD Coin".toLocaleLowerCase() ||
      currType === "Ethereum".toLocaleLowerCase()
    ) {
      address = `https://chart.googleapis.com/chart?chs=225x225&cht=qr&chl=${
        this.props.address
      }`;
    }
    const bitCoinPayDiv = (
      <div style={{ marginTop: "5px" }}>
        <h5 style={{ color: "green", marginTop: 20 }}>
          Amount: {this.props.amount} {this.props.currency}
        </h5>
        <img alt="..." src={address} />
      </div>
    );

    return (
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={this.payBitcoin.bind(this)}
          className="btn btn-primary"
          data-toggle="button"
          style={{ width: 350, marginRight: 20 }}
        >
          <span style={{ fontSize: 20 }}>{this.props.type}</span>
        </button>

        {this.state.visibility ? bitCoinPayDiv : null}
      </div>
    );
  }
}

import React, { Component } from "react";
import PayBtn from "./PayBtn";

export default class MyPay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bitCoinOpened: false
    };
  }
  payBitcoin() {
    this.setState({ bitCoinOpened: !this.state.bitCoinOpened });
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div
        style={{
          border: "1px solid #dcdcde",
          borderRadius: 15,
          width: 500,
          marginLeft: 30,
          padding: 20,
          backgroundColor: "#f7f7f7"
        }}
      >
        <h3 style={{ marginLeft: 15 }}>Payment Options</h3>
        <ul style={{ listStyle: "none" }}>
          <li>
            {/* <button
              onClick={this.payBitcoin.bind(this)}
              className="btn btn-primary"
            >
              Bitcoin
            </button> */}
            <PayBtn
              address={this.props.chargeData.addresses.bitcoin}
              amount={this.props.chargeData.pricing.bitcoin.amount}
              currency={this.props.chargeData.pricing.bitcoin.currency}
              type="Bitcoin"
            />
          </li>
          {/* {this.state.bitCoinOpened ? bitCoinPayDiv : null} */}
          <li>
            <PayBtn
              address={this.props.chargeData.addresses.bitcoincash}
              amount={this.props.chargeData.pricing.bitcoincash.amount}
              currency={this.props.chargeData.pricing.bitcoincash.currency}
              type="Bitcoincash"
            />
          </li>
          <li>
            <PayBtn
              address={this.props.chargeData.addresses.ethereum}
              amount={this.props.chargeData.pricing.ethereum.amount}
              currency={this.props.chargeData.pricing.ethereum.currency}
              type="Ethereum"
            />
          </li>
          <li>
            <PayBtn
              address={this.props.chargeData.addresses.litecoin}
              amount={this.props.chargeData.pricing.litecoin.amount}
              currency={this.props.chargeData.pricing.litecoin.currency}
              type="Litecoin"
            />
          </li>
          <li>
            <PayBtn
              address={this.props.chargeData.addresses.usdc}
              amount={this.props.chargeData.pricing.usdc.amount}
              currency={this.props.chargeData.pricing.usdc.currency}
              type="USD Coin"
            />
          </li>
          <li />
        </ul>
      </div>
    );
  }
}

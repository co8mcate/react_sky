import React, { Component } from "react";

class Useritem extends Component {
  //constructor() {
  //super();
  //console.log(123);
  state = {
    id: "id",
    login: "co8mcate",
    avator_url: "https://avatars3.githubusercontent.com/u/37420994?s=460&v=4",
    html_url: "https://github.com/co8mcate"
  };
  //}

  render() {
    const { login, avator_url, html_url } = this.state;

    return (
      <div className="card text-center">
        <img
          src={avator_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
        <form method="post" id="theForm" action="">
          <fieldset>
            <legend>Billing Information</legend>
            <div>
              <h3>Payment</h3>
              <label for="nameCard">Name on Card:</label>
              <br />
              <input type="text" id="nameCard" name="nameCard" required />
              <label for="creditCard">Credit Card number:</label>
              <br />
              <input
                type="text"
                name="creditCard"
                id="creditCard"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                required
              />
              <label for="expiredCard">Expired (MM/YY):</label>
              <br />
              <input type="text" name="expiredCard" id="expiredCard" required />
              <label for="cvvCard">CVV:</label>
              <br />
              <input type="text" name="cvvCard" id="cvvCard" required />
            </div>
            <div>
              <h3>Billing Address</h3>
              <label for="fullName">Full Name:</label>
              <br />
              <input type="text" id="fullName" name="fullName" required />
              <label for="address">Address:</label>
              <br />
              <input type="text" id="address" name="address" required />
              <label for="city">City:</label>
              <br />
              <input type="text" id="city" name="city" required />
              <label for="zip">Zip:</label>
              <br />
              <input type="text" id="zip" name="zip" required />
              <label for="state">State:</label>
              <br />
              <label>
                <input type="text" id="state" name="state" required />
                Shipping address same as billing
              </label>
              <input
                type="checkbox"
                checked="checked "
                id="sameAddr"
                name="sameAddr"
                required
              />
              <br />
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Useritem;

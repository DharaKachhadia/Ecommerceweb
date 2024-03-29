import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/cartemptystyle.css';
const EmptyCard = () => {
  return (
    <div className="container-fluid  mt-100">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body cart">
              <div className="col-sm-12 empty-cart-cls text-center">
                <img
                  src="https://i.imgur.com/dCdflKN.png"
                  width="130"
                  height="130"
                  className="img-fluid mb-4 mr-3"
                />
                <h3><strong>Your Cart is Empty</strong></h3>
                <h3>Add something to make me happy :)</h3>
                <NavLink
                  to="/product"
                  className="btn btn-primary cart-btn-transform m-5"
                  data-abc="true"
                >
                  continue shopping
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCard;

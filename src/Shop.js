import React from "react";
import { actionCreatores } from "./State";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";

// import { depositMoney, withdrawMoney } from "./State/action-creators";

const Shop = () => {
    const amount = useSelector((state) => state.amount);
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreatores, dispatch);

  return (
    <div>
      <br />
      <h1>Deposit/Withdraw Money </h1>
      <br />
      <button
        type="button"
        class="btn btn-primary mx-2"
        onClick={() => {
          actions.withdrawMoney(100);
        }}
      >
        -
      </button>
      Update Balance
      <button
        type="button"
        class="btn btn-primary mx-2"
        onClick={() => {
          actions.depositMoney(100);
        }}
      >
        +
      </button>

      <br/>
      <br/>
      <br/>
      <div className="Container">
      <button type="button" class="btn btn-success"> Total balance : {amount}
</button>

<div className="Contaner">
<br/>   

<p>(Amount Debit & Credit Method React - Redux)</p>
</div>
      </div>
    </div>
  );
};

export default Shop;

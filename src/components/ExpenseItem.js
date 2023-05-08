import "./ExpenseItem.css";

export const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.17</div>
      </div>
    </div>
  );
};

import react,{useState} from "react";
import Cards from "../UI/Cards";
import ExpenseDate from "./ExpenseDate";
import "./Expensesitems.css";

function Expenseitems(props) {
  const [title,setTitle]=useState(props.title);
  const clickHandler = () =>{
    setTitle('Updated!');
    console.log(title);
  };
  return (
    <Cards className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Cards>
  );
}
export default Expenseitems;

import Cards from "../UI/Cards";
import Expenseitems from "./Expenseitems";
import "./Expenses.css";

function Expenses(props) {
  return(
    <Cards className="expenses">
    <Expenseitems
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></Expenseitems>
      <Expenseitems
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></Expenseitems>
      <Expenseitems 
      title={props.items[2].title}
      amount={props.items[2].amount}
      date={props.items[2].date}
      ></Expenseitems>
      <Expenseitems
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></Expenseitems>
      </Cards>
  );     
}
export default Expenses;
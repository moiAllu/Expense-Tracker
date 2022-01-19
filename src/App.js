import Expenseitems from "./components/Expenseitems";

function App() {
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2",
      title: "New TV",
       amount: 799.49,
      date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
<Expenseitems
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></Expenseitems>
      <Expenseitems
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></Expenseitems>
      <Expenseitems 
      title={expense[2].title}
      amount={expense[2].amount}
      date={expense[2].date}
      ></Expenseitems>
      <Expenseitems
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></Expenseitems>
    </div>
  );
}
export default App;

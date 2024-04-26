import "./App.css";
import Table from "./components/table/Table";

function App() {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];

  const totalAverage =
    netIncomes.reduce((accumulator, element) => {
      return accumulator + element.income;
    }, 0) / netIncomes.length;

  return (
    <>
      <Table netIncomes={netIncomes} />

      <p>Average net income: {totalAverage}</p>
    </>
  );
}

export default App;

function Table({ netIncomes }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Net income</th>
        </tr>
      </thead>
      <tbody>
        {netIncomes.map((company, index) => (
          <tr key={index}>
            <td>{company.brand}</td>
            <td>{company.income}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

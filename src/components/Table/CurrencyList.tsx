import { Currency } from "../Currency/Currency";
import "./CurrencyList.scss";

export function CurrencyList() {
  let items = [];

  for (let i = 0; i < 10; i++) {
    items.push(<Currency />);
  }

  return (
    <table className="CurrencyList">
      <thead>
        <tr>
          <th>Name</th>
          <th>Last</th>
          <th>Change</th>
          <th>Change Percent</th>
          <th>High</th>
          <th>Low</th>
        </tr>
      </thead>
      <tbody>{items}</tbody>
    </table>
  );
}

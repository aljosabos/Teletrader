import { ListItem } from "../ListItem/ListItem";
import "./List.scss";

export function List() {
  let items = [];

  for (let i = 0; i < 10; i++) {
    items.push(<ListItem />);
  }

  return <div className="List">{items}</div>;
}

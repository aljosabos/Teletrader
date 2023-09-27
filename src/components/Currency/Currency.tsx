import { useNavigate } from "react-router-dom";
import "./Currency.scss";

export function Currency() {
  const navigate = useNavigate();

  const openDetails = () => {
    navigate("/details");
  };
  return (
    <tr className="Currency" onClick={openDetails}>
      <td>MTCH</td>
      <td>32,866.00</td>
      <td>1,492.00</td>
      <td>+00.4%</td>
      <td>33,639.00</td>
      <td>33,639.00</td>
    </tr>
  );
}

import { Link } from "react-router-dom";
import "./Button.scss";

export default function Button({ title, href }) {
  return (
    <Link to={href} className="btn6">
      <span className="btn-text ">{title}</span>
      <span className="border-top" />
      <span className="border-bottom" />
      <span className="border-left" />
      <span className="border-right" />
    </Link>
  );
}

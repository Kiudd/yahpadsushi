import "./Button.css";

export default function Button(prop) {
  return (
    <>
      <a href="#0" className="btn6">
        <span>{prop.title}</span>
        <span className="border-top"></span>
  <span className="border-bottom"></span>
  <span className="border-left"></span>
  <span className="border-right"></span>

      </a>
    </>
  );
}

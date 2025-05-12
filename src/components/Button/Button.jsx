import "./Button.css";

export default function Button(prop) {
  console.log("prooop", prop);

  return (
    <div className="center">
      <div className="btn">
        <a href="">
          <p>{prop.title}</p>
        </a>
      </div>
    </div>
  );
}

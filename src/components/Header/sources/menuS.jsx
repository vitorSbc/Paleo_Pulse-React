import "./menuS.css";

export default function MenuS(props) {
  return (
    <div className={`menu ${props.loc}`}>
      <p>{props.info}</p>
    </div>
  );
}

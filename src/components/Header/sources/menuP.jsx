import MenuS from "./menuS";
import "./menuP.css";

export default function MenuP(props) {
  const menuShower = props.menuState ? "show" : "hide";
  return (
    <div className={`container ${menuShower}`}>
      <MenuS info="Inicio" loc="start" />
      <MenuS info="Contato" loc=" " />
      <MenuS info="Sobre" loc="final" />
    </div>
  );
}

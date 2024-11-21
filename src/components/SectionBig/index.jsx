import News from "./sources/News";
import "./styles.css";

export default function SectionBig() {
  
  

  return (
    <>
        <div className="Container">
            <News news="newsFirst" />
            <News news="newsMiddle"/>
            <News news="newsEnd"/>
        </div>
    </>
  );
}

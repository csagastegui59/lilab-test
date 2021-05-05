
import logo from "./lilab-logo.png";

export default function Footer(){
  return (
    <footer>
      <div className="flex justify-between">
        <div>Caza</div>
        <div>Esta app fue creada con amor por mi :D</div>
        <img src={logo} alt="Logo" className="w-20"/>
      </div>
    </footer>
  )
}
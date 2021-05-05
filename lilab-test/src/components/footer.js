
import logo from "./lilab-logo.png";

export default function Footer(){
  return (
    <footer>
      <div className="flex justify-between items-center bg-white py-10 px-4 shadow-2xl">
        <div className="opacity-50">©2021 Lilab, Inc. All rights reserved</div>
        <img src={logo} alt="Logo" className="w-28"/>
      </div>
    </footer>
  )
}
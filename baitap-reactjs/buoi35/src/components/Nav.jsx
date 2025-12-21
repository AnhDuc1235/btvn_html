import { Link, NavLink } from "react-router-dom";
// import "./Nav.css";

export default function Nav() {
  const classNavLink = ({ isActive }) => {
    return isActive ? "text-red-500" : "";
  };
  return (
    <div className="w-[80%] m-auto flex flex-col gap-2">
      <div className="flex gap-2">
        <NavLink className={classNavLink} to="/">
          Trang chủ
        </NavLink>
        <NavLink className={classNavLink} to="/gioi-thieu">
          Giới thiệu
        </NavLink>
        <NavLink className={classNavLink} to="/san-pham">
          Sản phẩm
        </NavLink>
        <NavLink className={classNavLink} to="/lien-he">
          Liên hệ
        </NavLink>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
}

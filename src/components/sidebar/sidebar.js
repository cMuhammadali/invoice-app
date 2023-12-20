import { Link } from "react-router-dom";

const token = localStorage.getItem("token");

export default function Sidebar() {
  return (
    <div className="h-screen text-white text-center rounded-r-[16px] relative bg-sidebarDark">
      <div className="h-24 rounded-tr-[16px] bg-inkHeader1"></div>
      <Link to={"/"}>
        <img
          src="/src/assets/icons/Combined Shape.svg"
          alt="Logo"
          className="w-full h-11 z-50 absolute top-12 cursor-pointer"
        />
      </Link>
      <div className="w-full h-20 absolute rounded-br-[16px] rounded-tl-[16px] left-0 top-[70px] bg-inkHeader2"></div>
      <div className="w-full absolute bottom-24 h-28">
        <div className="flex items-center justify-center">
          <img
            style={{ cursor: "pointer" }}
            src="/src/assets/icons/Moon.svg"
            alt="avatar"
            className="h-8 absolute top-8"
          />
        </div>
      </div>
      <div className="w-full absolute bottom-0 h-28 border-t-2 border-ink">
        <div className="flex items-center justify-center">
          {token ? (
            <img
              src="/src/assets/images/Oval.png"
              alt="avatar"
              className="h-12 absolute top-8"
            />
          ) : (
            <Link to={"/login"}>
              <span className="font-spartan font-medium text-base absolute bottom-12 left-0 right-0">
                Login
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

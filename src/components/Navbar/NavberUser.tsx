import logo from "@/assets/images/logo.png";
import { Bell, User, ChevronDown, RotateCw, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NavbarUser() {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="flex justify-between w-full bg-brown-100 py-[16px] px-[16px] md:px-[120px] border-b-1 border-brown-300">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-between gap-[16px]">
          <div>
            <button className="flex items-center justify-center bg-white w-[48px] h-[48px] rounded-full cursor-pointer hover:bg-brown-200">
              <Bell />
            </button>
          </div>
          <div className="dropdown dropdown-end group">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-2 cursor-pointer hover:bg-brown-200 rounded-xl"
            >
              <div className="flex rounded-full items-center justify-center bg-white w-[48px] h-[48px] ">
                <User />
              </div>
              <span>Moodeng</span>
              <span className="transition-transform duration-200 group-focus-within:rotate-180">
                <ChevronDown />
              </span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-brown-100 rounded-xl shadow-[2px_2px_16px_0px_rgba(0,0,0,0.1)] z-10 w-[250px] py-[8px] opacity-0 scale-95 group-focus-within:opacity-100 group-focus-within:scale-100 transition-all duration-200 origin-top"
            >
              <li>
                <a className="flex items-center hover:bg-brown-200 px-[16px] py-[12px] gap-[12px] text-body-1">
                  <User size={24} />
                  Profile
                </a>
              </li>
              <li>
                <a className="flex items-center hover:bg-brown-200 px-[16px] py-[12px] gap-[12px] text-body-1">
                  <RotateCw size={24} />
                  Reset Password
                </a>
              </li>
              <li className="border-t border-brown-300 ">
                <a className="flex items-center hover:bg-brown-200 px-[16px] py-[12px] gap-[12px] text-body-1">
                  <LogOut size={24} />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarUser;

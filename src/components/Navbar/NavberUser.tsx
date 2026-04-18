import logo from "../../../assets/images/logo.png";
import { useState } from "react";
import { Bell, User } from "lucide-react";

function NavbarUser() {
  const [openProfile, setOpenProfile] = useState(false);
  const [openNoti, setOpenNoti] = useState(false);
  return (
    <nav>
      <div className="flex justify-between w-full bg-brown-100 py-[16px] px-[120px] border-b-1 border-brown-300">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-between gap-[16px]">
          <div>
            <button className="flex items-center justify-center bg-white w-[48px] h-[48px] rounded-full cursor-pointer hover:bg-brown-200">
              <Bell />
            </button>
          </div>
          <div>
            <div className="relative">
              <button
                onClick={() => {
                  setOpenProfile(!openProfile);
                  setOpenNoti(false);
                }}
                className="flex items-center gap-2 cursor-pointer"
              >
                {/* <img src={avatar} className="w-8 h-8 rounded-full" /> */}
                <div className="flex rounded-full items-center justify-center bg-white w-[48px] h-[48px]">
                  <User />
                </div>

                <span>Moodeng</span>
                <span>{openProfile ? "▲" : "▼"}</span>
              </button>

              {openProfile && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Profile
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarUser;

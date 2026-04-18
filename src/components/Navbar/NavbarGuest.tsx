import logo from "../../../assets/images/logo.png";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

function NavbarGuest() {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="flex justify-between w-full bg-brown-100 py-[16px] px-[120px] border-b-1 border-brown-300">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul className="flex gap-[8px]">
            <li>
              <Button
                className="border-1 border-brown-400 bg-white text-brown-600 border-1 border-brown-100 active:bg-brown-300"
                onClick={() => navigate("/login")}
              >
                Log In
              </Button>
            </li>
            <li>
              <Button
                className="bg-brown-600 text-white hover:bg-brown-500 active:bg-brown-600"
                onClick={() => navigate("/register")}
              >
                Sign Up
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarGuest;

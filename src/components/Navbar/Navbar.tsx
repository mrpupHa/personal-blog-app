import NavbarUser from "./NavberUser";
import NavbarGuest from "./NavbarGuest";

const isLoggedIn = true;

function Navbar() {
  return isLoggedIn ? <NavbarUser /> : <NavbarGuest />;
}

export default Navbar;

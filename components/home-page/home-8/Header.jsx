import { useEffect, useState } from "react";
import MainMenu from "../../header/MainMenu";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`d-flex justify-content-center `}
    >
      <div className="header-margin">
        <Image
          src="/images/media/devaprem2.png"
          alt="logo"
          width={120}
          height={160}
        />
      </div>
    </header>
  );
};

export default Header;

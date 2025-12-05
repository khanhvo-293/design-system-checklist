import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classnames from "classnames";
import s from "./Header.module.css";

const Header = ({ t }) => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const navClassName = classnames(s.nav, active && s["active"]);
  const burgerClassName = classnames(s.burger, active && s["active"]);

  const toggleMenu = useCallback((flag) => {
    setActive((prev) => {
      const nextActive = flag === undefined ? !prev : flag;
      document.body.style.overflow = nextActive ? "hidden" : "auto";
      return nextActive;
    });
  }, []);

  const closeMenu = useCallback(() => toggleMenu(false), []);

  const navigate = (e, to) => {
    e.preventDefault();
    closeMenu();
    router.push(to);
  };

  return (
    <header className={s.container}>
      <span className={s.logo}>
        <Link href="/" onClick={closeMenu}>
          Design System Checklist
        </Link>
      </span>

      <nav className={navClassName}>
        <ul className={s.menu}>
        </ul>
      </nav>

      <button className={burgerClassName} onClick={() => toggleMenu()}>
        <span className={s.line} />
        <span className={s.line} />
        <span className={s.line} />
      </button>
    </header>
  );
};

export default Header;

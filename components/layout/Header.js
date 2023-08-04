/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
const Header = ({ handleOpen, headerStyle }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}
      >
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link href="/" legacyBehavior>
                  <a className="d-flex">
                    {headerStyle ? (
                      <img alt="Agon" src="/assets/imgs/template/logo-white.svg" />
                    ) : (
                      <img alt="Agon" src="/assets/imgs/template/logo.svg" />
                    )}
                  </a>
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    <li>
                      <Link href="/" >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="burger-icon burger-icon-white d-xl-none" onClick={handleOpen}>
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

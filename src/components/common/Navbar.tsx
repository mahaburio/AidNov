import { useEffect, useState } from "react";
import "../../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  return (
    <div>
      {/* Sidebar Menu */}
      <section className={`menu ${menuOpen ? "active" : ""}`}>
        <div className="aside">
          <img src="../svg/AidNov™-white.svg" alt="AidNov White" />
        </div>
        <div className="nav-menu h-full w-full bg-[#00000033] bg-[url(../images/navbar-bg.webp)] bg-cover bg-center bg-no-repeat py-9 px-14 overflow-y-auto">
          <div
            className="close-menu text-base flex items-center gap-2 cursor-pointer duration-200 transition-all max-w-[100px] relative md:-left-7"
            id="CloseMenu"
            onClick={() => setMenuOpen(false)}
          >
            <i className="text-3xl ri-close-large-line  "></i>
            <span> Menu</span>
          </div>

          <div className="nav-menu-sec flex justify-between ">
            <div
              className="search-icon absolute right-[100px] text-2xl
            top-10 cursor-pointer"
            >
              <i className="ri-search-line"></i>
            </div>
            <ul className="nav-links mt-4">
              <li>
                <a href="" className="activeNav">
                  <span></span> Accueil
                </a>
              </li>
              <li>
                <a href="">
                  <span></span> Découvrir
                </a>

                <ul className="sub-list list-disc ps-20">
                  <li className="mt-2">
                    <a className="!text-base" href="">
                      Cagnottes
                    </a>
                  </li>
                  <li className="mt-2">
                    <a className="!text-base" href="">
                      Témoignages
                    </a>
                  </li>
                  <li className="mt-2">
                    <a className="!text-base" href="">
                      Tarifs
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">
                  <span></span> À propos de AidNov
                  <sup className="relative -top-3">TM</sup>
                </a>
              </li>
              <li>
                <a href="">
                  <span></span> Démarrer une campagne
                </a>
              </li>
              <li>
                <a href="">
                  <span></span> Faire un don
                </a>
              </li>
              <li>
                <a href="">
                  <span></span> Devenir un Ambassadeur
                </a>
              </li>
              <li>
                <a href="">
                  <span></span> Conventions & Accords
                </a>
              </li>
            </ul>
            <div className="right flex flex-col gap-12 justify-end">
              <ul className="faq">
                <li>
                  <a href="">FAQs</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Centre d’assistance</a>
                </li>
              </ul>

              <div className="policies">
                <ul>
                  <li>
                    <a href="">Mentions Légales</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">Politique de Confidentialité</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright bg-transparent mt-12 relative">
            <div className="bg-line"></div>
            <div className="flex sm:flex-row flex-col gap-y-2 items-center justify-between py-6">
              <div className="left">Copyright © 2025 tous droits réservés.</div>
              <div className="right">
                AidNov<sup>TM</sup> A product of LoHiDi® Group
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Navbar */}
      <section className="navbar md:px-20 p-4 flex items-center justify-between bg-white">
        <div className="navbar-menu flex gap-10 items-center w-[33%]">
          <div
            className="menu-bar text-3xl text-black cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <i className="ri-menu-line"></i>
          </div>
          <div className="search-bar hidden md:flex items-center gap-1.5 bg-[#d6d8de66] rounded-[60px] h-11 w-[300px]">
            <span className="text-2xl text-black w-10 flex items-center justify-end">
              <i className="ri-search-line"></i>
            </span>
            <input
              className="h-full py-1.5 px-2.5 w-[calc(100%-40px)] bg-transparent outline-0"
              type="search"
              placeholder="Rechercher..."
            />
          </div>
        </div>

        <div className="navbar-brand hidden md:block w-[33%]">
          <a href="/">
            <img src="../svg/aidnov-logo.svg" alt="AidNov Logo" />
          </a>
        </div>

        <div className="nav-right">
          <div className="flex items-center gap-5">
            <div className="btn btn-ts">Se connecter</div>
            <div className="btn">S’inscrire</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;

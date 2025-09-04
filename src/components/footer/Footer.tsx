import { useState } from "react";
import "../../styles/footer.css";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Anglais");
  const languages = ["English", "Chinese", "Spanish", "French", "German"];

  const footerSections = [
    {
      title: "Créer une cagnotte",
      links: [
        "Santé",
        "Urgences",
        "Commémoration",
        "Organisation",
        "Éducation",
        "Mariage",
      ],
    },
    {
      title: "Découvrir",
      links: [
        "Comment marche AidNov™",
        "FAQs",
        "Témoignages",
        "Tarifs",
        "Conventions et accords",
      ],
    },
    {
      title: "Entreprise",
      links: [
        "Centre d’assistance",
        "Emplois",
        "À propos de AidNov™",
        "Centre de presse",
        "Plus de ressources",
      ],
    },
  ];
  return (
    <>
      <footer className="bg-black text-white font-secondary">
        <div className="grid md:[grid-template-columns:300px_1fr_1fr] lg:[grid-template-columns:300px_1fr_1fr_1fr] xl:[grid-template-columns:300px_1fr_1fr_1fr_1fr] gap-7 px-4 sm:px-6 md:px-20 py-10 pt-10 md:pt-16">
          <div>
            <h2 className="mb-3 font-bold text-base">Réseaux sociaux</h2>
            <div className=" flex items-center gap-5">
              <a
                href=""
                className="text-2xl duration-200 hover:text-secondary transition-all"
              >
                <i className="ri-twitter-x-fill"></i>
              </a>
              <a
                href=""
                className="text-2xl duration-200 hover:text-secondary transition-all"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a
                href=""
                className="text-2xl duration-200 hover:text-secondary transition-all"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href=""
                className="text-2xl duration-200 hover:text-secondary transition-all"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href=""
                className="text-2xl duration-200 hover:text-secondary transition-all"
              >
                <i className="ri-youtube-fill"></i>
              </a>
            </div>

            <p className="mt-4">
              #La Plateforme #1 de Collecte de fonds en Côte d’Ivoire
            </p>

            <div className="flex items-center gap-2.5 mt-5">
              <span>Traduire ce site : </span>
              <div className="relative">
                <div
                  className="default flex items-center justify-between gap-1 rounded border border-white px-3 py-1.5 duration-300 cursor-pointer whitespace-nowrap w-34 transition-all relative hover:text-secondary hover:border-secondary"
                  onClick={() => setOpen(!open)}
                >
                  <i className="ri-global-line"></i> {selected}
                  <i className="ri-expand-up-down-line"></i>
                </div>

                {open && (
                  <div className="absolute left-0 top-full mt-1 w-full bg-black border border-white rounded shadow-md z-50">
                    {languages.map((lang, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setSelected(lang);
                          setOpen(false);
                        }}
                        className="px-3 py-1 cursor-pointer hover:bg-secondary hover:text-white"
                      >
                        {lang}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-3 font-bold text-base">Applis mobiles</h2>

            <div className="flex md:flex-col gap-4">
              <button className="bg-transparent border-0 cursor-pointer">
                <img src="../svg/appstore.svg" alt="Appstore" />
              </button>
              <button className="bg-transparent border-0 cursor-pointer">
                <img src="../svg/google-play.svg" alt="Playstore" />
              </button>
            </div>
          </div>
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h2 className="mb-3 font-bold text-base">{section.title}</h2>
              <div className="link-list">
                <ul className="pl-4">
                  {section.links.map((link, i) => (
                    <li key={i} className="text-[#b99174] mt-3 list-disc">
                      <a
                        href="#"
                        className="text-white py-2.5 transition-all duration-200 hover:text-secondary"
                      >
                        {link.includes("™") ? (
                          <>
                            {link.split("™")[0]}
                            <sup>™</sup>
                          </>
                        ) : (
                          link
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className=" py-10">
          <div className="flex items-center justify-center ">
            <div className="h-[1px] w-[42%] bg-[linear-gradient(90deg,rgba(238,235,247,0.05)_0%,#EBECF7_50.38%,rgba(235,236,247,0.05)_100%)]"></div>
            <img
              className="relative sm:w-[140px] md:w-[200px] bg-black px-3"
              src="../svg/AidNov™-white.svg"
              alt="AidNov™-white"
            />
            <div className="h-[1px] w-[42%] bg-[linear-gradient(90deg,rgba(238,235,247,0.05)_0%,#EBECF7_50.38%,rgba(235,236,247,0.05)_100%)]"></div>
          </div>

          <div className="flex items-center flex-wrap justify-center gap-2.5 mt-6">
            <a
              className="text-white underline transit duration-200 opacity-50 hover:opacity-100 hover:text-secondary"
              href=""
            >
              Conditions Générales |
            </a>
            <a
              className="text-white underline transit duration-200 opacity-50 hover:opacity-100 hover:text-secondary"
              href=""
            >
              {" "}
              Mentions Légales |
            </a>
            <a
              className="text-white underline transit duration-200 opacity-50 hover:opacity-100 hover:text-secondary"
              href=""
            >
              Politique de Confidentialité |
            </a>
            <a
              className="text-white underline transit duration-200 opacity-50 hover:opacity-100 hover:text-secondary"
              href=""
            >
              FAQs
            </a>
          </div>
        </div>

        <div className="copyright flex items-center justify-center md:justify-between bg-black-gray flex-wrap gap-y-2 px-20 py-3 text-xs md:text-base">
          <div>Copyright © 2025 tous droits réservés.</div>
          <div>
            AidNov<sup className="text-[8px] md:text-xs font-bold">TM</sup> A product of
            LoHiDi® Group
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

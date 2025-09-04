import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Comment AidNov sécurise-t-il vos cagnottes ?",
    answer:
      "Grâce à un chiffrement de pointe (SSL/TLS), toutes vos transactions sont protégées ; les paiements en ligne s’effectuent en toute sérénité et les fonds collectés sont conservés sur des serveurs hautement sécurisés jusqu’à leur transfert vers votre compte bancaire via un virement électronique.",
  },
  {
    question:
      "Y a-t-il une date butoir ou une limite dans le temps pour une cagnotte ?",
    answer:
      "Vous pouvez définir une date limite, mais si l'objectif n’est pas atteint, vous pouvez quand même récupérer les fonds collectés.",
  },
  {
    question: "Que se passe-t-il si l’objectif n’est pas atteint ?",
    answer:
      "Même si l'objectif n'est pas atteint, les fonds collectés vous seront transférés en toute sécurité.",
  },
  {
    question: "Comment fonctionne AidNov™ ?",
    answer:
      "Vous créez une cagnotte, partagez le lien, et vos proches peuvent contribuer facilement en ligne.",
  },
  {
    question: "Une autre personne peut-elle configurer une cagnotte pour moi ?",
    answer:
      "Oui, une autre personne peut configurer une cagnotte en votre nom si vous lui en donnez l’autorisation.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="faq-section px-4 sm:px-6 py-12 md:px-15 md:py-15 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-lg font-bold text-primary">Besoin d’aide ?</div>
        <h1 className="text-3xl md:text-5xl font-bold mt-2 text-black">
          Consultez nos questions fréquentes
        </h1>

        <div className="flex justify-center mt-5">
          <div className="h-1 w-16 bg-secondary"></div>
        </div>

        <p className="text-lg md:text-xl font-semibold text-black mt-6 leading-relaxed">
          Si vous ne trouvez pas votre question, contactez-nous : <br />
          Nous sommes là pour vous fournir toutes les informations dont vous
          avez besoin !
        </p>
      </div>

      {/* FAQ Items */}
      <div className="faq-items max-w-4xl mx-auto mt-12 space-y-6">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div key={index}>
              <div
                className={`header flex justify-between items-center p-5 text-lg sm:text-xl font-semibold cursor-pointer rounded-[10px] transition-all duration-300  ${
                  isActive ? "bg-[#C79D84] text-white" : "bg-[#F5F5F5] "
                }`}
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                <div className="name w-[calc(100%-50px)]">{faq.question}</div>
                <div
                  className={`icon text-xl sm:text-2xl font-bold transition-transform duration-300  ${
                    isActive ? "rotate-180 text-white" : "rotate-0 text-[#C79D84]"
                  }`}
                >
                  {isActive ? "−" : "+"}
                </div>
              </div>

              <div
                className={`body overflow-hidden transition-all duration-300 bg-white text-black ${
                  isActive ? "max-h-96 py-5 px-5 md:px-10" : "max-h-0 px-5 md:px-10"
                }`}
              >
                <p className="text-base sm:text-lg leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          );
        })}

        <div className="text-right mt-6">
          <button className="btn btn-bg bg-primary text-white cursor-pointer px-8 py-3 rounded-md font-semibold hover:opacity-90 transition">
            Accès FAQ <i className="ri-chat-ai-fill"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

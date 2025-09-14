import { useEffect, useRef, useState } from "react";

interface CounterItem {
  target: number;
  label: string;
}

const counters: CounterItem[] = [
  { target: 1000, label: "Ambassadeurs" },
  { target: 15000, label: "Bénévoles dans le monde entier" },
  { target: 6000, label: "Bénévoles dans le monde entier" },
  { target: 10000000, label: "Projets financés" },
];

const formatNumber = (num: number): string => {
  if (num >= 1_000_000) return Math.round(num / 1_000_000) + "M+";
  if (num >= 1_000) return Math.round(num / 1_000) + "K+";
  return num.toString();
};

const AboutSection = () => {
  const [started, setStarted] = useState(false);
  const [values, setValues] = useState<number[]>(counters.map(() => 0));
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [started]);

  useEffect(() => {
    if (!started) return;

    counters.forEach((counter, i) => {
      let current = 0;
      const duration = 2000; // total time in ms
      const step = counter.target / (duration / 16);

      const update = () => {
        current += step;
        if (current >= counter.target) {
          setValues((prev) => {
            const newVals = [...prev];
            newVals[i] = counter.target;
            return newVals;
          });
        } else {
          setValues((prev) => {
            const newVals = [...prev];
            newVals[i] = Math.ceil(current);
            return newVals;
          });
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
    });
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="about-section bg-black px-6 md:px-16 py-14 pt-42 sm:pt-30 mt-60 relative"
    >
      <div className="absolute -top-[150px] lg:-top-[140px] xl:-top-[200px] left-[7.3%]  max-w-[85%] bg-white rounded-md shadow border border-gray-200 p-8 sm:p-10 xl:p-16">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 text-center">
          Avec AidNov
          <sup className="text-sm relative -top-4 font-extrabold">TM</sup>, vous
          ne courez aucun risque !
        </h1>
        <p className="text-black text-base sm:text-lg lg:text-xl xl:text-[22px] mx-auto mt-6 md:mt-10 font-semibold">
          Acteur incontournable de la collecte de fonds, nous proposons des
          tarifs clairs, une sécurité totale et fiable avec un accompagnement
          expert pour collecter ou faire un don en toute confiance !
        </p>
        <div className="w-16 h-[3px] bg-black rounded mt-4"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-10 counter-wrapper">
        {counters.map((c, i) => (
          <div key={i} className="cw-itm flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {formatNumber(values[i])}
            </h1>
            <div className="w-12 h-[3px] bg-secondary rounded my-2"></div>
            <p className="text-white text-base font-semibold md:text-lg text-center">
              {c.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;

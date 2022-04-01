const AboutPage = () => {
  return (
    <div className="flex flex-col w-full h-full m-auto items-center">
      <div className="flex flex-col text-white m-auto items-center text-center mt-8 w-10/12">
        <h1 className="text-4xl">
          ZaZa Kök & Bar
        </h1> 
        <p className="text-2xl my-6">
          Vi är en mysig kvarterskrog i idylliska Stureby söder om söder. Vi har funnits här i många år med olika ägarbyten. Vid detta laget är vi närmast en institution i Stureby. Vi serverar ett brett urval av olika maträtter, allt ifrån pizza till barmat och À la carte.
        </p>
        <p className="text-2xl">
          Vi har även ett brett dryckesutbud som kan avnjutas på våran uteservering!
        </p>
        <h1 className="text-4xl mt-8 mb-4">
          Öppettider
        </h1> 
        <ul>
          <li>Fre-Lör: 11:00-23:00</li>
          <li>Sön: 12:00-22:00</li>
          <li>Mån-Tor: 11:00-22:00 </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;

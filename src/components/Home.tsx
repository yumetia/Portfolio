// components/Home.tsx
import { useLanguage } from "../context/LanguageContext";
import languages from "../locales/languages";
import { Mail } from "lucide-react";
import img from "../assets/photocv.jpg";

function Home() {
  const { language } = useLanguage();
  const { title, paragraph1, paragraph2,paragraph3, contactBtn } = languages[language].home;

  return (
    <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          {title}
        </h1>
        <p className="my-4 text-md text-center md:text-left">
          {paragraph1}
          <br />
          {paragraph2}
          <br />
          {paragraph3}
        </p>
        <a href="#Contact" className="btn btn-accent md:w-fit">
          <Mail className="w-5 h-5" />
          {contactBtn}
        </a>
      </div>

      <div className="md:ml-60">
        <img
          src={img}
          alt="profile"
          className="w-96 h-96 object-cover border-8 border-accent shadow-xl"
          style={{
            borderRadius: "30% 70% 70% 30%/ 67% 62% 38% 33%",
          }}
        />
      </div>
    </div>
  );
}

export default Home;

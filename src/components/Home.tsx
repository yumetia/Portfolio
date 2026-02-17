// components/Home.tsx
import { useLanguage } from "@context/LanguageContext";
import languages from "@locales/languages";
import { Mail } from "lucide-react";
import img from "@assets/profile.jpg";
import SafeImage from "./SafeImage";

function Home() {
  const { language } = useLanguage();
  const { title, paragraph1, paragraph2,paragraph3, contactBtn } = languages[language].home;

  return (
    <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
      <div className="flex flex-col">
        <h1 className="mt-4 text-5xl font-bold text-center 
        md:text-left md:text-6xl md:mt-0">
          {title}
        </h1>
        <p className="my-4 text-md text-center 
        md:text-left
        lg:text-xl">
          {paragraph1}
          <br />
          {paragraph2}
          <br />
          {paragraph3}
        </p>
        <a href="#Contact" className="btn btn-accent hover:bg-outline-200
        md:w-fit
        lg:text-lg">
          <Mail className="size-5
          lg:size-6" />
          {contactBtn}
        </a>
      </div>

      <div className="lg:ml-60 md:ml-30">
        <SafeImage
          src={img}
          alt="profile"
          className="size-80 sm:size-96 object-cover border-8 border-accent shadow-xl"
          roundedBlob={true}
        />
      </div>
    </div>
  );
}

export default Home;

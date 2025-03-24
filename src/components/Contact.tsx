import { useState } from "react";
import Title from "./Title";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext";
import languages from "../locales/languages";

function Contact() {
  const { language } = useLanguage();
  const { title, placeholders, button, success, error } = languages[language].contact;
  const [formData, setFormData] = useState({
    title: "",
    user_name: "",
    user_email: "",
    message: "",
  });
  const [messageText, setMessageText] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_h3p76nr",
        "template_wbqbkqd",
        formData,
        "yh2hoivcyOfa3mpwl"
      );
      setMessageText(success);
      setFormData({ title: "", user_name: "", user_email: "", message: "" });
    } catch (error) {
      console.error("❌ Email sending error:", error);
    }
  };

  return (
    <div id="Contact" className="mt-20">
      <Title title={title} />
      <div className="bg-base-300 p-5 h-fit rounded-xl shadow-lg max-w-lg mx-auto">
        <form onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder={placeholders.subject}
            required
            className="p-3 rounded border border-gray-400"
          />
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder={placeholders.name}
            required
            className="p-3 rounded border border-gray-400"
          />
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            placeholder={placeholders.email}
            required
            className="p-3 rounded border border-gray-400"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={placeholders.message}
            required
            className="p-3 rounded border border-gray-400 h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-accent text-white p-3 rounded font-bold cursor-pointer"
          >
            {button}
          </button>
        </form>
        {messageText && <p className="text-center mt-4 text-sm">{messageText}</p>}
      </div>
    </div>
  );
}

export default Contact;

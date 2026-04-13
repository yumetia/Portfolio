// components/footer.jsx

import github from "@assets/institutions/github.png"
import discord from "@assets/institutions/discord.png"

import { Container } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10">
      <aside>
        <Container className="size-10 text-accent" />
        <div className="flex gap-1">
          <span>©</span>
          <span>{(currentYear.toString())}</span>
          <span className="font-bold">Yumetia</span>
        </div>
      </aside>

        <div className="grid grid-flow-col gap-4">
          <div className="flex gap-4">
            {/* github */}
            <a
              href="https://github.com/yumetia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="btn btn-accent btn-circle"
              title="GitHub"
              >
              <img src={github} alt="github" className="size-6"/>
            </a>
            {/* discord */}
            <button
              onClick={() => navigator.clipboard.writeText("yumetia")}
              aria-label="Copy Discord username"
              className="btn btn-primary btn-circle"
              title="Discord: yumetia (click to copy)"
            >
              <img src={discord} alt="discord" className="size-8" />
            </button>
          </div>

        </div>
    </footer>
  );
}

export default Footer;

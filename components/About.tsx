import { useEffect, useState } from "react";
import styles from "../styles/About.module.scss";

const scrollToElement = require("scroll-to-element");

export default function About(): JSX.Element {
  const [text, setText] = useState("");
  const textStr = "Frontend Developer";

  useEffect(() => {
    writeName(textStr, 0);
  }, []);

  function writeName(name: string, index: number) {
    if (index === 0) {
      setText("");
    }
    setText((prev) => prev + name[index]);
    if (index + 1 !== name.length) {
      setTimeout(() => {
        writeName(name, index + 1);
      }, 120);
    }
  }

  function scrollToSection(targetSelector: string) {
    scrollToElement(targetSelector, {
      ease: "out-sine",
      duration: 600,
    });
  }

  return (
    <section className={styles.About} id="About">
      <nav>
        <a href="https://github.com/fykyby" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <button onClick={() => scrollToSection("#Contact")}>Contact</button>
      </nav>
      <h1>Filip Bodnar</h1>
      <h2>{`~$ ${text}`}</h2>
    </section>
  );
}

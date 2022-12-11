import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App(): JSX.Element {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <main className="App">
      <Head>
        <title>Filip Bodnar - Frontend Developer</title>
      </Head>

      <About />
      <Projects />
      <Contact />
    </main>
  );
}

import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Head from "next/head";
import "animate.css/animate.min.css";

export default function App(): JSX.Element {
  return (
    <main className="App">
      <Head>
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
        <meta
          name="description"
          content="Filip Bodnar - Frontend Developer - Personal Website"
        />
        <title>Filip Bodnar - Frontend Developer</title>
      </Head>

      <About />
      <Projects />
      <Contact />
    </main>
  );
}

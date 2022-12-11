import styles from "../styles/Contact.module.scss";

export default function Contact(): JSX.Element {
  return (
    <section className={styles.Contact} id="Contact">
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.info}>
        <p>filipbodnar02@gmail.com</p>
      </div>
    </section>
  );
}

import Iframe from '../components/iframe/Iframe';
import styles from './AboutScreen.module.css'

const AboutScreen = () => {
  return (
    <>
    <section className={styles.containerPrincipal}>
      <Iframe url="https://www.youtube.com/embed/PN1hEZW0SYU" largura="800" altura="315" />

      <div className={styles.paragrafosSobre}>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non modi nobis eveniet. Ea vel consectetur voluptates
        quisquam aspernatur non animi quibusdam? Repellat minus quam ratione. Ea voluptates nisi deleniti, sed quo
        assumenda quod magni deserunt consectetur, iure architecto ipsa eos autem ipsum culpa vel laboriosam voluptate
        tempora repudiandae quibusdam quisquam labore nobis adipisci? Nihil atque repellendus quo dolorem enim, quasi
        sunt perferendis aliquam. Reiciendis aliquid molestiae, minima laudantium odit culpa quaerat ullam laboriosam.
        Repellat officia fuga deserunt beatae, laborum corporis voluptatem similique, impedit, labore totam vitae! In
        fugit excepturi consectetur maiores eius, totam quas, itaque aut, harum magni cupiditate ut? </p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quas officiis aliquid eos neque esse, ducimus
        vitae illo! Ipsa iure qui asperiores tempora! Quo, nihil dignissimos ab minima aspernatur at accusantium
        placeat! Assumenda quaerat, necessitatibus earum reiciendis incidunt culpa doloribus unde odio perferendis atque
        vel non numquam, mollitia minus itaque nulla animi eveniet nihil sapiente eos corrupti laudantium aut id.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quas officiis aliquid eos neque esse, ducimus
        vitae illo! Ipsa iure qui asperiores tempora! Quo, nihil dignissimos ab minima aspernatur at accusantium
        placeat! Assumenda quaerat, necessitatibus earum reiciendis incidunt culpa doloribus unde odio perferendis atque
        vel non numquam, mollitia minus itaque nulla animi eveniet nihil sapiente eos corrupti laudantium aut id.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quas officiis aliquid eos neque esse, ducimus
        vitae illo! Ipsa iure qui asperiores tempora! Quo, nihil dignissimos ab minima aspernatur at accusantium
        placeat! Assumenda quaerat, necessitatibus earum reiciendis incidunt culpa doloribus unde odio perferendis atque
        vel non numquam, mollitia minus itaque nulla animi eveniet nihil sapiente eos corrupti laudantium aut id.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quas officiis aliquid eos neque esse, ducimus
        vitae illo! Ipsa iure qui asperiores tempora! Quo, nihil dignissimos ab minima aspernatur at accusantium
        placeat! Assumenda quaerat, necessitatibus earum reiciendis incidunt culpa doloribus unde odio perferendis atque
        vel non numquam, mollitia minus itaque nulla animi eveniet nihil sapiente eos corrupti laudantium aut id.</p>
      </div>
    </section>
    </>
  )
}

export default AboutScreen;
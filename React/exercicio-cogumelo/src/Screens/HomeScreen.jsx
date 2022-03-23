
import styles from './HomeScreen.module.css'
import Galeria from '../components/Galeria/Galeria'
import Iframe from '../components/iframe/Iframe';


const HomeScreen = () => {
  return (
    <>
      <main>
        <div className={styles.containerPrincipal}>
          <div>
          <h1>Estamos aprendendo HTML e CSS com o melhor professor de todos</h1>
          </div>
          <Galeria />
        
        <div className={styles.paragrafosMain}>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non modi nobis eveniet. Ea vel consectetur
          voluptates quisquam aspernatur non animi quibusdam? Repellat minus quam ratione. Ea voluptates nisi deleniti,
          sed quo assumenda quod magni deserunt consectetur, iure architecto ipsa eos autem ipsum culpa vel laboriosam
          voluptate tempora repudiandae quibusdam quisquam labore nobis adipisci? Nihil atque repellendus quo dolorem
          enim, quasi sunt perferendis aliquam. Reiciendis aliquid molestiae, minima laudantium odit culpa quaerat ullam
          laboriosam. Repellat officia fuga deserunt beatae, laborum corporis voluptatem similique, impedit, labore
          totam vitae! In fugit excepturi consectetur maiores eius, totam quas, itaque aut, harum magni cupiditate ut?
        </p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quas officiis aliquid eos neque esse, ducimus
          vitae illo! Ipsa iure qui asperiores tempora! Quo, nihil dignissimos ab minima aspernatur at accusantium
          placeat! Assumenda quaerat, necessitatibus earum reiciendis incidunt culpa doloribus unde odio perferendis
          atque vel non numquam, mollitia minus itaque nulla animi eveniet nihil sapiente eos corrupti laudantium aut
          id.</p>
      </div>
    <section>

      <Iframe  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.40891204835!2d-51.20348518427167!3d-29.99641283600601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c071%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1645473938796!5m2!1spt-BR!2sbr"
      largura="80%" altura="450"
      />
      </section>
      </div>
      </main>
    </>
  )
}

export default HomeScreen;
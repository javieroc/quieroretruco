import Layout from '../components/Layout'
import styles from './home.module.css'

const Home = () => (
  <Layout>
    <div className={styles.home}>
      <nav>
        <h2>QuieroReTruco</h2>
        <ul>
          <li>Reglas</li>
          <li>Historia</li>
          <li>Feedback</li>
        </ul>
      </nav>

      <img src="/1-espada.png" />
      <div>
        <button className={styles.button}>Jugar</button>
      </div>
    </div>
  </Layout>
);

export default Home;

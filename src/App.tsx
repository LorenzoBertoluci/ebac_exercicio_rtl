import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://ironstudios.vtexassets.com/arquivos/ids/328093/060253_2.jpg?v=638048605089800000">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;

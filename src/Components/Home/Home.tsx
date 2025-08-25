import { Link } from 'react-router-dom';
import style from './Home.module.css'

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <h1 className={style.title}>Welcome Back 👋</h1>
        <p className={style.subtitle}>
          Glad to have you here. Let's explore together!
        </p>
        <Link to="profile">
          <button className={style.button}>View Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
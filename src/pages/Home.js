import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from "axios";
import styles from '../assets/Home.module.css'
import Search from '../assets/images/SearchIcon'

const Home = () => {
  const endpoint = 'http://localhost:8000/url/'
  const [URL, setURL] = useState({})
  const navigate = useNavigate()

  function submit(s) {
    s.preventDefault();
    Axios.post(endpoint, {
      "url": URL.url
    })
    .then(() => {
      navigate("/resultado")
    })
  }

  function handle(d) {
    const newData = { ...URL };
    newData[d.target.id] = d.target.value;
    setURL(newData);
  }

  return (
    <div className={styles.background}>
      <div className={styles.filter}>
        <div className={styles.container}> 
        <h1>Analisador de SEO</h1>
        <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        
        <form className={styles.form} onSubmit={(s) => submit(s)}>
          <input className={styles.input} id="url" value={URL.value}  onChange={(d) => handle(d)} placeholder="Insira a URL" required="" type="text" />
          <button type='submit'>
              <Search /> 
          </button>
        </form>

        </div>
      </div>
    </div>
  )
}

export default Home; 
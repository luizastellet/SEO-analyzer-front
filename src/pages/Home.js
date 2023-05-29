import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from "axios";
import styles from '../assets/Home.module.css'
import Search from '../assets/images/SearchIcon'
import { Footer } from '../components/Footer';
import isUrl from 'is-url';
import { Error } from '../components/Error';

const Home = () => {
  const endpoint = 'http://localhost:8000/url/'
  const [URL, setURL] = useState('')
  const [showError, setShowError] = useState(false)
  const navigate = useNavigate()

  function submit(s) {
    s.preventDefault();
    if(isUrl(URL)){
      Axios.post(endpoint, {
        "url": URL
      })
      .then(() => {
        navigate("/resultado")
      })
    } else {
      setShowError(true)
    }
  }

  function handle(d) {
    setURL(d.target.value);
  }

  return (
    <div className={styles.background}>
      <div className={styles.filter}>
      <div className={styles.wrapper}>
          <div className={styles.container}> 
          <h1>Analisador de SEO</h1>
          <p>
          Uma ferramenta gratuita desenvolvida para auxiliar na aplicação de técnicas de <abbr title='Seatch Engine Optimization'><a href='https://developers.google.com/search/docs?hl=pt-br#o-que-e-seo'>SEO</a></abbr> white-hat e on-page em páginas web. 
          </p>
          
          <form className={styles.form} onSubmit={(s) => submit(s)}>
            <input className={styles.input} id="url" value={URL}  onChange={(d) => handle(d)} placeholder="Insira a URL" required type="text" />
            <button type='submit'>
                <Search /> 
            </button>
          </form>
        {showError && <Error />}
        </div>
        </div>
          <Footer />
      </div>
    </div>
  )
}

export default Home; 
import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import styles from '../styles/Layout.module.css'

function Layout({ children }) {
  return (
    <>
    <Meta />
    <Nav />
    <div className={styles.container}>
      <Header />
        <main className={styles.main}>
            {children}
        </main>
    </div>
    </>
    
  )
}

export default Layout
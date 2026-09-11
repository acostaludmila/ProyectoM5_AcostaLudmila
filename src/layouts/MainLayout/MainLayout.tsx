import { Outlet } from 'react-router-dom'
import Footer from '../../components/navigation/Footer/Footer'
import Header from '../../components/navigation/Header/Header'
import styles from './MainLayout.module.css'

function MainLayout() {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout

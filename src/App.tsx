import { Toaster } from 'react-hot-toast'
import Intro from 'components/Intro'
import MoreSection from 'components/MoreSection'
import Nav from 'components/Nav'
import BoostYourLink from 'components/BoostYourLink'
import Footer from 'components/Footer'

const App = () => {
  return (
    <>
      <main className='min-h-screen overflow-x-hidden'>
        <Nav />
        <Intro />
        <MoreSection />
        <BoostYourLink />
        <Footer />
      </main>
      <Toaster />
    </>
  )
}

export default App

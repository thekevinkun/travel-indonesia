import "./App.css";

import { Header, Hero, AboutUs, UpcomingEvents, 
  WatchMoments, Faq, Blog, Contact, Footer } from "./sections";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <AboutUs />
        <UpcomingEvents />
        <WatchMoments />
        <Faq />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App;
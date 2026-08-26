import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Audience from './components/Audience/Audience';
import Compliance from './components/Compliance/Compliance';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Hero />
        <Services />
        <Audience />
        <Compliance />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;

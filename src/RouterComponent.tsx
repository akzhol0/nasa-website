import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/styles.scss';
import HomePage from './assets/components/home-page/HomePage';
import UnknownPage from './assets/components/unknown-page/UnknownPage';
import Header from './assets/components/header/Header';
import Footer from './assets/components/footer/Footer';
import { ContextOverAll } from './assets/components/context/logic';

function App() {
  return (
    <BrowserRouter>
      <ContextOverAll>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='*' element={<UnknownPage />}></Route>
        </Routes>
        <Footer />
      </ContextOverAll>
    </BrowserRouter>
  )
}

export default App;
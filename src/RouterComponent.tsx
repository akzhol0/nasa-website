import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/styles.scss';
import HomePage from './assets/components/home-page/HomePage';
import UnknownPage from './assets/components/unknown-page/UnknownPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='*' element={<UnknownPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
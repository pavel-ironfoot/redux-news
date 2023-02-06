import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import MainPage from './components/MainPage/MainPage';
import NewsPage from './components/NewsPage/NewsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path='/redux-news' element={<Navigate to='/'/>}/>
        <Route path ='/' element ={<MainPage />}/>
        <Route path ='/newspage/:item' element={<NewsPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

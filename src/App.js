import './App.css';
import 'remixicon/fonts/remixicon.css';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Home from './components/partials/Home';
import Shop from './components/partials/Shop';
import About from './components/partials/About';
import Blog from './components/partials/Blog';
import Card from './components/Card';
import Men from './components/partials/Men';
import CardDetails from './components/CardDetails';

function App() {
  return (
    <div className='dark:bg-zinc-900'>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/card" element={<Card />} />
        <Route path="/menwomen" element={<Men />} />
        <Route path="/card/:id" element={<CardDetails />} /> {/* Updated route */}
      </Routes>
    </div>
  );
}

export default App;

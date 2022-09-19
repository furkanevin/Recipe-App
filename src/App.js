import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import { GiKnifeFork } from 'react-icons/gi';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav">
          <Link className="logo" to={'/'}>
            {' '}
            <GiKnifeFork /> deliciousss{' '}
          </Link>
        </div>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;

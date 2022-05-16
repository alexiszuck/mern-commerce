import TopBar from './components/TopBar'
import PromotionBanner from './components/PromotionBanner'
import SearchBar from './components/SearchBar'
import ProductCategories from './components/ProductCategories'
import BottomBar from './components/BottomBar'

function App() {
  return (
    <div className="flex flex-col bg-mern-dark">
      <header>
        <TopBar />
        <PromotionBanner />
      </header>
      <main>
        <SearchBar />
        <ProductCategories />
      </main>
      <footer>
        <BottomBar />
      </footer>
    </div>
  );
}

export default App;

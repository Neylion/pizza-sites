import MainPage from './pages/MainPage/MainPage';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <Layout />
    </CartProvider>
  );
}

const Layout = () => {
  // TODO Do layout stuff here (e.g. add footer, menu, move hero here etc)
  return (
    <div className="bg-green-500 h-screen w-full">
      <div className="flex h-full">
        {/* <div className="flex bg-gray-600 h-full">
          <h1>This is my menu</h1>
        </div> */}
        <div className="flex flex-1 bg-red-500 h-full m-auto">
          {/* <div className="bg-emerald-800 w-10/12 mx-auto"> */}
          <MainPage />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;

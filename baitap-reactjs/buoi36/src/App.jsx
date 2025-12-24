import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <Main />
      <Footer />    
      <CartModal/>
    </div>
  );
}
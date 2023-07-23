import { Routes, Route } from "react-router-dom";
import Home from "./modules/Home";
import Wishlist from "./modules/Wishlist";
import Bid from "./modules/Bid";
import Login from "./modules/Login";
import Finance from "./modules/Finance";
import Blog from "./modules/Blog";
import Cars from "./modules/Cars";
import About from "./modules/About";
import Contact from "./modules/Contact";
import Header from './modules/Header';
import Trade from "./modules/Trade/Trade";
import Cart from './modules/Cart';
import HomeDetail from './modules/HomeDetail';
import Orders from "./modules/Orders";
import Dashboard from "./modules/Admin/Dahboard";
import Usersdash from "./modules/Admin/Users";
import Productdash from "./modules/Admin/Products"

const App = () => {
  return (
    <>
    <Dashboard/>  
 
      {/* <Header /> */}
      <Routes>
      <Route path="usersdash" element={<Usersdash/>} />
      <Route path="productsdash" element={<Productdash/>} />
        {/* <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="order" element={<Orders />} />
        <Route path="homedetail/:id" element={<HomeDetail />} />
        <Route path="about" element={<About />} />
        <Route path="bid" element={<Bid />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="finance" element={<Finance />} />
        <Route path="trade" element={<Trade />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/" element={<Home />} />
        <Route path="car" element={<Cars />} />
        <Route path="login" element={<Login />} /> */}
      </Routes>
    </>
  );
};

export default App;

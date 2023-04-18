import React from "react";
import { Routes, Route } from "react-router-dom";
import AllComponents from "./AllComponents";
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";
import Blog3 from "./Blog3";
import Cart1 from "./cartPages/Cart1";
import Cart2 from "./cartPages/Cart2";
import Cart3 from "./cartPages/Cart3";
import Cart4 from "./cartPages/Cart4";
import Cart5 from "./cartPages/Cart5";
import Cart6 from "./cartPages/Cart6";
import Cart7 from "./cartPages/Cart7";
import Cart8 from "./cartPages/Cart8";
import Cart9 from "./cartPages/Cart9";
import Cart10 from "./cartPages/Cart10";
import Cart11 from "./cartPages/Cart11";
import Cart12 from "./cartPages/Cart12";
import Cart13 from "./cartPages/Cart13";
import Cart14 from "./cartPages/Cart14";
import Cart15 from "./cartPages/Cart15";
import Cart16 from "./cartPages/Cart16";
import Cart17 from "./cartPages/Cart17";
import Cart18 from "./cartPages/Cart18";
import Cart19 from "./cartPages/Cart19";
import Cart20 from "./cartPages/Cart20";
import Cart21 from "./cartPages/Cart21";
import Cart22 from "./cartPages/Cart22";
import Cart23 from "./cartPages/Cart23";
import Cart24 from "./cartPages/Cart24";
import Cart25 from "./cartPages/Cart25";
import Cart26 from "./cartPages/Cart26";
import Cart27 from "./cartPages/Cart27";
import Cart28 from "./cartPages/Cart28";
import Cart29 from "./cartPages/Cart29";
import Cart30 from "./cartPages/Cart30";
import NotFoundPage from "./NotFoundPage";
import Admin from "./Admin";
export default function AllRoutes() {
  return (
    <>
      <Routes>
        {/* admin */}
        <Route path="/admin" element={<Admin />} />

        {/* Home */}

        <Route path="/" element={<AllComponents />} />

        {/* Blog routes */}

        <Route path="/blog-1" element={<Blog1 />} />
        <Route path="/blog-2" element={<Blog2 />} />
        <Route path="/blog-3" element={<Blog3 />} />

        {/* All carts */}

        <Route path="/cart-1" element={<Cart1 />} />
        <Route path="/cart-2" element={<Cart2 />} />
        <Route path="/cart-3" element={<Cart3 />} />
        <Route path="/cart-4" element={<Cart4 />} />
        <Route path="/cart-5" element={<Cart5 />} />
        <Route path="/cart-6" element={<Cart6 />} />
        <Route path="/cart-7" element={<Cart7 />} />
        <Route path="/cart-8" element={<Cart8 />} />
        <Route path="/cart-9" element={<Cart9 />} />
        <Route path="/cart-10" element={<Cart10 />} />
        <Route path="/cart-11" element={<Cart11 />} />
        <Route path="/cart-12" element={<Cart12 />} />
        <Route path="/cart-13" element={<Cart13 />} />
        <Route path="/cart-14" element={<Cart14 />} />
        <Route path="/cart-15" element={<Cart15 />} />
        <Route path="/cart-16" element={<Cart16 />} />
        <Route path="/cart-17" element={<Cart17 />} />
        <Route path="/cart-18" element={<Cart18 />} />
        <Route path="/cart-19" element={<Cart19 />} />
        <Route path="/cart-20" element={<Cart20 />} />
        <Route path="/cart-21" element={<Cart21 />} />
        <Route path="/cart-22" element={<Cart22 />} />
        <Route path="/cart-23" element={<Cart23 />} />
        <Route path="/cart-24" element={<Cart24 />} />
        <Route path="/cart-25" element={<Cart25 />} />
        <Route path="/cart-26" element={<Cart26 />} />
        <Route path="/cart-27" element={<Cart27 />} />
        <Route path="/cart-28" element={<Cart28 />} />
        <Route path="/cart-29" element={<Cart29 />} />
        <Route path="/cart-30" element={<Cart30 />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage.tsx";
import { Navbar } from "./components/Navbar.tsx";
import { Footer } from "./components/Footer.tsx";
import { Contact } from "./pages/Contact.tsx";
import { Register } from "./pages/auth/Register.tsx";
import { Login } from "./pages/auth/Login.tsx";
import UserProvider from "./providers/UserProvider.tsx";
import { UserPrivateRoutes } from "./private-routes/UserPrivateRoutes.tsx";
import { AddProduct } from "./pages/AddProduct.tsx";
import { AdminPrivateRoutes } from "./private-routes/AdminPrivateRoutes.tsx";
import { Shop } from "./pages/Shop.tsx";
import { Product } from "./pages/Product.tsx";
import { PageNotFound } from "./components/PageNotFound.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/outletzone/contacto" element={<Contact />} />
          <Route path="/outletzone/register" element={<Register />} />
          <Route path="/outletzone/tienda" element={<Shop />} />
          <Route
            path="/outletzone/login"
            element={
              <UserPrivateRoutes>
                <Login />
              </UserPrivateRoutes>
            }
          />
          <Route
            path="/outletzone/admin/añadir-producto"
            element={
              <AdminPrivateRoutes>
                <AddProduct />
              </AdminPrivateRoutes>
            }
          />
          <Route path="/outletzone/tienda/producto/:id" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  </QueryClientProvider>
);

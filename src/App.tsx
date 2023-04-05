import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import FingerprintRoute from "./common/FingerprintRoute";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/GlobalStyle";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <StyledToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <Routes>
          <Route element={<FingerprintRoute />}>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
            <Route
              path="/products/product/:productId"
              element={<ProductPage />}
            />
            <Route
              path="/products/:category"
              element={<CategoryPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

const StyledToastContainer = styled(ToastContainer)`
  display: flex;
  justify-content: flex-end;
  .Toastify__toast {
    width: 240px;
  }
  .Toastify__toast {
  }
  .Toastify__close-button {
    width: 20px;
  }
`;

export default App;

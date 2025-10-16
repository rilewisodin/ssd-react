import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalProvider } from "../context/GlobalState";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageFavouriteList from "../pages/PageFavouriteList";
import PageWatchList from "../pages/PageWatchList";
import PageMovieDetails from "../pages/PageMovieDetails";
import PageNotFound from "../pages/PageNotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/:id" element={<PageMovieDetails />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/favourite-list" element={<PageFavouriteList />} />
            <Route path="/watch-list" element={<PageWatchList />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default AppRouter;

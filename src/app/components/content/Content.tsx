import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Work from "../../pages/Work";
import Pricing from "../../pages/Pricing";
import Articles from "../../pages/Articles";

export default function Content() {
  return (
    <section className="w-full min-h-screen pt-16 md:pt-0">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </div>
    </section>
  );
}

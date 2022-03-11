import { Fragment } from "react";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import MainBlog from "./components/MainBlog/MainBlog";
import SideBlog from "./components/SideBlog/SideBlog";
import Footer from "./components/Footer";
import Feature from "./components/Feature/Feature";

const App = function () {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <Feature />
      <main className="content">
        <MainBlog />
        <SideBlog />
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;

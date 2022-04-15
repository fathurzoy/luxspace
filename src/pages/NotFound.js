import Footer from "parts/Footer";
import Header from "parts/Header";
import PageErrorMessage from "parts/PageErrorMessage";
import Sitemap from "parts/Sitemap";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Header theme={"black"} />

      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
};

export default NotFound;

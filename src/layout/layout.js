import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

const layout = (props) => {
  return (
    <>
    <Header />
    <>{props.children}</>
    <Footer />
    </>
  )
}

export default layout
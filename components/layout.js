import Header from "./layout/header";
import Footer from "./layout/footer";

export default function Layout({ children }) {
  return (
    <>
      <Header size="fit" location="hero"/>
      {children}
      <Footer/>
    </>
  )
}

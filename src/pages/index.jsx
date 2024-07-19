import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/Sections/Hero";
import "animate.css";

export default function IndexPage() {
  return (
    <>
      <Header />
      <main>
        <div className="position-absolute gradient-radial-1">
          <div className="position-relative gradient-radial" />
        </div>
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}

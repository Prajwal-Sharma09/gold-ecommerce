import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import "./App.css";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;

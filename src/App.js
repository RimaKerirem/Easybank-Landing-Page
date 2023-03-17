import { About, Blogs, Footer, Header, Intro } from "./sections/modules";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <About />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;

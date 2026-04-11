import "@/styles/globals.css";
import { AppProvider } from "../context/AppContext";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <div className="app-wrapper">
        <NavBar />
        <main className="main-content">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

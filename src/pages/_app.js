import "@/styles/globals.css";
import { AppProvider } from "../context/AppContext";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useAppContext } from "../context/AppContext";

function ToastWrapper() {
  const { toast } = useAppContext();
  return toast ? <div className="toast">{toast}</div> : null;
}

export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ToastWrapper />
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

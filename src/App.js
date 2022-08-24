import { Provider } from "react-redux";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <Navbar />

        <SearchBar />

        <section
          className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
        >
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"></div>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div>
              <Blogs />

            </div>
          </div>
        </section>

        <section className="pt-6">
          <Footer />
        </section>
      </div>
    </Provider>
  );
}

export default App;

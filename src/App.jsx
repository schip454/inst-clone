import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MainRoutes from "./components/Routes/MainRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <MainRoutes />
      <ToastContainer position="top-center" />
    </Provider>
  );
}

export default App;

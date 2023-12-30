import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MainRoutes from "./components/Routes/MainRoutes";

function App() {
  return (
    <Provider store={store}>
      <MainRoutes />
    </Provider>
  );
}

export default App;

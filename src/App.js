import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Router";
import store from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import MainPage from "./mainPage/mainPage";
import StockDetail from "./stockDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <MainPage /> },
      {
        path: "stockDetail/:stockId",
        element: <StockDetail />,
      },
    ],
  },
]);

export default router;

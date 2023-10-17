import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import MainPage from "./mainPage/mainPage";
import StockDetail from "./stockDetailPage/stockDetail";
import { loaderForDetail } from "./stockDetailPage/stockDetail";
import OrderBook from "./orderBook/OrderBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <MainPage /> },
      {
        path: "stockDetail/:stockId",
        element: <StockDetail />,
        loader: loaderForDetail,
      },
      { path: "stockDetail/:stockId/orderBook", element: <OrderBook /> },
    ],
  },
]);

export default router;

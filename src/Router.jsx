import { createBrowserRouter } from "react-router-dom";
import BookmarkList from "./pages/bookmarkList/bookmarkList";
import AlterPlaceList from "./pages/alterPlaceList/temp";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "bookmarkList",
        element: <BookmarkList />,
      },  {
        path: "alterPlaceList",
        element: <AlterPlaceList />,
      },
    ],
  },
]);

export default router;
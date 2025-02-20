import { createBrowserRouter } from "react-router-dom";
// import BookmarkList from "../pages/bookmarkList/bookmarkList";
import App from "./App";
import MapPage from "./pages/Map/MapPage";
import BookmarkList from "./pages/bookmarkList/bookmarkList";
import AlterPlaceList from "./pages/alterPlaceList/temp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // {
      //   path: "bookmarkList",
      //   element: <BookmarkList />,
      // }, 
      {
        path: "map",
        element: <MapPage />,
      }, 
      {
        path: "bookmarkList",
        element: <BookmarkList />,
      },
      {
        path: "alterPlaceList",
        element: <AlterPlaceList />,
      },
    ],
  },
]);

export default router;
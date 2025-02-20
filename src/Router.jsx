import { createBrowserRouter } from "react-router-dom";
// import BookmarkList from "../pages/bookmarkList/bookmarkList";
import App from "./App";
import MapPage from "./pages/Map/MapPage";
import BookmarkList from "./pages/bookmarkList/bookmarkList";
import AlterPlaceList from "./pages/alterPlaceList/temp";
import ReviewCreate from "./pages/reviewCreate/reviewCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
       {
        path: "reviewCreate",
        element: <ReviewCreate />,
      },
    ],
  },
]);

export default router;
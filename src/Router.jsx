import { createBrowserRouter } from "react-router-dom";
// import BookmarkList from "../pages/bookmarkList/bookmarkList";
import App from "./App";
import MapPage from "./pages/Map/MapPage";

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
    ],
  },
]);

export default router;
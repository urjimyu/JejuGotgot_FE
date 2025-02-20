import { createBrowserRouter } from "react-router-dom";
import BookmarkList from "../pages/bookmarkList/bookmarkList";
import App from "../App";
import WorkDetail from "../pages/Work/WorkDetail";
import DelayRouteWrapper from "../pages/Work/components/error/DelayRouteWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <BookmarkList />,
      }, 
    ],
  },
]);

export default router;
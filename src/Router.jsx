import { createBrowserRouter } from "react-router-dom";
import BookmarkList from "./pages/bookmarkList/bookmarkList";
import App from "./App";  

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "bookmarkList",
        element: <BookmarkList />,
      }, 
    ],
  },
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
// import BookmarkList from "../pages/bookmarkList/bookmarkList";
import App from "./App";
import MapPage from "./pages/Map/MapPage";
import BookmarkList from "./pages/bookmarkList/bookmarkList";
import AlterPlaceList from "./pages/alterPlaceList/temp";
import ChatPage from "./pages/chat/ChatPage";
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
        path: "chat",
        element: <ChatPage />},
       {
        path: "reviewCreate",
        element: <ReviewCreate />,
      },
    ],
  },
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import About from "../pages/bookmarkList/bookmarkList";
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
        element: <About />,
      },
      {
        path: "work",
        element: (
          <DelayRouteWrapper>
            <Work />
          </DelayRouteWrapper>
        ),
      },
      {
        path: "work/:name/:title",
        element: (
          <DelayRouteWrapper>
            <WorkDetail />
          </DelayRouteWrapper>
        ),
      },
      {
        path: "guest",
        element: <Guest />,
      },
    ],
  },
]);

export default router;
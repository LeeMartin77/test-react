import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import IndexPage from "./pages/IndexPage.tsx";
import PostsList from "./pages/PostsList.tsx";
import PostDetail from "./pages/PostDetail.tsx";

// Documentation: https://reactrouter.com/start/data/routing
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: IndexPage },
          { path: "posts", 
            children: [
              { index: true, Component: PostsList },
              { path: ":id", Component: PostDetail }
            ]
      }
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <RouterProvider router={router} />,
);

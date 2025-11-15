import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import OpenJobs from "../pages/openjobs/OpenJobs";
import Login from "../pages/login/Login";
import Jobs from "../pages/jobs/Jobs";
import About from "../pages/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      { path: "register", Component: Register },
      { path: "about", Component: About  },
      { path: "new-jobs", Component: Jobs },
      { path: "login", Component:Login },
      { path: "open-jobs", Component: OpenJobs },

    ]
  },
]);

export default router;
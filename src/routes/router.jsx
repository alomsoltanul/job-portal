import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import OpenJobs from "../pages/openjobs/OpenJobs";
import Login from "../pages/login/Login";
import Jobs from "../pages/jobs/Jobs";
import About from "../pages/about/About";
import JobDetailed from "../pages/shared/JobDetailed";
import PrivateRoute from "../pages/routes/PrivateRoute";
import ApplyJob from "../pages/routes/PrivateRoutes/ApplyJob";

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
      { path: "/apply-jobs/:id", element:<PrivateRoute><ApplyJob></ApplyJob></PrivateRoute> },
      { path: "/jobs/:id", Component: JobDetailed , loader: ({params}) =>fetch(`http://localhost:3000/jobs/${params.id}`)},

    ]
  },
]);

export default router;
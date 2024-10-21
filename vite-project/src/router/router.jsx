import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import { TopBarLayout } from "../components/layout/TopBarLayout";
import { Home } from "../pages/Home";



export const routes = {
    home: "/",
    aboutUs: "/about-us",
    services: "/services",
  };

export const router = createBrowserRouter([
    {
      path: routes.home, element: <TopBarLayout />, children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path: routes.aboutUs,
            element: <AboutUs />,
        },
        {
            path: routes.services,
            element: <Services />,
        },
      ]
      
    },
  ]);

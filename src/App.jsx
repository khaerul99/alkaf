import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Catalog from "./pages/catalog";
import AboutUS from "./pages/aboutUs";
import ContactUs from "./pages/contactUS";
import HomeDashboard from "./pages/dashboard/homeDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/aboutus",
    element: <AboutUS />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/dashboard",
    element: <HomeDashboard />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

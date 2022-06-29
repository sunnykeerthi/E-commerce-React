import UniversalSearchPage from "../pages/UniversalSearchPage";
import FAQsPage from "../pages/FAQsPage";
import EventsPage from "../pages/EventsPage";
import { universalResultsConfig } from "./universalResultsConfig";
import JobsPage from "../pages/JobsPage";
import ProductsPage from "../pages/ProductsPage";
import LocationsPage from "../pages/LocationsPage";
import SingleProductPage from "../pages/SingleProductPage";
import Homepage from "../pages/Hompage";

export const routeConfig = [
  {
    path: "/",
    exact: true,
    page: <Homepage />,
  },
  {
    path: "/products",
    page: <ProductsPage verticalKey="products" />,
  },
  {
    path: "/faqs",
    page: <FAQsPage verticalKey="faqs" />,
  },
  {
    path: "/events",
    page: <EventsPage verticalKey="events" />,
  },
  {
    path: "/locations",
    page: <LocationsPage verticalKey="locations" />,
  },
  {
    path: "/jobs",
    page: <JobsPage verticalKey="jobs" />,
  },
  {
    path: "/product/:id",
    page: <SingleProductPage />,
  },
];

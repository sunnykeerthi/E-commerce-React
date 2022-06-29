import Navigation from "../components/Navigation_custom";
import { universalResultsConfig } from "../config/universalResultsConfig";
import { LayoutComponent } from "../PageRouter";

const navLinks = [
  // {
  //   to: "/",
  //   label: "All",
  // },
  ...Object.entries(universalResultsConfig).map(([verticalKey, config]) => ({
    to: verticalKey,
    label: config.label || verticalKey,
  })),
];

/**
 * A LayoutComponent that provides a SearchBar and Navigation tabs to a given page.
 */
const StandardLayout: LayoutComponent = ({ page }) => {
  return (
    <>
      <Navigation links={navLinks} exact />
      {page}
    </>
  );
};
export default StandardLayout;

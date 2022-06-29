import { ComponentType } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

interface RouteData {
  path: string;
  page: JSX.Element;
}

export type LayoutComponent = ComponentType<{ page: JSX.Element }>;

interface PageProps {
  Layout?: LayoutComponent;
  routes: RouteData[];
}

/**
 * PageRouter abstracts away logic surrounding react-router, and provides an easy way
 * to specify a {@link LayoutComponent} for a page.
 */
export default function PageRouter({ Layout, routes }: PageProps) { 

  const pages = routes.map((routeData) => {
    const { path, page } = routeData;
    if (Layout) {
      return (
        <Route key={path} path={path} exact>
          <Layout page={page} />
        </Route>
      );
    }

    return (
      <Route key={path} path={path} exact>
        {page}
      </Route>
    );
  });

  return (
    <Router>
      <Switch>{pages}</Switch>
    </Router>
  );
}

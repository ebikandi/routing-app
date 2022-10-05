import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Text } from "react-native";
import { Router } from "./Router";
import { Route1 } from "./Components/Route1";
import { Route2 } from "./Components/Route2";

const AppRoutes = () => {
  const element = useRoutes([
    {
      path: "/route1",
      element: <Route1 />,
      exact: true,
    },
    {
      path: "/route2/:routeId",
      element: <Route2 />,
      exact: true,
    },
    {
      path: "*",
      element: <Text> FALLBACK!!!!</Text>,
    },
  ]);
  return element;
};

const Root = () => {
  return (
    <Router>
      <Suspense fallback={null}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
};

export { Root };

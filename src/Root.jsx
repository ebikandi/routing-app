import { Suspense } from "react";
import { useRoutes, Link } from "react-router-native";
import { Text } from "react-native";
import { Router } from "./Router";
import { Subpackage } from "./subpackage/Subpackage";

const AppRoutes = () => {
  const element = useRoutes([
    {
      path: "/hello",
      element: <Text> Hello from host!! </Text>,
      exact: true,
    },
    {
      path: "/sub/*",
      element: <Subpackage />,
    },
    {
      path: "*",
      element: <Text> FALLBACK in HOST!!!!</Text>,
    },
  ]);
  return element;
};

const Root = () => {
  return (
    <Router>
      <Link to="/hello">
        <Text>say hi</Text>
      </Link>
      <Link to="/sub/route1">
        <Text>go route_1</Text>
      </Link>
      <Link to="/sub/route2/custom-param">
        <Text>go route_2</Text>
      </Link>
      <Suspense fallback={null}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
};

export { Root };

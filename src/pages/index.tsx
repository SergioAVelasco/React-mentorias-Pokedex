import Dashboard from "./dashboard/dashboard";
import Comparison from "./comparison/comparison";
import MyTeam from "./myTeam/myTeam";

import Context from "./../context/pokemonContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/*
  React router documentation: 
  https://reactrouter.com/en/main
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/comparison",
    element: <Comparison />,
  },
  {
    path: "/myTeam",
    element: <MyTeam />,
  },
]);

const Pages = () => {
  return (
    <Context>
      <RouterProvider router={router} />
    </Context>
  );
};

export default Pages;

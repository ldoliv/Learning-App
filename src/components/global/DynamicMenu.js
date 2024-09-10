// Control Props
// http://localhost:3000/isolated/exercise/06.js

import { Outlet } from "react-router-dom";
import { useAddChildren } from "contexts/RoutesContext";
import { Menu } from "components/global/Menu";
import { generateDynamicRoutes } from "helpers/routes-helper";

export function DynamicMenu({ routes, baseFolder }) {
//   console.log(routes, baseFolder);

  const dynamicRoutes = generateDynamicRoutes({ routes, baseFolder });
//   console.log(dynamicRoutes);

  useAddChildren([
    {
      index: true,
      element: <Menu routes={routes} />,
    },
    ...dynamicRoutes,
  ]);

  return (
    <>
      <Outlet />
    </>
  );
}

// import {useMemo, useCallback} from 'react';
import {useRoutes} from 'routes';
import {RouterProvider} from 'contexts/RoutesContext';




function App() {

   // console.clear();
   // console.log('app');
   const routes = useRoutes();

   if (!routes.length)
      return null;

   return (
      <RouterProvider routes={routes} />
   )
}

export default App;

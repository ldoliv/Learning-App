// import {useMemo, useCallback} from 'react';
import {getRoutes} from 'routes';
import {RouterProvider} from 'contexts/RoutesContext';


function App() {
   console.clear();
   // console.log('app');
   const routes = getRoutes();

   return (
      <RouterProvider routes={routes} />
   )
}

export default App;

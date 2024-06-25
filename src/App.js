// import {useMemo, useCallback} from 'react';
import {useRoutes} from 'routes';
import {RouterProvider} from 'contexts/RoutesContext';
import {Auth0Provider} from '@auth0/auth0-react';


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


function App() {

   // console.clear();
   // console.log('app');
   const routes = useRoutes();

   if (!routes.length)
      return null;

   return (
      <Auth0Provider
         domain={domain}
         clientId={clientId}
         authorizationParams={{
            redirect_uri: window.location.origin + '/learn/react/authentication'
         }}
      >
         <RouterProvider routes={routes} />
      </Auth0Provider>
   )
}

export default App;

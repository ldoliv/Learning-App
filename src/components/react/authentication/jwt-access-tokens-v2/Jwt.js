
import {AuthProvider} from "./contexts/AuthProvider";
import PersistLogin from "./components/PersistLogin";
import TasksPage from "./components/TasksPage";


/*
   Code created and taken from Task Manager project -> D:\SSD Work\Webapps\React\Task Manager
   - for the server run the node.js server at -> D:\SSD Work\Webapps\Node.js\jwt authentication
*/


export default function Jwt() {

   return (
      <AuthProvider>
         <PersistLogin>
            <TasksPage />
         </PersistLogin>
      </AuthProvider>
   )
}

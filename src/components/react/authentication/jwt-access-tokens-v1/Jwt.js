import {useUser} from "./hooks/useUser";
import {useTasks} from "./hooks/useTasks";


/*
   Code created and taken from Task Manager project -> D:\SSD Work\Webapps\React\Task Manager
   - for the server run the node.js server at -> D:\SSD Work\Webapps\Node.js\jwt authentication
*/


export default function Jwt() {

   const {user, handleLogin, handleLogout} = useUser();
   const {tasks, getTasks} = useTasks(user);

   return (
      <>
         <h3 className="mb-4">Jwt Authentication</h3>
         <div className="row gx-2">
            <div className="col-auto">
               <button className="btn btn-light" onClick={handleLogin}>Login</button>
            </div>
            {user && <div className="col-auto">
               <button className="btn btn-light" onClick={handleLogout}>Logout</button>
            </div>}
            <div className="col-auto">
               <button className="btn btn-light" onClick={getTasks}>Get tasks</button>
            </div>
         </div>
         {user && <h4 className="my-4">Welcome {user.username}</h4>}
         {tasks && (
            <ul className="my-4">
               {tasks.map(task => <li key={task.id}>{task.title}, reminder: {task.reminder ? 'true' : 'false'}</li>)}
            </ul>
         )}
      </>
   )
}

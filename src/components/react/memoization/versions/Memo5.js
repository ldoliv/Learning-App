import React from "react";
import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';

/*
	https://blog.bitsrc.io/how-to-make-your-react-application-even-faster-3efe9387cbb1
*/

/*
	Wraped Child with React.memo doing a shallow comparison of props.
	Passing Functions, Objects or arrays the child component will always rerender.

   For preventing child rerendering when:
      - Passing functions as props use "useCallback".
      - Passing Objects or Arrays use a test function as second paramter to the React.memo for comparing Objects or Arrays
	
*/

function Child ({name, person, updatePerson}) {
   // console.log("%o rendered", name);
	const renderCount = useRenderCounter(0);


   function handleUpdate() {
      updatePerson({name});
   }

   return (
      <div className="mb-3">
         <div className="mb-2">{renderCount} This is the child component. Name is {person.name}</div>
         <div>
            <button onClick={handleUpdate}>Update from Child</button>
         </div>
      </div>
   );
// });
   
// This handles the person object only rendering if the name changes
// return true to not rerender
};
// eslint-disable-next-line no-func-assign
Child = React.memo(Child, (prevProps, currProps) => {
   return prevProps.person.name === currProps.person.name;
});

export default function Memo5(props) {

   // console.log('Memo5 rendered');

   const [person1, setPerson1] = React.useState({ name: "" });
   const [person2, setPerson2] = React.useState({ name: "" });

   
   const updatePerson1 = React.useCallback((person) => {
      console.log("updatePerson1 useCallback called");
      setPerson1(person);
   }, []);

   const updatePerson2 = React.useCallback((person) => {
      console.log("updatePerson2 useCallback called");
      setPerson2(person);
   }, []);

   
   function handleUpdate() {
      updatePerson1({ name: "Parent" });
   }


   return (
      <div>

         <div className="mb-4">
            <button onClick={handleUpdate}>Update child 1 from Parent</button>
         </div>

         <Child name="child1" person={person1} updatePerson={updatePerson1} />
         <Child name="child2" person={person2} updatePerson={updatePerson2} />

      </div>
   );
}



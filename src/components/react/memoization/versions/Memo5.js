import React, {memo, useState, useCallback} from "react";
import {useRenderCounter} from 'components/react/hooks/useRenderCounter/UseRenderCounter';

/*
	https://blog.bitsrc.io/how-to-make-your-react-application-even-faster-3efe9387cbb1
*/

/*
	Wraped Child with React.memo doing a shallow comparison of props.
	Passing Functions, Objects or arrays the child component will always rerender.

   For preventing child rerendering when:
      - Passing functions as props use "useCallback".
      - Passing Objects or Arrays:
         => One solution is to use a comparison function as the second argument to the React.memo HOC allowing to compare the properties of the object
         => Another solution is to wrap the object or array with React.useMemo making the reference stable.
*/

function Child ({name, person, updatePerson}) {
   // console.log("%o rendered", name);
	const renderCount = useRenderCounter(0);


   function handleUpdate() {
      updatePerson({name: name});
   }

   return (
      <div className="mb-3">
         <div className="mb-2">{renderCount} This is the child component. Name is {person.name}</div>
         <div>
            <button onClick={handleUpdate}>Update from Child</button>
         </div>
      </div>
   );
};
   
// This handles the person object only rendering if the name changes. Return true to not rerender
// eslint-disable-next-line no-func-assign
// Child = memo(Child);

// eslint-disable-next-line no-func-assign
Child = memo(Child, (prevProps, currProps) => {
   return prevProps.person.name === currProps.person.name;
});

export default function Memo5(props) {

   // console.log('Memo5 rendered');
   const renderCount = useRenderCounter(0);
   const [, forceUpdate] = useState();
   const [person, setPerson] = useState({ name: "" });

   function parentUpdatePerson() {
      setPerson({ name: "Parent" });
   }

   function childUpdatePerson(person) {
      setPerson(person);
   }

   // memoized
   const memoChildUpdatePerson = useCallback(childUpdatePerson, []);

   return (
      <div>
         {renderCount} <button className='mb-3' onClick={() => forceUpdate({})}>Force update</button>

         <div className="mb-4">
            <button onClick={parentUpdatePerson}>Update child from Parent</button>
         </div>

         <Child name="child" person={person} updatePerson={memoChildUpdatePerson} />
         {/* <Child name="child" person={person} updatePerson={childUpdatePerson} /> */}

      </div>
   );
}



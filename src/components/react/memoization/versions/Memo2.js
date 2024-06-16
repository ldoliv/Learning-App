import React, {memo} from "react";
import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';


/*
	https://blog.bitsrc.io/how-to-make-your-react-application-even-faster-3efe9387cbb1
*/

/*
   - Passing primitive values to the Child component

   Using React.memo, does a shallow comparison of props, the child component will only rerender if it's prop values change,
   this compares primitive values passed in props.
   Be aware that passing and object or function as a prop the reference must always be the same otherwise the componente will render.

   => works fine for primitive values, for objects and functions more work is needed.
*/

function Child (props) {
	const renderCount = useRenderCounter(0);
   return <div className="mb-3">{renderCount} Child component. Name is {props.name}</div>;
};
// eslint-disable-next-line no-func-assign
Child = memo(Child);    // 👈

export default function Memo2(props) {
   const [person, setPerson] = React.useState({ name: "" });

   function updatePerson() {
      setPerson({ name: "Leonel" });
   }

   return (
      <div>
         <Child name={person.name} />
         <button onClick={updatePerson}>Update person</button>
      </div>
   );
}



import React from "react";
import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';


/*
	https://blog.bitsrc.io/how-to-make-your-react-application-even-faster-3efe9387cbb1
*/

/*
	Wraped Child with React.memo doing a shallow comparison of props, good for primitive values.
	Works if primitive values are passed as props, or values like object references that do not change
	
   => The child component only rerenders when prop values change.
*/

const Child = React.memo((props) => {
	const renderCount = useRenderCounter(0);
   return <div className="mb-3">{renderCount} This is the child component. Name is {props.name}</div>;
});

export default function Memo2(props) {
   const [person, setPerson] = React.useState({ name: "" });

   function callApi() {
      setPerson({ name: "Leonel" });
   }

   return (
      <div>
         <Child name={person.name} />
         <button onClick={callApi}>Call api</button>
      </div>
   );
}



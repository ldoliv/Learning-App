import React from "react";
import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';


/*
	https://blog.bitsrc.io/how-to-make-your-react-application-even-faster-3efe9387cbb1
*/

/*
	Wraped Child with React.memo doing a shallow comparison of props
	For Functions, Objects or arrays the child component will always be called.
	=> If an object is passed as a prop a solution is to use a comparison function as the second argument to the React.memo HOC.
*/

const Child = React.memo((props) => {
	const renderCount = useRenderCounter(0);
   return <div>{renderCount} This is the child component. Name is {props.person.name}</div>;
   
// Return true to not rerender
}, (prevProps, currProps) => {
   return prevProps.person.name === currProps.person.name;
});

export default function Memo3(props) {
   
   const [person, setPerson] = React.useState({ name: "" });

   function callApi() {
      setPerson({ name: "Leonel" });
   }

   return (
      <div>
         <Child person={person} />
         <button onClick={callApi}>Call api</button>
      </div>
   );
}

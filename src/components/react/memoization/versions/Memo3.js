import React from "react";
import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';


/*
   https://blog.bitsrc.io/how-to-make-your-react-application-even-faster-3efe9387cbb1
*/

/*
   - Passing an object to the Child component

   => One solution is to use a comparison function as the second argument to the React.memo HOC allowing to compare the properties of the object
   => Another solution is to wrap the object with React.useMemo making the object reference stable.
*/

// Uses comparison function
const Child1 = React.memo((props) => {
   const renderCount = useRenderCounter(0);
   return <div className="mb-3">{renderCount} This is the child component. Name is {props.person.name}</div>;

   // Return true to not rerender
}, (prevProps, currProps) => {
   return prevProps.person.name === currProps.person.name;
});

// Demo for React.useMemo
const Child2 = React.memo((props) => {
   const renderCount = useRenderCounter(0);
   return <div className="mb-3">{renderCount} This is the child component. Name is {props.person.name}</div>;
});


export default function Memo3(props) {

   const [person, setPerson] = React.useState({ name: "" });

   const memoObj = React.useMemo(() => (person), [person.name]);  // makes the reference to the object always the same



   function callApi() {
      setPerson({ name: "Leonel" });
   }

   return (
      <div>
         <Child1 person={person} />

         <Child2 person={person} />
         <Child2 person={memoObj} />

         <button onClick={callApi}>Call api</button>
      </div>
   );
}

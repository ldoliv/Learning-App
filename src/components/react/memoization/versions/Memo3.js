import React, {memo, useMemo, useState} from "react";
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
function Child1 (props) {
   const renderCount = useRenderCounter(0);
   return <div className="mb-3">{renderCount} This is the child component. Name is {props.person.name}</div>;
};

// eslint-disable-next-line no-func-assign
Child1 = memo(Child1, (prevProps, currProps) => {
   // Return true to not rerender
   return prevProps.person.name === currProps.person.name;
})

// Demo for React.useMemo
function Child2 (props) {
   const renderCount = useRenderCounter(0);
   return <div className="mb-3">{renderCount} This is the child component. Name is {props.person.name}</div>;
};

// eslint-disable-next-line no-func-assign
Child2 = memo(Child2);


export default function Memo3(props) {

   const [person, setPerson] = useState({ name: "" });

   const memoObj = useMemo(() => person, [person.name]);  // makes the reference to the object always the same

   function updatePerson() {
      setPerson({ name: "Leonel" });
   }

   return (
      <div>
         <Child1 person={person} />    {/* ✅ Unstable but uses the compare function */}

         <Child2 person={person} />    {/* ❌ Unstable */}
         <Child2 person={memoObj} />   {/* ✅ Stable */}

         <button onClick={updatePerson}>Update person</button>
      </div>
   );
}

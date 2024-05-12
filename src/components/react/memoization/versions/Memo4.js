import React from "react";
import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';

/*
	https://blog.bitsrc.io/how-to-make-your-react-application-even-faster-3efe9387cbb1
*/

/*
   - Passing a function to the Child component

   - Functions from useState are stable.
   - Wrap the function in React.useCallback for a stable reference to the function.

*/


function Search ({ setSearch }) {
	const renderCount = useRenderCounter(0);

   function handleSearch(e) {
      setSearch(e.target.value);
   }

   return (
      <>
         {renderCount}
         <input type="text" onChange={handleSearch} />
      </>
   )
};
// eslint-disable-next-line no-func-assign
Search = React.memo(Search);


export default function Memo4(props) {

   console.log("Memo4 rendered");

   const [, forceUpdate] = React.useState();
   const [query, setSearch] = React.useState("");


	// const handleSearch = (query) => {
   //    setSearch(query);
   // };

   function handleSearch(query) {
      setSearch(query);
   };

   const handleSearchMemoized = React.useCallback(handleSearch, []);

   return (
      <div>

         {/* ✅ passing setSearch directly is stable, the component won't always rerender */}
         {/* <Search setSearch={setSearch} /> */}

         {/* ❌ rerenders Search components on every key press */}
         {/* <Search setSearch={handleSearch} /> */}

         {/* ✅ wraped callback function in useCallback allowing to maintain the same reference and prevent rerenders */}
         <Search setSearch={handleSearchMemoized} />

         <div>Searching: {query}</div>
         <button onClick={() => forceUpdate({})}>Force update</button>

      </div>
   );
}

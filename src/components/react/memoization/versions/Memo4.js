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

   1. Memo4 will always rerender which is normal because the state is changing
   2. The focus here is on the Search component, that if the prop isn't stable it will also rerender.
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

   const [query, setSearch] = React.useState("");


	const handleSearch = (query) => {
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
      </div>
   );
}

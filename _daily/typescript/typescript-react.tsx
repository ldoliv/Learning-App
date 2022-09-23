import React, {useReducer} from "react";

// =======================================
// Typescript and React
// =======================================



// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example


/* Common props */

type AppProps = {
	message: string;
	count: number;
	disabled: boolean;
	/** array of a type! */
	names: string[];
	/** string literals to specify exact string values, with a union type to join them together */
	status: "waiting" | "success";
	/** any object as long as you dont use its properties (NOT COMMON but useful as placeholder) */
	obj: object;
	obj2: {}; // almost the same as `object`, exactly the same as `Object`
	/** an object with any number of properties (PREFERRED) */
	obj3: {
		id: string;
		title: string;
	};
	/** array of objects! (common) */
	objArr: {
		id: string;
		title: string;
	}[];
	/** a dict object with any number of properties of the same type */
	dict1: {
		[key: string]: MyTypeHere;
	};
	dict2: Record<string, MyTypeHere>; // equivalent to dict1
	/** any function as long as you don't invoke it (not recommended) */
	onSomething: Function;
	/** function that doesn't take or return anything (VERY COMMON) */
	onClick: () => void;
	/** function with named prop (VERY COMMON) */
	onChange: (id: number) => void;
	
	/** an optional prop (VERY COMMON!) */
	optional?: OptionalType;
}

/*
React specific props


React.ReactNode
	Is a set of all possible return values of a component. It is has a broader possibility range of what can be returned from a component.

JSX.Element
	Is specifically what a react component should return.

*/

declare interface AppProps2 {

	children?: React.ReactNode; // best, accepts everything React can render. React.ReactNode -> Return value of a component

	childrenElement: JSX.Element; // A single React element. JSX.Element -> Return value of React.createElement

	style?: React.CSSProperties; // to pass through style props

	onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target

	/** alternative function type syntax that takes an event (VERY COMMON) */
	onClick(event: React.MouseEvent<HTMLButtonElement>): void;

	/** function type syntax that takes an event (VERY COMMON) */
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

	//  more info: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#wrappingmirroring
	props: Props & React.ComponentPropsWithoutRef<"button">; // to impersonate all the props of a button element and explicitly not forwarding its ref
	props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>; // to impersonate all the props of MyButtonForwardedRef and explicitly forwarding its ref
}


// --------------------------------------------

/*
	====================
	Function Components
	====================

	❌ React.FunctionComponent / React.FC / React.SFC

	This is discouraged and should not be used. !!!!!!!!!!!!

	React.FunctionComponent or the shorthand React.FC has some downsides:
		- There's an implicit definition of children - all your components will have children typed!
		- They don't support generics
		- It does not correctly work with defaultProps

	Also shouldn't be used:
		- React.VoidFunctionComponent <- deprecated
		- React.VFC <- deprecated
*/

❌
const App: React.FunctionComponent<{ message: string }> = ({ message }) => (
  <div>{message}</div>
);

✅
// Declaring type of props - see "Typing Component Props" for more examples
type IProps = {
	message: string;
	children: React.ReactNode;
}; /* use `interface` if exporting so that consumers can extend */

// Easiest way to declare a Function Component; return type is inferred.
const App1 = ({ message }: IProps) => <div>{message}</div>;

// you can choose annotate the return type so an error is raised if you accidentally return some other type
const App2 = ({ message }: IProps): JSX.Element => <div>{message}</div>;

// you can also inline the type declaration; eliminates naming the prop types, but looks repetitive
const App3 = ({ message }: { message: string }) => <div>{message}</div>;

type IProps3 = (props: {
	children: React.ReactNode
}) => JSX.Element

function App4 ({ children }: {children: React.ReactNode}): JSX.Element {
	return <div>{children}</div>;
};

const App5 = ({children}): IProps3 => <div>{children}</div>



// --------------------------------------------

// Class components

type Props2 = {
	foo: string;
}
type State2 = {

}
class MyComponent2 extends React.Component<Props2, State2> {
	render() {
		return <span>{this.props.foo}</span>
	}
}

<MyComponent2 foo="bar" />

// --------------------------------------------

// Renderable props

type Props3 = {
	header: React.ReactNode;	// <-
}
class MyComponent3 extends React.Component<Props3, {}> {
	render() {
		return <div>
			{this.props.header}
		</div>;
	}
}

<MyComponent3 header={<h1>Header</h1>} />


// --------------------------------------------


// Get the instance type of a React class component.

class MyAwesomeComponent extends React.Component {
	render() {
		return <div>Hello</div>;
	}
}

const foo: React.ReactElement<MyAwesomeComponent> = <MyAwesomeComponent />; // Okay



// --------------------------------------------


// Generic components

/** A generic component */
type SelectProps<T> = {
	items: T[]
}
class Select<T> extends React.Component<SelectProps<T>, any> {

}

/** Usage */
const Form = () => <Select<string> items={['a', 'b']} />;



// --------------------------------------------

// Generics with arrow functions

// normal function
function fooa<T>(x: T): T {
	return x;
}

// gives error =>
// const foo = <T>(x: T) => x; // ERROR : unclosed `T` tag

// Workaround: Use extends on the generic parameter to hint the compiler that it's a generic, e.g.:
const foob = <T extends unknown>(x: T) => x;


// --------------------------------------------



// With event handler

/*
	element types       => being interacted with https://github.com/DefinitelyTyped/DefinitelyTyped/blob/6b5ceb41aafa8e41d0f99aabc910ebad5442c008/types/react/global.d.ts#L28
							  => https://github.com/microsoft/TypeScript/blob/v3.9.5/lib/lib.dom.d.ts#L19224-L19343

	event type          => https://github.com/DefinitelyTyped/DefinitelyTyped/blob/6b5ceb41aafa8e41d0f99aabc910ebad5442c008/types/react/index.d.ts#L730

	div         <- HTMLDivElement
	event type  <- React.MouseEventHandler
	
*/

interface MyComponentProps {
	name: string
}

class MyComponent5 extends React.Component<MyComponentProps> {

	public myHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
		// do something
	}

	public render () {
		return <div onClick={this.myHandler}>Hello {this.props.name}</div>
	}
}

// --------------------------------------------

// ============
// With Hooks
// ============

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks


// useState()
// --------------

const [user, setUser] = useState<User | null>(null);

// later...
setUser(newUser);




// useReducer()
// --------------


const initialState = { count: 0 };

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {			// <- LINE TO NOTICE
	
  switch (action.type) {
	 case "increment":
		return { count: state.count + action.payload };
	 case "decrement":
		return { count: state.count - Number(action.payload) };
	 default:
		throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
	 <>
		Count: {state.count}
		<button onClick={() => dispatch({ type: "decrement", payload: "5" })}> - </button>
		<button onClick={() => dispatch({ type: "increment", payload: 5 })}> + </button>
	 </>
  );
}



// useRef()
// -----------

// - If possible, prefer as specific as possible. For example, HTMLDivElement
//   is better than HTMLElement and way better than Element.
// - Technical-wise, this returns RefObject<HTMLDivElement>

// element types
// => being interacted with https://github.com/DefinitelyTyped/DefinitelyTyped/blob/6b5ceb41aafa8e41d0f99aabc910ebad5442c008/types/react/global.d.ts#L28
// => https://github.com/microsoft/TypeScript/blob/v3.9.5/lib/lib.dom.d.ts#L19224-L19343

// Option 1: DOM element ref#
const divRef = useRef<HTMLDivElement>(null);

function TextInputWithFocusButton() {
 
  // initialise with null, but tell TypeScript we are looking for an HTMLInputElement
	const inputEl = React.useRef<HTMLInputElement>(null);
	
  const onButtonClick = () => {
	 // strict null checks need us to check if inputEl and current exist.
	 // but once current exists, it is of type HTMLInputElement, thus it
	 // has the method focus! ✅
	 if (inputEl && inputEl.current) {
		inputEl.current.focus();
	 }
  };
  return (
	 <>
		{/* in addition, inputEl only can be used with input elements. Yay! */}
		<input ref={inputEl} type="text" />
		<button onClick={onButtonClick}>Focus the input</button>
	 </>
  );
}

// Option 2: Mutable value ref
// Technical-wise, this returns MutableRefObject<number | null>
const intervalRef = React.useRef<number | null>(null);




// ---------------------------------------------------

// Use props type of an existing component



const defaultProps = {
  age: 25,
};
const GreetComponent = ({ name, age }: {name: string} & typeof defaultProps) => (
  <div>{`Hello, my name is ${name}, ${age}`}</div>
);
GreetComponent.defaultProps = defaultProps;



type ComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? JSX.LibraryManagedAttributes<T, P>
  : never;

const TestComponent = (props: ComponentProps<typeof GreetComponent>) => {
  return <h1 />;
};

// No error
const el = <TestComponent name="foo" />;


// ---------------------------------------------------

// Can do both ways:

class App extends React.Component<Props, State> {
	state = {
		text: "",
	};

	// typing on RIGHT hand side of =
	// inferred method signature
	onChange = (e: React.FormEvent<HTMLInputElement>): void => {
		this.setState({ text: e.currentTarget.value });
	};

	// typing on LEFT hand side of =
	// enforces a type of the delegate provided by @types/react
	onChange2: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		this.setState({text: e.currentTarget.value})
	}

	render() {
		return (null);
	}
}

// ---------------------------------------------------

// Context
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */
function createCtx<A extends {} | null>() {
  const ctx = createContext<A | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (c === undefined)
      throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
}



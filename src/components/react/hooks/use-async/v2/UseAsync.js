import {useState, useCallback, useRef, useLayoutEffect} from 'react';

const STATUS = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  RESOLVED: 'RESOLVED',
  REJECTED: 'REJECTED'
}

function getStatus(status) {
  return {
    idle: status === STATUS.IDLE,
    pending: status === STATUS.PENDING,
    resolved: status === STATUS.RESOLVED,
    rejected: status === STATUS.REJECTED
  };
}

function useAsync(initialAsyncFunction = null, options = {withState: true}) {
  const [state, setState] = useState({
    status: getStatus(STATUS.IDLE),
    data: null,
    error: null
  });

  const mountedRef = useRef(true);

  useLayoutEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const callAsyncWithState = useCallback(
    async (...args) => {
      if (!initialAsyncFunction) {
        throw new Error('No async function provided');
      }

      setState(prevState => ({status: getStatus(STATUS.PENDING), data: prevState.data, error: prevState.error}));

      try {
        const result = await initialAsyncFunction(...args);
        if (mountedRef.current) {
          setState({status: getStatus(STATUS.RESOLVED), data: result, error: null});
        }
      } catch (err) {
        if (mountedRef.current) {
          setState({status: getStatus(STATUS.REJECTED), data: null, error: err});
        }
      }
    },
    [initialAsyncFunction]
  );

  const callAsyncWithPromise = useCallback(
    async (...args) => {
      if (!initialAsyncFunction) {
        throw new Error('No async function provided');
      }

      try {
        const result = await initialAsyncFunction(...args);
        if (mountedRef.current) {
          return result;
        }
      } catch (err) {
        if (mountedRef.current) {
          throw err;
        }
      }
    },
    [initialAsyncFunction]
  );

  const reset = useCallback(() => {
    setState({
      status: getStatus(STATUS.IDLE),
      data: null,
      error: null
    });
  }, []);

  return options.withState ? [state, callAsyncWithState, reset] : [callAsyncWithPromise];
}

export {useAsync};

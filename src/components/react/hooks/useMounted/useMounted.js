import {useLayoutEffect, useRef, useCallback} from "react";

export function useMounted() {
  const mountedRef = useRef(true);

  useLayoutEffect(() => {
    // mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    }
  }, [])

  // return mountedRef;
  // return () => mountedRef.current;
  return useCallback(() => mountedRef.current, []);
}

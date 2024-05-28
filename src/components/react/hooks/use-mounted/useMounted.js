import React, {useLayoutEffect, useMemo, useRef, useCallback} from "react";

export function useMounted() {
  const mountedRef = useRef(null);

  useLayoutEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    }
  }, [])

  // return mountedRef;
  // return () => mountedRef.current;
  return useCallback(() => mountedRef.current, []);
}

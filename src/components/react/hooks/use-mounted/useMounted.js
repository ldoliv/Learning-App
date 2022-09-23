import React from "react";

export function useMounted() {
  const mountedRef = React.useRef(null);

  React.useLayoutEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    }
  }, [])

  return mountedRef;
}
import React, { useEffect, useRef } from 'react';

export default function usePrevProps(value: any) {
    const ref = useRef ();
    useEffect (() => {
      ref.current = value;
    });
    return ref.current;
}
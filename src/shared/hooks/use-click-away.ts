import { useEffect, useRef } from 'react';

const useClickAway = (ref: React.RefObject<HTMLElement> | null, callback: () => void) => {
    const savedCallback = useRef<() => void>();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref && ref.current && !ref.current.contains(event.target as Node)) {
                savedCallback.current && savedCallback.current();
            }
        };

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [ref]);
};

export { useClickAway };

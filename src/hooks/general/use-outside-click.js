import { useEffect } from 'react';

export const useOutsideAlerter = (ref,callback) => {
    useEffect(() => {

        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event?.target)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [callback, ref]);
};

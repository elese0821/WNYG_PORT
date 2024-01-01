import { useCallback } from 'react';
const useNolink = () => {
    const noLink = useCallback((event) => {
        event.preventDefault();
    }, []);
    return noLink;
};

export default useNolink;

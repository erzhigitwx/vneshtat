import { useState } from 'react';

const usePagination = <T,>(items: T[], itemsPerPage: number, step: number) => {
    const [startIndex, setStartIndex] = useState(0);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const nextPage = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + step, items.length - itemsPerPage));
    };

    const prevPage = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - step, 0));
    };

    const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

    return { currentItems, nextPage, prevPage, totalPages, startIndex };
};

export { usePagination };

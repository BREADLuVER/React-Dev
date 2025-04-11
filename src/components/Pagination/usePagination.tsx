import { useMemo } from "react";

const usePagination = <T,>(data:T[], page: number, pageSize: number) => {
    const paginatedData = useMemo(() => {
        const start = (page-1) * pageSize
        const end = start + pageSize
        return data.slice(start, end)
    }, [data, page, pageSize])

    const totalPages = useMemo(() => {
        return Math.ceil(data.length/pageSize)
    }, [data.length, pageSize])

    return { paginatedData, totalPages }
}

export default usePagination;
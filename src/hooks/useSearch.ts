import { useMemo } from 'react';


export const useSearch = function (arr: any, search: string): any {
    let state = useMemo(() => {
        if (search === '') {
            return arr
        }
        return arr.filter((user: any) => {
            return user.name.toLowerCase().includes(search.toLowerCase())

        })
    }, [arr, search])
    return state ?? []
}
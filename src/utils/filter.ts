export const filter = (items: any, query: string) => {


    return items.reduce((filterArray: any, curItem: any) => {
        
        
        if(curItem.title.toLowerCase().includes(query) || curItem.description.toLowerCase().includes(query)) {
            filterArray.push(curItem);
        }


        return filterArray;

    }, [])
}
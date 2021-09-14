

export const totalAmountInCart = (items:any) => {


    let total = items.reduce((count, curItem) => {
        return count + (curItem.price * curItem.quantity);
    }, 0)  
    
    return total.toFixed(2);
}   


export const textTruncate = (str: any, length: any, ending: any) => {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
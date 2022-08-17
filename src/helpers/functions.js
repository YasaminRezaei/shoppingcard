const titleShorter = (title) => {
   const spitedTitle =  title.split(' ');
    return `${spitedTitle[0]} ${spitedTitle[1]}`;
}

const IsInCard = (state,id) => {
    const result = !! state.selectedItems.find(item => item.id === id);
    return result;
}

const quantityCount = (state,id) => {
   const index = state.selectedItems.findIndex( item => item.id === id )
   if(index === -1) {
    return false
   } else{
    return state.selectedItems[index].quantity;
   } 
}

export {titleShorter,IsInCard,quantityCount};
const titleShorter = (title) => {
   const spitedTitle =  title.split(' ');
    return `${spitedTitle[0]} ${spitedTitle[1]}`;
}

const IsInCard = (state,id) => {
    const result = !! state.selectedItems.find(item => item.id === id);
    return result;
}

export {titleShorter,IsInCard};
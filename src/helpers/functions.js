const titleShorter = (title) => {
   const spitedTitle =  title.split(' ');
    return `${spitedTitle[0]} ${spitedTitle[1]}`;
}

export {titleShorter};
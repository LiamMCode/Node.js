const theOneFunc = () => {};

setTimeout(theOneFunc, 4 * 1000);

const delay = who => {
    console.log(who + ' delay' + ' seconds');
  };
  
  setTimeout(delay, 4 * 1000, 4);
  setTimeout(delay, 8 * 1000, 4);
  

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function

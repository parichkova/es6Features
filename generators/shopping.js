function* shopping() {
    // stuff on the sidewalk
    // walking down the sidewalk
    //go into the store
   const stuffFromStore = yield 'cash';
    
    // walking back home

    return stuffFromStore
}

// stuff in the store

const gen = shopping();

shopping.next(); // leaving our house
shopping.next('groceries'); // leaving the store with groceries
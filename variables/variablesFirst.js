for (let i=0; i < 5; i++) {
    button.addEventListener('click', function(i) {
        console.log(i);
    }) 
}

//solves this

for (var i = 0; i < allButtonsOnPage.length; i++) {
    allButtonsOnPage[i].addEventListener('click', function() {
      logButtonIndex(i);
    });
  }
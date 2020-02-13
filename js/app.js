var userName = function(fName, mName, lName){
    // var fName = prompt('What is your first name?');
    // var mName = prompt('What is your middle name?');
    // var lName = prompt('What is your last name?');
    return fName + ' ' + mName + ' ' + lName;
}

    var newUserName = userName('Christain', 'Edward', 'Lievrouw');
    console.log(newUserName);

function iLoveBeer(){
    console.log('I Love Beer!!');
}
iLoveBeer();

function yourBeer(){
    var yourBeer = prompt('Whats your fav beer!!!');
}


var howMany = function() {
    var count = prompt('how many things do you want to order?');
  
    while (count === '' || isNaN(count)) {
      count = prompt('please enter a number');
    }
  
    console.log('howMany():', Number(count));
    return Number(count);
  }
  
  var getItem = function() {
    var order = prompt('what do you want to order?').toLowerCase;
    var item;
  
    while (order !== 'house' && order !== 'hotel') {
      order = prompt('please enter house or hotel');
    }
  
    if (order === 'hotel') {
      item = '<img src="https://media-cdn.tripadvisor.com/media/photo-s/09/d8/0a/09/img-hotel.jpg">';
    } else if (order === 'house') {
      item = '<img src="https://img.freepik.com/free-vector/colorful-houses-collection-flat-style_23-2147787131.jpg?size=338&ext=jpg">';
    }
  
    console.log('getItem():', item);
  
    document.write(item);
    return item;
  }
  
  var showOrder = function() {
    var item = getItem();
    var total = howMany();
    var result = '';
  
    for (var i = 0; i < total; i++) {
      result = result + '<p>Model #' + i + ' ' + item + '</p>';
    }
  
    console.log('showOrder():', result);
    return result;
  }
  
// howMany();
  // getItem();
  showOrder();
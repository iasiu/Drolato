//****************//
// This function checks whether the name is empty
function isValidName(name) {
  // Return false if the name field is empty
  if (name === '') {
    return false;
  }
  return true;
}
//****************//

//****************//
// This runs when the checkout button is clicked
$('.checkout-button').click(function() {
  // Check whether the user wants a cone or a cup
  const getIcecreamType = ($('.icecream-type-1').is(':checked') == true) ? $('.icecream-type-1').val() : $('.icecream-type-2').val();

  // Get the user's name at checkout
  const getName = $('.name-for-checkout').val();

  // Check if the name input is empty
  if (!isValidName(getName)) {
    alert('Please enter a name for the order, otherwise someone else can take your icecream and you will be sad :(');
    return;
  }

  // This is the price of each product //
  const coconut_mango_price = 2.3;
  const salted_caramel_price = 2.5;
  const strawberries_cream_price = 1.9;

  // Get the quanity of scoops of items //
  const getQuantityCoconutMango = $('.quantity-scoops-coconut-mango').val();
  const getQuantitySaltedCaramel = $('.quantity-scoops-salted-caramel').val();
  const getQuantityStrawberriesCream = $('.quantity-scoops-strawberries-cream').val();

  // calculate the total cost of the order //
  let total = coconut_mango_price * getQuantityCoconutMango + salted_caramel_price * getQuantitySaltedCaramel + strawberries_cream_price * getQuantityStrawberriesCream;

  let messageText = 'Hi ' + getName + ', we are happy to announce, that you\'ve just taken the first step to become happier by ordering your gelato in a ' + getIcecreamType + '. You only have to pay: $' + total.toFixed(2);

  // Alert with final amount
  alert(messageText);
});
//****************//

//问候语
var greeting = 'Howdy ';
var name = 'Molly,';
var message = 'Pleease check your order:';
//合并
var welcome = greeting + name + message;

//标价
var sign = 'Montague House';
var titles = sign.length;
var subTotal = titles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//id地址
var el = document.getElementById('greeting');
//Relace the content of that element with the personalized welcome message
el.textContent = welcome;

//get the eement that has an id of userSign then update its contents
var  elSign = document.getElementById('userSign');
elSign.textContent = sign;

//Titles
var elTiles = document.getElementById('titles');
elTiles.textContent = titles;
 
//subTotal
var SubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

//shipping
var elSubTotal=document.getElementById('shipping');
elSubTotal.textContent='$'+shipping;

//grandTotal
var elGtandTotal=document.getElementById('grandTotal');
elGrandtotal.textContent='$'+grandTotal;
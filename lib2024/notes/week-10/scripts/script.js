// SEQUENCE OF JS
// 1) User Interacts 
// 2) Event happens 
// 3) Function is Called
// 4) Script runs 

// document.querySelector('#color-1').style.backgroundColor="green";

// window is the keyword targeting current browser
// window.onload asks the browser to wait for the page to load and then run the function(called init in this case)
window.onload = init;
// this is done to avoid complications of function running without having the elements ready and rendered

// function name-of-function will create a function in js file
// function must have a opening curly brace and a closing one {} similar to css
// the name of a function is followed by brackets ()

// function createBox() {

// }

function init() {

	// document is the keyword to target the current webpage
	// with queryselector we are asking the document to find an element that matches the CSS selector defined in the brackets 
	// here we target #color-1 i.e. element with id color-1
	// onclick is telling the browser to fire the function "changeColor" when the selected element is clicked 
	document.querySelector('#color-1').onclick = changeColor;
	document.querySelector('#color-2').onclick = changeColor;
	document.querySelector('#color-3').onclick = changeColor;
	// document.querySelector('#color-4').onclick = changeColor;


	document.querySelector('.reset').onclick = colorReset;
	
	document.querySelector('.ham').onclick = showHideMobileMenu;

	// with queryselectorAll we are asking the document to find all elements the CSS selector defined in the brackets 
	// Similar to getElementsByClassName it creates an array of elements 
	var imgThumbs = document.querySelectorAll('.img-slide-thumb');
	// we have to use for look to iterate through the elements
	for (var i = 0; i < imgThumbs.length; i++) {
	  // we add an EventListner called "click" to each element and fire function called "showImgLightBox" when this element is clicked
	  // imgThumbs[0]
	  // imgThumbs[1]
	  // imgThumbs[2]
	  
	  imgThumbs[i].addEventListener('click', showImgLightBox);
	}

	// Add onclick function to hide overlay when clicked
	document.querySelector('#image-gallery-overlay').onclick = hideImgLightBox;

}

// changeColor will be the function used by the color boxes to change colors 
// name of a function must be in camel case, there should be no spaces and avoid hyphens as well\
// Also the name of a function must start with a lower case alphabet
function changeColor() {

	// to create a variable in JS, we use var keyword 
	// var nameOfVariable = value;
	// var variableOne = 1;
	var elementId = this.id;
	console.log(this);
	// "this" is the keyword used to access the current element that is being interacted with 
	// in this case, "this" targets the color box that is being clicked

	// alert is used to create an alert box with the text given in the brackets 
	// in JS to concatenate JS variables with text/string we use + symbol
	// alert(elementId);
	// alert("clicked")
	// alert(this);
	// alert(elementId+" is clicked");

	this.style.backgroundColor = "red";
	// .style is the keyword to target the styles of the element 
	// backgroundColor is used to change the backgroundColor of element 

	this.innerHTML = "I am clicked";
	// we assign the indicator-text element to indicatorText variable
	var indicatorText = document.getElementById("indicator-text");
	// document.getElementById is used to target elements using id
	// this method would not work for class selector

	// indicatorText.innerHTML = elementId + " is active";
	 // indicatorText.innerHTML = indicatorText.innerHTML+" "+elementId + " is active";
	// if statement is used in JS to create conditional code which only executes if all the conditions given in if statement are satisfied
	// .includes(desiredText) checks for the desisredText in the selected HTML and gives true or false depending on the given conditions
	// if(indicatorText.innerHTML.includes(elementId)) {
	// 	indicatorText.innerHTML =indicatorText.innerHTML+ " " + elementId + " is active";
	// }

	// ! is used to create a negative condition checking, meaning to use the opposite of the condition given inside the if statement
	if(!indicatorText.innerHTML.includes(elementId)) {
	// var.innerHTML is used to target the innerHTML of the given element and modify its value
	// to make sure the existing text is not deleted we use indicatorText.HTML and concatenate it with the desired text
		indicatorText.innerHTML = indicatorText.innerHTML+"<br>"+this.id+ " is active";
	}

}

// this function will be used to reset the colors of color boxes 
function colorReset() {

	// .getElementsByClassName creates an array of elements having the same class
	// jsColorDivs = ["color-1", "color-2", "color-3"];
	// console.log(jsColorDivs);
	var jsColorDivs = document.getElementsByClassName('js-color');
	// console.log(jsColorDivs);
	// jsColorDivs[2].innerHTML="I am third";
	// for(var i = 0; i <10; i++){
	// 	console.log(i);
	// }

	// we use for loop to iterate through elements 
	// A for loop has three instructions 
	// 1 ) The first instruction is to create a counter variable(var i) and set a starting value(i = 0)
	// 2) The second instruction is to keep looping until this condition is true (till i is less than the total length of array jsColorDivs)
	// 3) is to set the step counter for the counter variable (i++ is the shorthand to add 1 to i for each loop)
	 for(var i =0; i <jsColorDivs.length; i++ ) {
	// console log is used to write text/string to the console log of the browser
		console.log(i);

		jsColorDivs[i].style.backgroundColor ="";
		jsColorDivs[i].innerHTML="";
	}

	// innerHTML="" is used to reset text
	document.getElementById("indicator-text").innerHTML="";
}

// To show and hide mobile menu when .ham is clicked
function showHideMobileMenu() {

	var mobileNav = document.querySelector('.mobile-nav');

	// in a if statement == is used to compare two value, if the values matches then the condition is true
	// an if statement is followed by an else statement which runs when the given condition is not met
	if(mobileNav.style.display=="block") {
		mobileNav.style.display="none";
	} else {
		mobileNav.style.display="block";
	}
}

function showImgLightBox(){
	//getAttribute is used to get attribute value of an element, the attribute name is passed in the ()
	var targetImgId = this.getAttribute("data-img-id");
	console.log(targetImgId);
	//show overlay container
	document.querySelector('#image-gallery-overlay').style.display ="block";
	//#1 - remove the active class from the current active slide
	//get element that has both the classes image-slide and active and remove the class active from it
	document.querySelector('.img-slide.active').classList.remove('active');
	// console.log(document.querySelector("#"+targetImgId));
	// Add the active class to the slide attached to the "data-img-id" attribute of this thumbnail
	document.querySelector("#"+targetImgId).classList.add('active');
}

function hideImgLightBox(){
	document.querySelector('#image-gallery-overlay').style.display ="none";
}
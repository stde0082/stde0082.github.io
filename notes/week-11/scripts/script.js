// document.querySelector('#color-1').style.backgroundColor="green";

// window is the keyword targeting current browser
// window.onload asks the browser to wait for the page to load and then run the function(called init in this case)
window.onload = init;
// this is done to avoid complications of function running without having the elements ready and rendered

// function name-of-function will create a function in js file
// function must have a opening curly brace and a closing one {} similar to css
// the name of a function is followed by brackets ()
function init() {

	// document is the keyword to target the current webpage
	// with queryselecotr we are asking the document to find an element that matches the CSS selector defined in the brackets 
	// here we target #color-1 i.e. element with id color-1
	// onclick is telling the browser to fire the function "changeColor" when the selected element is clicked 
	document.querySelector('#color-1').onclick = changeColor;
	document.querySelector('#color-2').onclick = changeColor;
	document.querySelector('#color-3').onclick = changeColor;

	document.querySelector('#loadTable').onclick = createTableFromJSON;


	
	document.querySelector('.reset').onclick = colorReset;
	
	document.querySelector('.ham').onclick = showHideMobileMenu;


	// JQuery function attached to the submit event of the form with id "form"
	$('#form').submit(function (e) {
		// e.preventDefualt to avoid the form being submitted to page specified in action attribute 
   		 e.preventDefault();
   		 // passing the current form (this) to variable form 
   		 var form = this;
   		 // fadeIn is a jQuery function to fadeIn an element 
   		 $(".overlay-container").fadeIn(1000, function(){
   		 		//call the showFormValues function and pass variable form to it as argument
   		 		showformValues(form);
   		 		// call the createTableFromJSON function
   		 		createTableFromJSON();
		   		 // fadeOut is a jQuery function to fadeOut an element 
   		 		$('.overlay-container').delay(500).fadeOut(500);
   		 })
	});

}

// changeColor will be the function used by the color boxes to change colors 
// name of a function must be in camel case, there should be no spaces and avoid hyphens as well\
// Also the name of a function must start with a lower case alphabet
function changeColor() {

	// to create a variable in JS, we use var keyword 
	// var nameOfVariable = value;
	var elementId = this.id;
	// "this" is the keyword used to access the current element that is being interacted with 
	// in this case, "this" targets the color box that is being clicked

	// alert is used to create an alert box with the text given in the brackets 
	// in JS to concatenate JS variables with text/string we use + symbol
	//alert(elementId+" is clicked");

	this.style.backgroundColor = "red";
	// .style is the keyword to target the styles of the element 
	// backgroundColor is used to change the backgroundColor of element 

	// we assign the indicator-text element to indicatorText variable
	var indicatorText = document.getElementById("indicator-text");
	// document.getElementById is used to target elements using id
	// this method would not work for class selector

	// if statement is used in JS to create conditional code which only executes if all the conditions given in if statement are satisfied
	// .includes(desiredText) checks for the desisredText in the selected HTML and gives true or false depending on the given conditions
	// if(indicatorText.innerHTML.includes(elementId)) {
	// 	alert(elementId+"already exists");
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
	// jsColorDivs = ["color-1", "color-2", "color-3"]
	var jsColorDivs = document.getElementsByClassName('js-color');

	// we use for loop to iterate through elements 
	// A for loop has three instructions 
	// 1 ) The first instruction is to create a counter variable(var i) and set a starting value(i = 0)
	// 2) The second instruction is to keep looping until this condition is true (till i is less than the total length of array jsColorDivs)
	// 3) is to set the step counter for the counter variable (i++ is the shorthand to add 1 to i for each loop)
	for(var i =0; i <jsColorDivs.length; i++ ) {
		// console log is used to write text/string to the console log of the browser
		console.log(i);

		jsColorDivs[i].style.backgroundColor ="";
	}

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

// to show the form values in the results div which takes the argument "form"
function showformValues(form){
	//serializeArray is a jquery function used to get the values of a form as js Object
	var formValues = $(form).serializeArray(); 
	// $.each is a jquery alternative to for loop to iterate through an JS array or object  (Especially beneficial when the length of array is not known)
	// index is the index  of the current element i.e 0,1,2,3 so on 
		//field is the actual field being accessed 
		
	$.each(formValues, function(index, field){

		// following code does the following : 
		// 1) $("#results") -- (Gets the  selects the div with id results 
		// 2) .fund("#"+field.name+"_result") -- finds the element with id equal to the name of the field being accessed along with text ("_result") Eg : name, pc_result, email_result
		// 3) Modifies the text inside the selected element and replaces it with the value of this field   
		$("#results").find("#"+field.name+"_result").text(field.value);

		// special check for email to add a link instead of just string
		if(field.name=="email"){
			$("#results").find("#"+field.name+"_result").attr("href", "mailto:"+field.value);
		}
	})				
}

 function createTableFromJSON() {
        var myBooks = [
            {
                "Student ID": "1",
                "Name": "John Doe",
                "Email": "jd@gmail.com",
                "Marks": "92.60"
            },
            {
                "Student ID": "2",
                "Name": "Mark",
                "Email": "mark@gmail.com",
                "Marks": "56.00"
            },
            {
                "Student ID": "3",
                "Name": "Sam",
                "Email": "sam@@gmail.com",
                "Marks": "90.40"
            }
        ]

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Student ID', 'Name', 'Email' and 'Marks')
        var col = [];
        for (var i = 0; i < myBooks.length; i++) {
            for (var key in myBooks[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        // this loops through the Mybooks object
        for (var i = 0; i < myBooks.length; i++) {

        	// create a row for each object row and add to the end of the table
            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
				// create a cell for each object column and add to the end of the row
                var tabCell = tr.insertCell(-1);
                // add HTML data to the TableCell
                // select i'th value from mybooks 
                // then select the element with key equal to col[j] from the value selected before 
                // Eg: mybooks[0][col[0]], mybooks[0][col[1]], mybooks[0][col[2]]
                // col[0] = Student ID, col[1] = Name, col[3] = Email
                // mybooks[0][col[0]] = 1, mybooks[0][col[1]] = John Doe
                tabCell.innerHTML = myBooks[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("json_table");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
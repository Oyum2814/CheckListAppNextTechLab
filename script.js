//Here we write the logic behind our Checklist Application



// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close"); //accessing the close span element via it's class name
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Adds a "checked" symbol when clicking on a list item i.e, toggles the checked state 
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'P') {
    ev.target.classList.toggle('checked');
  }
},false);

// Creates a new list item when clicking on the "Add" button
var input = document.getElementById("myInput");

// Executes a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the function to add the goal to the list
      newElement();
    }
  });

function newElement() {
  var days_deadline="";
  var inputValue = document.getElementById("myInput").value;
  var li = document.createElement("li");
  var h = document.createElement("P")                // Create a <p> element
  var t = document.createTextNode(inputValue);     // Create a text node
  
  h.appendChild(t); //add text node inside header
  li.appendChild(h); //add header inside the li item



  if (inputValue === '') {
    alert("You must write something!"); //if no input is given, it should show error
  } else {
        var checkBox=document.getElementById("checkbox");
        if (document.getElementById('date-input').value=='' && checkBox.checked==true)
        {
          alert('Deadline was not mentioned');    //if deadline isnt mentioned, input of the goal should be considered as only input
        }
        else if(checkBox.checked == true){
          deadline=document.getElementById('date-input').value;
          console.log(deadline);
          deadlineDate=new Date(deadline);
          var now = new Date().getTime();
          var distance=deadlineDate-now; //The difference between the deadline time and the time right now
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));

          if(days<0){
            days_deadline="EXPIRED ("+days.toString()+" days)"; // If days left to the deadline is negative it means the deadline has expired.
            var hd = document.createElement("H4")      ;         
            var td = document.createTextNode(days_deadline);    
            hd.appendChild(td); //add text node inside header (containing deadline)
            li.appendChild(hd); //add deadline inside the li item
            hd.style.color='red';
          }
          else{
            days+=1
            days_deadline=days.toString()+" days ";
            var hd = document.createElement("H4")      ;         
            var td = document.createTextNode(days_deadline);    
            hd.appendChild(td); //add text node inside header (containing deadline)
            li.appendChild(hd); //add deadline inside the li item
            hd.style.color='yellow';
          }
          
        }

        ullist= document.getElementById("myUL")
        ullist.insertBefore(li,ullist.childNodes[0]);//The list item is added in the unordered list - such that the latest one is on the topmost
   
  }
  document.getElementById("myInput").value = "";//Reset the input field value 
  days_deadline=""
  

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) { // A list item should disappear if the close button is clicked
    close[i].onclick = function() {
      var div = this.parentElement;
      div.parentNode.removeChild(div);
    }
  }
}
function addDeadline(){
  var checkBox=document.getElementById("checkbox");
  var deadline=document.getElementById("date-input");

  //If deadline is to be added, then show the options for date input, else dont
  if (checkBox.checked == true){
    deadline.style.display = "block";
  } else {
    deadline.style.display = "none";
  }
}

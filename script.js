var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'H3') {
    ev.target.classList.toggle('checked');
  }
},false);

// Create a new list item when clicking on the "Add" button
var input = document.getElementById("myInput");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      newElement();
    }
  });

function newElement() {
  var days_deadline="";
  var inputValue = document.getElementById("myInput").value;
  var li = document.createElement("li");
  var h = document.createElement("H3")                // Create a <h3> element
  var t = document.createTextNode(inputValue);     // Create a text node
  
  h.appendChild(t); //add text node inside header
  li.appendChild(h); //add header inside the li item



  if (inputValue === '') {
    alert("You must write something!");
  } else {
        var checkBox=document.getElementById("checkbox");
        if (document.getElementById('date-input').value=='' && checkBox.checked==true)
        {
          alert('Enter the date');
        }
        else if(checkBox.checked == true){
          deadline=document.getElementById('date-input').value;
          console.log(deadline);
          deadlineDate=new Date(deadline);
          var now = new Date().getTime();
          var distance=deadlineDate-now;
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));

          if(days<0){
            days_deadline="Deadline Crossed ("+days.toString()+" days )"
          }
          else{
            days_deadline=days.toString()+" days left"
          }
          var hd = document.createElement("H4")               
          var td = document.createTextNode(days_deadline);    
          hd.appendChild(td); //add text node inside header (containing deadline)
          li.appendChild(hd); //add deadline inside the li item
          console.log(days_deadline)
        }

        ullist= document.getElementById("myUL")
        ullist.insertBefore(li,ullist.childNodes[0]);
   
  }
  document.getElementById("myInput").value = "";
  days_deadline=""

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.parentNode.removeChild(div);
    }
  }
}
function addDeadline(){
  var checkBox=document.getElementById("checkbox");
  var deadline=document.getElementById("date-input");

  if (checkBox.checked == true){
    deadline.style.display = "block";
  } else {
    deadline.style.display = "none";
  }
}

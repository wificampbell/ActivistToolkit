var displayName = document.getElementById("pmessage");
var button = document.getElementById("myButton");

var send = document.getElementById("send");

if (send)
{
  send.addEventListener("click", showSent);
}

if(button)
{
  button.addEventListener("click", displayMessage);
}


function displayMessage()
{
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var person = document.getElementById("person").value;
  var info = document.getElementById("info").value;
  displayName.innerHTML = "Hello, my name is " + name + " and I'm from " + location + ". I am a " + person + " and I wanted to say : " + info;
}


function showSent()
{
  sent_message.innerHTML = "Message sent, thank you for contacting us and helping us get one step closer to a safer world for children";
}






/*        */





var displayPetition = document.getElementById("pmessage2");
var Petitionbutton = document.getElementById("myButton2");

var send2 = document.getElementById("send2");

if (send2)
{
  send2.addEventListener("click", showSent2);
}

if(Petitionbutton)
{
  Petitionbutton.addEventListener("click", showPetition);
}


function showPetition()
{
  var name_p = document.getElementById("name_p").value;
  var statement = document.getElementById("statement").value;

  displayPetition.innerHTML = "My name is " + name_p + ". " + statement;
}


function showSent2()
{
  sent_message2.innerHTML = "Message sent, thank you for contacting us and helping us get one step closer to a safer world for children";
}

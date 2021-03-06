// const { query } = require("express");
function validateUser() {
   if (localStorage.isAuthenticated === "true") {
      window.location.replace("/play.html")
   } else {
      window.location.replace("/login.html");
   }
}
if (localStorage.isAuthenticated === "true") {
   document.getElementById("login").style.display = "none"
   document.getElementById("logout").style.display = "block"
} else {
   document.getElementById("login").style.display = "block"
   document.getElementById("logout").style.display = "none"
}

//////nav bar menu mobile view /////
document.addEventListener('DOMContentLoaded', function () {
   var elems = document.querySelectorAll('.sidenav');
   var instances = M.Sidenav.init(elems, {});
});
var collapsibleElem = document.querySelector(".collapsible");
var collapsibleInstance = M.Collapsible.init(collapsibleElem, {});

////// If Statment to update nav bar menu based user status //////
if (localStorage.isAuthenticated === "true") {
   document.getElementById("loginMenu").style.display = "none"
   document.getElementById("logoutMenu").style.display = "block"
} else {
   document.getElementById("loginMenu").style.display = "block"
   document.getElementById("logoutMenu").style.display = "none"
}

/////// nav bar profile picture //////
document.addEventListener('DOMContentLoaded', function () {
   var elems = document.querySelectorAll('.dropdown-trigger');
   var options = { constrainWidth: false, coverTrigger: false, alignment: 'left', closeOnClick: false }
   var instances = M.Dropdown.init(elems, options);
});

//////// GET ajax to display user picture in the nav bar ////////
$.get("/api/user/" + localStorage.userEmail, (data) => {
   console.log(data)
   $('#name').text(data.firstName + " " + data.lastName)
   $('#email').text(data.email)
   var navPic = document.getElementById('navPic')
   navPic.src = data.img
   var navSidPic = document.getElementById('navSidPic')
   navSidPic.src = data.img
})

$.get("/api/joinUsersMaps", (data) => {
   data.sort(function (a, b) { return b.score - a.score; });
   console.log(data)
   $("#name1").text(data[0].firstName + " " + data[0].lastname)
   $("#category1").text(data.category)
   $("#score1").text(data[0].score)
   $("#squad1").text(data[0].squad)

   $("#name2").text(data[1].firstName + " " + data[1].lastname)
   $("#category2").text(data[1].category)
   $("#score2").text(data[1].score)
   $("#squad2").text(data[1].squad)

   $("#name3").text(data[2].firstName + " " + data[2].lastname)
   $("#category3").text(data[2].category)
   $("#score3").text(data[2].score)
   $("#squad3").text(data[2].squad)

   $("#name4").text(data[3].firstName + " " + data[3].lastname)
   $("#category4").text(data[3].category)
   $("#score4").text(data[3].score)
   $("#squad4").text(data[3].squad)

   $("#name5").text(data[4].firstName + " " + data[4].lastname)
   $("#category5").text(data[4].category)
   $("#score5").text(data[4].score)
   $("#squad5").text(data[4].squad)

   $("#name6").text(data[5].firstName + " " + data[5].lastname)
   $("#category6").text(data[5].category)
   $("#score6").text(data[5].score)
   $("#squad6").text(data[5].squad)

   $("#name7").text(data[6].firstName + " " + data[6].lastname)
   $("#category7").text(data[6].category)
   $("#score7").text(data[6].score)
   $("#squad7").text(data[6].squad)

   $("#name8").text(data[7].firstName + " " + data[7].lastname)
   $("#category8").text(data[7].category)
   $("#score8").text(data[7].score)
   $("#squad8").text(data[7].squad)

   $("#name9").text(data[8].firstName + " " + data[8].lastname)
   $("#category9").text(data[8].category)
   $("#score9").text(data[8].score)
   $("#squad9").text(data[8].squad)

   $("#name10").text(data[9].firstName + " " + data[9].lastname)
   $("#category10").text(data[9].category)
   $("#score10").text(data[9].score)
   $("#squad10").text(data[9].squad)
})

//// Logout function ///////
function logout() {
   localStorage.clear();
   window.location.replace("/top10.html");
}
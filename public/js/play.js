const { all } = require("sequelize/types/lib/operators");

$(document).ready(() => {
  // hide multiple choice toggle
  console.log("alkhfgpoa")
  let squadChoice = "____";
  let categoryChoice = "____";
  $("#squad-setting").text(squadChoice);
  $("#cat-setting").text(categoryChoice);
  $(".team-choice").on("click", function (event) {
    squadChoice = $(this).data("squad");
    console.log(squadChoice);
    $("#squad-setting").text(squadChoice);
  });

  $(".category-btn").on("click", function (event) {
    categoryChoice = $(this).data("category");
    console.log(categoryChoice);
    $("#cat-setting").text(categoryChoice);
    categoryChosen(categoryChoice)
  });

  $("#hide-toggle").on("click", function (event) {
    let state = $("#q-and-a").data("state");

    console.log(state);
    if (state === "showing") {
      // $("#answers-area").data("state", "hiding");
      // $("#answers-area").addClass("hide");
      // $("#clicker-area").removeClass("hide");
      // $("#clicker-area").data("state", "showing");
      // $("#question-display").html(
      //   "Click the <span class='red' id='clickerSpan' style='color:white'>blue</span> button!"
      // );
      $("#q-and-a").data("state", "hiding");
      $("#q-and-a").addClass("hide");
      $("#cat-encap").data("state", "showing");
      $("#cat-encap").removeClass("hide");
    } else {
      // $("#answers-area").data("state", "showing");
      // $("#answers-area").removeClass("hide");
      // $("#clicker-area").addClass("hide");
      // $("#clicker-area").data("state", "hiding");
      // $("#question-display").html(
      //   "This tiny tyrant ruled across Europe at 5 feet 6 inches"
      // );
      $("#q-and-a").data("state", "showing");
      $("#q-and-a").removeClass("hide");
      $("#cat-encap").data("state", "hiding");
      $("#cat-encap").addClass("hide");
    }
  });

  // hide game over overlays
  $(".hide-toggle-game-over").on("click", function (event) {
    // toggle the overlays
    let state = $("#game-over-encap").data("state");
    console.log(state);
    if (state === "showing") {
      $("#game-over-encap").addClass("hide");
      $("#game-over-encap").data("state", "hiding");
    } else {
      $("#game-over-encap").removeClass("hide");
      $("#game-over-encap").data("state", "showing");
    }

  });

  function categoryChosen(category) {
    $.get(`/api/questions/category/${category}`, (data) => {
      let allAnswersArr = []
      let fourChoices = []

      for (let i = 0; i < data.length; i++) {
        allAnswersArr.push(data[i].answer)
      }
      for (let i = 0; i < 3; i++) {
        fourChoices.push(allAnswersArr[i])
      }

      $("#hide-toggle").on("click", () => {
        let randomData = data[Math.floor(Math.random() * data.length)]
        fourChoices.push(randomData.answer)
        // let dddd = []
        // for (let i = 0; i < 4; i++) {
        //   dddd.push(fourChoices[Math.floor(Math.random() * 4)])
        // }
        // console.log(dddd)
        $("#question-display").text(randomData.question)
        $("#answer-1").text(fourChoices[0])
        $("#answer-2").text(fourChoices[1])
        $("#answer-3").text(fourChoices[2])
        $("#answer-4").text(fourChoices[3])
      })
    });
  }

  $(".team-choice").on("click", function (event) {
    let squad = $(this).data("squad");
    squadChosen(squad)
  });

  function squadChosen(squad) {
    $.ajax({
      method: "PUT",
      url: "/api/squad",
      data: squad
    }).then(() => {

    })

  }





})





















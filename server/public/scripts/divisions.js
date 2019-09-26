"use strict";

$(function() {
  var val = sessionStorage.getItem("loggedIn");
  if (val == "false") {
    $(location).attr("href", "http://localhost:3000/");
  }

  $("#logout").on("click", function() {
    sessionStorage.setItem("loggedIn", false);
    sessionStorage.setItem("userid", null);
    sessionStorage.setItem("username", null);
    sessionStorage.setItem("email", null);
  });

  // Hides team details area
  $("#divisionArea3").hide();

  // Populates dropdown with leagues.
  $.get("/bands/leagues", function(leagues) {
    let leaguesdata = leagues;

    for (let i = 0; i < leaguesdata.length; i++) {
      let leaguesAll = leaguesdata[i];
      let element = document.createElement("option");
      element.text = leaguesAll.NAME;
      element.value = leaguesAll.ID;
      $("#divisionSel").append(element);
    }
  });

  // Changes band detail cards displayed on change of division selection.
  $("#divisionSel").on("change", catFillCard);

  // Begin catFillCard
  function catFillCard() {
    $.getJSON("/bands/allbands", function(data) {
      let teams = data;

      $(".card").empty(); // Clears card of previous selection.
      $("#divisionArea3").show();

      // Loops through for matching bands.
      for (let i = 0; i < teams.length; i++) {
        let teamName = teams[i].TEAMNAME;
        let mgrName = teams[i].MANAGERNAME;
        let mgrPhone = teams[i].MANAGERPHONE;

        let card = $(".card");

        // Populates card with results.
        let cardBody = $("<div class='card-body'></div>");
        let cardBandName = $("<h4 class='card-title'>" + teamName + "</h4>");
        let cardMgrName = $(
          "<h5 class='card-subtitle mb-2'>" + mgrName + "</h5>"
        );
        let cardMgrPhone = $("<p class='card-text'>" + mgrPhone + "</p>");

        // Generates Edit Team Details Buttons and assigns unique id and URL.
        let editTeamLink = $(
          "<a class='btn btn-secondary text-light disabled' href='editteam.php?teamid=" +
            teams[i].ID +
            "'>Edit Band Details</a>"
        );
        // Generates View Roster Details Buttons and assigns unique id and URL.
        let detailsLink = $(
          "<a class='btn btn-dark text-light mx-2 disabled' href='teamdetails.php?teamid=" +
            teams[i].ID +
            "'>View Roster Details</a>"
        );
        // Generates Delete Team Buttons and assigns unique id.
        let deleteLink = $(
          "<a class='btn btn-danger text-light disabled' id='team" +
            teams[i].ID +
            "'>Delete Team</a>"
        );

        // Appends band info to cards
        cardBody.append(
          cardBandName,
          cardMgrName,
          cardMgrPhone,
          editTeamLink,
          detailsLink,
          deleteLink
        );
        card.append(cardBody);
        $("#divisionArea3").append(card);

        // Delete band button
        $("#team" + teams[i].ID).on("click", function() {
          confirm("Are you sure you want to delete this band?");
          $.ajax({
            url: "/allbands/" + teams[i].ID,
            method: "DELETE",
            success: function() {
              alert("Updated!");
            }
          });
          location.href = "bands";
        });
      }
    });
  }
});

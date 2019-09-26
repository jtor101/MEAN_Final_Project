$(function() {
  $(".errorMsg").hide();
  sessionStorage.setItem("loggedIn", false);

  // Input Validation
  function inputVal() {
    $(".errorMsg").hide();
    $(".errorMsg").empty();

    if (
      $("#bandusername")
        .val()
        .trim() == ""
    ) {
      $("#usernameError").text("Username required");
      $("#usernameError").show();
      return false;
    }

    if (
      $("#banduserpassword")
        .val()
        .trim() == ""
    ) {
      $("#passwordError").text("Password required");
      $("#passwordError").show();
      return false;
    }
  }

  // Submit button click handler
  $("#loginform").on("submit", function(e) {
    e.preventDefault();
    let data = {
      username: $("#bandusername").val(),
      password: $("#banduserpassword").val()
    };
    let isOk = inputVal();
    if (isOk == false) {
      return;
    }
    $.post("/users/login", data, function() {})
      .done(function(res) {
        if (res.USERID) {
          sessionStorage.setItem("loggedIn", true);
          sessionStorage.setItem("userid", res.USERID);
          sessionStorage.setItem("username", res.USERNAME);
          sessionStorage.setItem("email", res.EMAIL);
          location.href = "../bands";
        } else {
          $("#loginError").text("Invalid credentials");
          $("#loginError").show();
        }
      })
      .fail(function(res) {
        if (res.status === 403) {
          $("#loginError").text("Invalid credentials");
          $("#loginError").show();
        }
      });
  });
});

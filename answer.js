// 這是本題答案的原始 JavaScript 檔
console.log('$(document).ready(function () {
  $("#btn1").click(function () {
    $("#student-id, #student-name").css({ "color": "blue", "font-size": "20px" });
  });

  $("#btn2").click(function () {
    $("#profile-pic").css({ "border": "5px solid red", "border-radius": "20%" });
  });

  $("#btn3").click(function () {
    $("#profile-pic").attr("src", "41118110-2.jpg");
  });

  $("#btn4").click(function () {
    $("#profile-pic").fadeOut(1000, function () {
      $(this).fadeIn(1000);
    });
  });
});
');

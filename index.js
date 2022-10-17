const root = document.getElementById("root");

const user = {
  name: "stylishjoker",
  email: "animetplink@gmail.com",
  nick_name: "PTK - DTMA",
  src_img: "./assets/logo.png",
  number_phone: "0362272070",
  contact: "abc@xyz.com",
  link_fb: "https://www.facebook.com/nobless.anime/",
  link_twitter: "#",
  link_google: "#",
  link_in: "#",
  link_global: "#",
  link_git: "https://github.com/stylishjoker",
};

const innerClass = () => {
  const container = document.createElement("div");
  container.classList.add("container");
  const flipper = document.createElement("div");
  flipper.classList.add("flip-container");
  const HTML = `
    <div class = "flipper">
      <div class="front">
        <div class = "front-bg">
          <img src=${user.src_img}>
        </div>
      </div>
      <div class="back">
        <div class = "back-bg">
          <img src=${user.src_img}>
        </div>
        <div class = "back-content">
          <div class = "avatar"></div>
          <h1>${user.name}</h1>
          <p>${user.nick_name}</p>
          <div class = "icons">
            <div class = "icon-group">
              <span class = "bold"><i class="fa-solid fa-phone"></i></span>
              <span class = "contact">${user.number_phone}</span>
              <div class = "icon-group">
                <span class = "bold"><i class="fa-solid fa-envelope"></i></i></span>
                <a class = "contact">${user.email}</a>
              </div>
              <div class = "icon-group">
                <span class = "bold"><i class="fa-solid fa-globe"></i></span>
                <a class = "contact">${user.contact}</a>
              </div>
            </div>
          </div>
          <a href="${user.link_fb}"  target = "_blank"class = "icon-box"><i class="fa-brands fa-facebook"></i></a>
          <a href="${user.link_twitter}" target = "_blank" class = "icon-box"><i class="fa-brands fa-twitter"></i></a>
          <a href="${user.link_google}" target = "_blank" class = "icon-box"><i class="fa-brands fa-google"></i></a>
          <a href="${user.link_in}" target = "_blank" class = "icon-box"><i class="fa-brands fa-linkedin"></i></a>
          <a href="${user.link_global}" target = "_blank" class = "icon-box"><i class="fa-brands fa-dribbble"></i></a>
          <a href="${user.link_git}" target = "_blank" class = "icon-box"><i class="fa-brands fa-github"></i></a>
        </div>
        
      </div>
    </div>
  `;
  flipper.innerHTML = HTML;
  container.appendChild(flipper);
  root.appendChild(container);
};
const intro = () => {
  const intro = document.createElement("div");
  intro.classList.add("intro");
  let HTML = "";
  for (var i = 0; i < 4; i++) {
    HTML += `<span class = "tile-${i + 1}"></span>`;
  }
  const svg = document.createElement("svg");
  intro.innerHTML = HTML;
  root.appendChild(intro);

  setTimeout(() => {
    root.removeChild(intro);
    root.style.background = "none";
    innerClass();
  }, 3400);
};
intro();
// innerClass();
// <svg width="100vw" height="100vh" id="svg"></svg>
//background
$(document).ready(function () {
  var array = [];
  var heightWindow = $(window).height();
  var widthWindow = $(window).width();

  for (var i = 0; i < 60; i++) {
    array.push({
      top: Math.floor(Math.random() * heightWindow),
      left: Math.floor(Math.random() * widthWindow),
      id: i,
    });
  }
  array.forEach(function (value) {
    var newEllipse = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "ellipse"
    );
    newEllipse.setAttribute("class", "ellipse");
    newEllipse.setAttribute("id", "ellipse_" + value.id);
    newEllipse.setAttribute("cx", value.left);
    newEllipse.setAttribute("cy", value.top);
    newEllipse.setAttribute("rx", 5);
    newEllipse.setAttribute("ry", 5);

    $("#svg").append(newEllipse);
  });

  $(window).mousemove(function (event) {
    $("line").remove();
    array
      .filter(
        (val) =>
          Math.abs(val.top - event.pageY) <= 350 &&
          Math.abs(val.left - event.pageX) <= 350
      )
      .forEach(function (value) {
        var newLine = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        );
        newLine.setAttribute("class", "line");
        newLine.setAttribute("id", "line_" + value.id);
        newLine.setAttribute("x1", value.left);
        newLine.setAttribute("y1", value.top);
        newLine.setAttribute("x2", event.pageX);
        newLine.setAttribute("y2", event.pageY);
        newLine.setAttribute("stroke", "black");
        $("#svg").append(newLine);
      });
  });
  $(window).mouseout(function (event) {
    $("line").remove();
  });
  setInterval(function () {
    // Math.random()*(max - min ) + min
    array.forEach(function (value, key) {
      var top =
        Math.random() * (value.top + 2 - (value.top - 2)) + (value.top - 2);
      var left =
        Math.random() * (value.left + 2 - (value.left - 2)) + (value.left - 2);
      array[key].top = top;
      array[key].left = left;

      var $ellipse = $("#ellipse_" + value.id);
      $ellipse.animate(
        { dot: 0 },
        {
          step: () => {
            $ellipse.attr("cx", left), $ellipse.attr("cy", top);
          },
          duration: 1,
        }
      );

      if ($("#line_" + value.id).lengh) {
        var $line = $("#line_" + value.id);
        $line.animate(
          { dot: 0 },
          {
            step: () => {
              $line.attr("x1", left), $line.attr("y1", top);
            },
            duration: 1,
          }
        );
      }
    });
  }, 500);
});

//

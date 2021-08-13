function getBannerTemplate() {
    var template = document.querySelector("#banner-template");
    return template.innerHTML;
  }
  function createFragment(htmlStr) {
    var frag = document.createDocumentFragment(),
            temp = document.createElement('div');
    temp.innerHTML = htmlStr
    while (temp.firstChild) {
      frag.appendChild(temp.firstChild);
    }
    return frag;
  }
  function injectTemplate(template) {
    document.body.appendChild(createFragment(template));
  }
  var simpleAlert = document.querySelector(".simple-alert");
  simpleAlert.addEventListener("click", function (e) {
    e.preventDefault();
    injectTemplate(getBannerTemplate());
    var btnClose = document.querySelector(".banner-close");
    btnClose.addEventListener("click", function (closeEvt) {
      var banner = document.querySelector(".banner");
      banner.parentNode.removeChild(banner);
    });
  });
  for ( let i = 0; i < 1; i++ ) {
    document.getElementById("ClickMe").click();
  }

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("html").addEventListener("click", function () {
    header.style.color = "blue";
    setTimeout(function () {
      header.style.color = "red";
    }, 1000);
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  var nums = document.querySelectorAll(".num");
  nums.forEach(function (el) {
    var target = parseInt(el.getAttribute("data-target"), 10);
    var count = 0;
    var step = Math.max(1, Math.floor(target / 40));
    var t = setInterval(function () {
      count += step;
      if (count >= target) { count = target; clearInterval(t); }
      el.textContent = count;
    }, 30);
  });
  document.querySelectorAll(a[href^=#]).forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var id = a.getAttribute("href").slice(1);
      var el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });
  });
});

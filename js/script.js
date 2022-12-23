function openNav() {
  document.getElementById("exit-menu").style.display = "block";
  document.getElementById("menu").style.display = "none";
  document.getElementsByTagName("body")[0].dataset.open = "true";
}

function closeNav() {
  document.getElementById("exit-menu").style.display = "none";
  document.getElementById("menu").style.display = "block";
  document.getElementsByTagName("body")[0].dataset.open = "false";
}

// $(document).ready(function() {
//   if (!window.matchMedia)
//       return;

//   var current = $('head > link[rel="icon"][media]');
//   $.each(current, function(i, icon) {
//       var match = window.matchMedia(icon.media);
//       function swap() {
//           if (match.matches) {
//               current.remove();
//               current = $(icon).appendTo('head');
//           }
//       }
//       match.addListener(swap);
//       swap();
//   });
// });

// Dynamic Copyright Year

document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footerText = document.querySelector("#footer-text");
  footerText.innerText = `© ${year} Turun normaalikoulun lukio. All rights reserved.`;
});

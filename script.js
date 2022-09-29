function irArriba() {
  window.addEventListener("scroll", () => {
    let scroll = document.documentElement.scrollTop;
    let botonArriba = document.getElementById("buttonUp");

    if (scroll > 800) {
      botonArriba.style.right = 20 + "px";
    } else {
      botonArriba.style.right = -100 + "px";
    }
  });
}
irArriba();

// $(document).ready(function () {
//   $(".ir-arriba").click(function () {
//     $("body, html").animate(
//       {
//         scrollTop: "0px",
//       },
//       300
//     );
//   });

//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 0) {
//       $(".ir-arriba").slideDown(300);
//     } else {
//       $(".ir-arriba").slideUp(300);
//     }
//   });
// });

$(document).ready(function() {
    var o = $(".btn-add-class"),
        t = $(".btn-attr"),
        e = $(".btn-remove-class"),
        n = $(".btn-remove-attr"),
        l = $(".festival-asalto"),
        g = $(".tornasol");
    $(o).click(function() { $(l).addClass("sepia") }), $(e).click(function() { $(l).removeClass("sepia") }), $(t).click(function() { $(g).attr("class", "saturate") }), $(n).click(function() { $(g).attr("class", "") }) });
var sol = document.getElementById("logo"),
    sol = document.getElementById("sol"),
    logoDimensiones = logo.getBoundingClientRect(),
    alturaLogo = logoDimensiones.height,
    anchuraLogo = logoDimensiones.width,
    topLogo = logoDimensiones.top,
    rightLogo = logoDimensiones.right,
    bottomLogo = logoDimensiones.bottom,
    leftLogo = logoDimensiones.left;
document.getElementById("logoAltura").innerHTML = "Altura: " + alturaLogo, document.getElementById("logoAnchura").innerHTML = "Anchura: " + anchuraLogo, document.getElementById("logoTop").innerHTML = "Top: " + topLogo, document.getElementById("logoRight").innerHTML = "Right: " + rightLogo, document.getElementById("logoBottom").innerHTML = "Bottom: " + bottomLogo, document.getElementById("logoLeft").innerHTML = "Left: " + leftLogo;

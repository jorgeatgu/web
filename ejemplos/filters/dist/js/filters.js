$(document).ready(function(){function t(t,n){$(t).click(function(){$("img").removeClass().addClass(n)})}function n(){$(O).click(function(){var t=document.getElementsByTagName("body"),n=s[~~(Math.random()*s.length)];$(t).each(function(){$(t).addClass(n),setTimeout(function(){$(t).removeClass(n)},3500)})})}function e(){$(m).animate({left:"-100%"},400),$("img").removeClass()}function a(){$(m).animate({left:"0"},400).addClass("panel-bottom").css("height",u)}function o(){$("#holder").css("height",b)}function i(t,n){$(t).click(function(){$(n).removeClass("hide")})}var s=["saturate","saturotate","rotamatrix","tablen","dishue","matrix","matrix-dos","huerotate","luminance","discrete","discrete-dos","table","table-dos","identity","linear","gamma","turbulence","sepia","turbu-map","fematrix-uno","fematrix-dos","map-uno","map-dos","blur-uno","blur-dos","morpho-uno","morpho-dos","multitable","begamma","bulence"],u=$(".section-buttons").outerHeight()+15,l=$("picture").find("img"),b=$(l).outerHeight(),r=$(".section-buttons").find("button"),c=$("#panel-btn-close"),m=$(".panel"),d=($(".panel-info"),$(".panel-input")),p=$(".btn-saturate"),f=$(".btn-saturotate"),h=$(".btn-rotamatrix"),g=$(".btn-tablen"),C=$(".btn-multitable"),x=$(".btn-dishue"),y=$(".btn-matrix"),v=$(".btn-matrix-dos"),k=$(".btn-hueRotate"),T=$(".btn-luminance"),B=$(".btn-discrete"),E=$(".btn-discrete-dos"),H=$(".btn-table"),N=$(".btn-table-dos"),w=$(".btn-identity"),M=$(".btn-linear"),R=$(".btn-gamma"),j=$(".btn-turbulence"),q=$(".btn-sepia"),z=$(".btn-turbu-map"),A=$(".btn-con-matrix-uno"),D=$(".btn-con-matrix-dos"),F=$(".btn-map-uno"),G=$(".btn-map-dos"),I=$(".btn-blur-uno"),J=$(".btn-blur-dos"),K=$(".btn-morpho-uno"),L=$(".btn-morpho-dos"),O=$(".btn-poison"),P=$(".btn-begamma"),Q=$(".btn-bulence"),S=$("#panel-saturate"),U=$("#panel-huerotate"),V=$("#panel-luminance"),W=$("#panel-linear"),X=$("#panel-turbulence"),Y=$("#panel-gamma"),Z=$("#panel-blur"),_=$("#panel-morpho"),tt=$("#panel-morpho-dilate"),nt=$("#panel-saturotate"),et=$("#panel-discrete"),at=new Clipboard(".panel-btn-copy");at.on("success",function(t){function n(){$(e).text("Copied!").addClass("success"),setTimeout(function(){$(e).removeClass("success").text("Copy to clipboard")},1e3)}var e=document.getElementsByClassName("panel-btn-copy");setTimeout(n,300)}),at.on("error",function(t){}),$(r).click(function(){"undefined"!=typeof $(this).data("panel")&&a()}),$(c).click(function(){e(),$(d).addClass("hide")}),o(),n(),t(p,s[0]),t(f,s[1]),t(h,s[2]),t(g,s[3]),t(x,s[4]),t(y,s[5]),t(v,s[6]),t(k,s[7]),t(T,s[8]),t(B,s[9]),t(E,s[10]),t(H,s[11]),t(N,s[12]),t(w,s[13]),t(M,s[14]),t(R,s[15]),t(j,s[16]),t(q,s[17]),t(z,s[18]),t(A,s[19]),t(D,s[20]),t(F,s[21]),t(G,s[22]),t(I,s[23]),t(J,s[24]),t(K,s[25]),t(L,s[26]),t(C,s[27]),t(P,s[28]),t(Q,s[29]),i(p,S),i(k,U),i(T,V),i(M,W),i(j,X),i(R,Y),i(I,Z),i(J,Z),i(K,_),i(L,tt),i(f,nt),i(B,et)});
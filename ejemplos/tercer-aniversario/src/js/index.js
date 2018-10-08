//CHART
function visitasTotales() {
	$(function() {
		Highcharts.setOptions({
			colors: ['rgba(255, 133, 0,.5)'],
			chart: {
				style: {
					fontFamily: 'serif'
				}
			}
		});

		$('#container').highcharts({
			chart: {
				type: 'areaspline'
			},
			title: {
				text: 'Visitas al blog'
			},
			xAxis: {
				categories: ["Enero 13", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", "Enero 14", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", "Enero 15", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", "Enero 16", "Febrero", "Marzo"]
			},
			yAxis: {
				title: {
					text: 'Visitas'
				}
			},
			tooltip: {
				pointFormat: '<b>{point.y:,.0f}</b> visitas'
			},
			series: [{
				name: '2013-2016',
				data: [0, 0, 28, 253, 535, 322, 422, 391, 404, 401, 436, 548, 1665, 1327, 1436, 1251, 1518, 1370, 1778, 1448, 1412, 1739, 1520, 1459, 1498, 1385, 1516, 1699, 1945, 1725, 1679, 1454, 2007, 2250, 2201, 1859, 2143, 2741, 3071]
			}],
			plotOptions: {
				series: {
					animation: false
				}
			},
		});
	});
}


//COUNTUP
var options = {  
	useEasing: true,
	  useGrouping: true,
	  separator: '.',
	  decimal: ',',
	  prefix: '',
	  suffix: ''
};
var numeroArticulos = new CountUp("numero-articulos", 0, 173, 0, 5.5, options);
var numeroPalabras = new CountUp("numero-palabras", 0, 66162, 0, 7.5, options);
var numeroFalta = new CountUp("numero-falta", 0, 29774, 0, 7.5, options);
numeroArticulos.start(numeroPalabras.start(numeroFalta.start));

//Animando las barras de los articulos mas visitados con mojs

function animacionBarras() {
	var barra = document.querySelector('#v-articulo-uno');
	var barra2 = document.querySelector('#v-articulo-dos');
	var barra3 = document.querySelector('#v-articulo-tres');
	var barra4 = document.querySelector('#v-articulo-cuatro');
	var barra5 = document.querySelector('#v-articulo-cinco');
	var extremeInOutEasing = mojs.easing.path('M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0');
	squashCurve = mojs.easing.path('M0,100.004963 C0,100.004963 25,147.596355 25,100.004961 C25,70.7741867 32.2461944,85.3230873 58.484375,94.8579105 C68.9280825,98.6531013 83.2611815,99.9999999 100,100');


	new mojs.Tween({
		delay: 500,
		duration: 1500,
		onUpdate: function(progress) {
			var bounceProgress = extremeInOutEasing(progress);
			squashProgress = squashCurve(progress),
				scaleX = 1 - 10 * squashProgress,
				scaleY = 1 + 10 * squashProgress;
			barra.style.width = '64.96' * bounceProgress + '%';
			barra.style.transform =
				'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')';
		}
	}).run();

	new mojs.Tween({
		delay: 500,
		duration: 1500,
		onUpdate: function(progress) {
			var bounceProgress = extremeInOutEasing(progress);
			squashProgress = squashCurve(progress),
				scaleX = 1 - 6 * squashProgress,
				scaleY = 1 + 6 * squashProgress;
			barra2.style.width = '52.90' * bounceProgress + '%';
			barra2.style.transform =
				'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')';
		}
	}).run();

	new mojs.Tween({
		delay: 500,
		duration: 1500,
		onUpdate: function(progress) {
			var bounceProgress = extremeInOutEasing(progress);
			squashProgress = squashCurve(progress),
				scaleX = 1 - 4 * squashProgress,
				scaleY = 1 + 4 * squashProgress;
			barra3.style.width = '35.32' * bounceProgress + '%';
			barra3.style.transform =
				'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')';
		}
	}).run();

	new mojs.Tween({
		delay: 500,
		duration: 1500,
		onUpdate: function(progress) {
			var bounceProgress = extremeInOutEasing(progress);
			squashProgress = squashCurve(progress),
				scaleX = 1 - 5.5 * squashProgress,
				scaleY = 1 + 5.5 * squashProgress;
			barra4.style.width = '25.02' * bounceProgress + '%';
			barra4.style.transform =
				'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')';
		}
	}).run();

	new mojs.Tween({
		delay: 500,
		duration: 1500,
		onUpdate: function(progress) {
			var bounceProgress = extremeInOutEasing(progress);
			squashProgress = squashCurve(progress),
				scaleX = 1 - 3 * squashProgress,
				scaleY = 1 + 3 * squashProgress;
			barra5.style.width = '21.74' * bounceProgress + '%';
			barra5.style.transform =
				'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')';
		}
	}).run();
}

//Animando la barra de los navegadores

function barrasNavegadores() {
	var chrometrece = document.querySelector('#chrome-trece');
	var chromecatorce = document.querySelector('#chrome-catorce');
	var chromequince = document.querySelector('#chrome-quince');

	var firefoxtrece = document.querySelector('#firefox-trece');
	var firefoxcatorce = document.querySelector('#firefox-catorce');
	var firefoxquince = document.querySelector('#firefox-quince');

	var safaritrece = document.querySelector('#safari-trece');
	var safaricatorce = document.querySelector('#safari-catorce');
	var safariquince = document.querySelector('#safari-quince');

	var ietrece = document.querySelector('#ie-trece');
	var iecatorce = document.querySelector('#ie-catorce');
	var iequince = document.querySelector('#ie-quince');


	var easingBrowers = mojs.easing.path('M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0');


	new mojs.Tween({
		delay: 500,
		duration: 2500,
		onUpdate: function(progress) {
			var bounceProgress = easingBrowers(progress);
			chrometrece.style.height = '54.85' * bounceProgress + '%';
		}
	}).run();

	new mojs.Tween({
		delay: 500,
		duration: 2500,
		onUpdate: function(progress) {
			var bounceProgress = easingBrowers(progress);
			chromecatorce.style.height = '58.83' * bounceProgress + '%';
		}
	}).run();

	new mojs.Tween({
		delay: 500,
		duration: 2500,
		onUpdate: function(progress) {
			var bounceProgress = easingBrowers(progress);
			chromequince.style.height = '67.82' * bounceProgress + '%';
		}
	}).run();


	new mojs.Tween({
		delay: 500,
		duration: 2500,
		onUpdate: function(progress) {
			var bounceProgress = easingBrowers(progress);
			firefoxtrece.style.height = '22.96' * bounceProgress + '%';
		}
	}).run();

	new mojs.Tween({
		delay: 500,
		duration: 2500,
		onUpdate: function(progress) {
			var bounceProgress = easingBrowers(progress);
			firefoxcatorce.style.height = '25.49' * bounceProgress + '%';
		}
	}).run();

	new mojs.Tween({
		delay: 500,
		duration: 2500,
		onUpdate: function(progress) {
			var bounceProgress = easingBrowers(progress);
			firefoxquince.style.height = '22.01' * bounceProgress + '%';
		}
	}).run();

	new mojs.Tween({
		delay: 500,
		duration: 2500,
		onUpdate: function(progress) {
			var bounceProgress = easingBrowers(progress);
			safaritrece.style.height = '9.99' * bounceProgress + '%';
		}
	}).run();

	new mojs.Tween({
		delay: 500,
		duration: 2500,
		onUpdate: function(progress) {
			var bounceProgress = easingBrowers(progress);
			safaricatorce.style.height = '8.42' * bounceProgress + '%';
		}
	}).run();

	new mojs.Tween({
		delay: 500,
		duration: 2500,
		onUpdate: function(progress) {
			var bounceProgress = easingBrowers(progress);
			safariquince.style.height = '5.63' * bounceProgress + '%';
		}
	}).run();

	new mojs.Tween({
		delay: 500,
		duration: 2500,
		onUpdate: function(progress) {
			var bounceProgress = easingBrowers(progress);
			ietrece.style.height = '3.27' * bounceProgress + '%';
		}
	}).run();

	new mojs.Tween({
		delay: 500,
		duration: 2500,
		onUpdate: function(progress) {
			var bounceProgress = easingBrowers(progress);
			iecatorce.style.height = '2.30' * bounceProgress + '%';
		}
	}).run();

	new mojs.Tween({
		delay: 500,
		duration: 2500,
		onUpdate: function(progress) {
			var bounceProgress = easingBrowers(progress);
			iequince.style.height = '1.77' * bounceProgress + '%';
		}
	}).run();
}

function barraOS() {

	var win = document.querySelector('#gg');
	var osx = document.querySelector('#osx')
	var lnx = document.querySelector('#lx');
	var resto = document.querySelector('#resto');

	var easingOS = mojs.easing.path('M0,100 C6.50461245,96.8525391 12.6278439,88.3497543 16.6678547,0 C16.6678547,-1.79459817 31.6478577,115.871587 44.1008572,0 C44.1008572,-0.762447191 54.8688736,57.613472 63.0182497,0 C63.0182497,-0.96434046 70.1500549,29.0348701 76.4643231,0 C76.4643231,0 81.9085007,16.5050125 85.8902733,0 C85.8902733,-0.762447191 89.4362183,8.93311024 92.132216,0 C92.132216,-0.156767385 95.0157166,4.59766248 96.918051,0 C96.918051,-0.156767385 98.7040751,1.93815588 100,0');

	new mojs.Tween({
		delay: 500,
		duration: 2500,
		onUpdate: function(progress) {
			var bounceProgress = easingOS(progress);
			win.style.width = '60.80' * bounceProgress + '%';
		}
	}).run();

	new mojs.Tween({
		delay: 500,
		duration: 2500,
		onUpdate: function(progress) {
			var bounceProgress = easingOS(progress);
			osx.style.width = '23.91' * bounceProgress + '%';
		}
	}).run();

	new mojs.Tween({
		delay: 500,
		duration: 2500,
		onUpdate: function(progress) {
			var bounceProgress = easingOS(progress);
			lnx.style.width = '6.83' * bounceProgress + '%';
		}
	}).run();

	new mojs.Tween({
		delay: 500,
		duration: 2500,
		onUpdate: function(progress) {
			var bounceProgress = easingOS(progress);
			resto.style.width = '8.46' * bounceProgress + '%';
		}
	}).run();
}

//fullpage

$(document).ready(function() {
	$('#fullpage').fullpage({
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		verticalCentered: true,
		sectionsColor: ['#8C288A', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0'],
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

		afterLoad: function(anchorLink, index) {
			var loadedSection = $(this);

			if (index == 2) {
				visitasTotales();
			}

			if (index == 3) {
				animacionBarras();
			}

			if (index == 4) {
				barrasNavegadores();
			}

			if (index == 5) {
				barraOS();
			}
		}
	});
});
function cp(){d3.json("js/cp.geojson",function(t,a){!function(t){mapboxgl.accessToken="pk.eyJ1Ijoiam9yZ2VhdGd1IiwiYSI6ImNqdm5vOXB1NzFreXczem1nanptb3Q3bTUifQ.ffla2sla83t7DMKiwyLIMQ";var a=new mapboxgl.Map({container:"map",style:"mapbox://styles/jorgeatgu/cjf1lzmig08ry2sqqyvml8ycl",center:[-.850431,41.651729],zoom:11.5,interactive:!1});a.addControl(new mapboxgl.Navigation);var o=a.getCanvasContainer(),n=d3.select(o).append("svg"),e=(n.append("g").attr("class","distritos"),d3.geoTransform({point:function(t,o){var n=a.project(new mapboxgl.LngLat(t,o));this.stream.point(n.x,n.y)}})),s=d3.geoPath().projection(e),i=d3.select("#map").append("div").attr("class","tooltip tooltip-pp"),p=n.selectAll("path").data(t.features).enter().append("path").attr("class","distritos-renta").on("mouseover",function(t){i.style("display","block").html('<h4 class="tooltip-titulo">'+t.properties.NOMBRE+'</h4><div class="container-tooltip"><span class="renta-text"> RENTA MEDIA DISPONIBLE: <span class="renta-numero">'+t.properties.RENTA+"€</span></span>").transition().duration(200)}).transition().duration(200);a.scrollZoom.disable(),p.attr("d",s)}(a)})}cp();
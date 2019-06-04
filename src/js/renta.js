
function cp() {

    d3.json("js/cp.geojson", function(err, data) {
        mapDraw(data);
    });

    function mapDraw(geojson) {
        mapboxgl.accessToken =
            "pk.eyJ1Ijoiam9yZ2VhdGd1IiwiYSI6ImNqdm5vOXB1NzFreXczem1nanptb3Q3bTUifQ.ffla2sla83t7DMKiwyLIMQ";
        var map = new mapboxgl.Map({
            container: "map", // container id
            style: "mapbox://styles/jorgeatgu/cjf1lzmig08ry2sqqyvml8ycl", //hosted style id
            center: [-0.850431, 41.651729], // starting position
            zoom: 11.5,
            interactive: false
        });

        map.addControl(new mapboxgl.Navigation());


        var container = map.getCanvasContainer();
        var svg = d3.select(container).append("svg");
        var distritos = svg.append("g").attr("class", "distritos");

        var transform = d3.geoTransform({ point: projectPoint });
        var path = d3.geoPath().projection(transform);

        var tooltip = d3
            .select("#map")
            .append("div")
            .attr("class", "tooltip tooltip-pp");

        var featureElement = svg
            .selectAll("path")
            .data(geojson.features)
            .enter()
            .append("path")
            .attr("class", "distritos-renta")
            .on("mouseover", showTooltip)
            .transition()
            .duration(200);

        function update() {
            featureElement.attr("d", path);
        }

        function showTooltip(geoJson) {
            // moveTooltip();
            tooltip
                .style("display", "block")
                .html(
                    '<h4 class="tooltip-titulo">' +
                        geoJson.properties.NOMBRE +
                        '</h4>' +
                        '<div class="container-tooltip"><span class="renta-text"> RENTA MEDIA DISPONIBLE: <span class="renta-numero">' + geoJson.properties.RENTA + '€</span></span>'
                )
                .transition()
                .duration(200);
        }
        map.scrollZoom.disable();

        update();

        function projectPoint(lon, lat) {
            var point = map.project(new mapboxgl.LngLat(lon, lat));
            this.stream.point(point.x, point.y);

        }
    }

}

cp();

<template>
    <div class="map-wrap">
        <div id="map" style="height: 600px; width: 800px"></div>
    </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import mapboxDraw from 'mapbox-gl-draw';
import 'mapbox-gl-draw/dist/mapbox-gl-draw.css'

export default {
    mounted() {
        console.log('mapbox');
        this.init()
    },
    methods: {
        init() {
            mapboxgl.accessToken = 'pk.eyJ1Ijoid3V5dXRpbmc4MTYiLCJhIjoiY2tybmk4bTh5MDAxMTJvbzFpaHhvYTFybCJ9.w373FQkGWfha8sc6KcuNrg';
            const map = new mapboxgl.Map({
                            container: 'map', // container ID
                            style: 'mapbox://styles/mapbox/streets-v11', // style URL
                            center: [-74.5, 40], // starting position [lng, lat]
                            zoom: 8 // starting zoom
                        });
            let Draw = new mapboxDraw({
                displayControlsDefault: false,
                // Select which mapbox-gl-draw control buttons to add to the map.
                controls: {
                polygon: true,
                trash: true
                },
                // Set mapbox-gl-draw to draw by default.
                // The user does not have to click the polygon control button first.
                defaultMode: 'draw_polygon'
            })

            map.addControl(Draw);
            map.on('load', function() {
            // ALL YOUR APPLICATION CODE
            });
            console.log('class', Draw);
        }
    }
}

</script>

<style>

.mapbox-gl-draw_ctrl-draw-btn {
    width: 40px;
    height: 20px;
}

</style>
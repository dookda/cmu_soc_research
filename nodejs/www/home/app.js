const geoUrl = "http://localhost:8080"

let map = L.map('map', {
    center: [18.80, 98.60],
    zoom: 8,
    scrollWheelZoom: true
});

var marker = "";
let geom = "";
let dataurl = "";

const mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    name: "base",
    maxZoom: 20,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1,
    zIndex: 0
});

const ghyb = L.tileLayer('https://{s}.google.com/vt/lyrs=y,m&x={x}&y={y}&z={z}', {
    name: "base",
    maxZoom: 21,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    zIndex: 0
});

const grod = L.tileLayer("https://{s}.google.com/vt/lyrs=r&x={x}&y={y}&z={z}", {
    name: "base",
    maxZoom: 21,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
    zIndex: 0
});

const gter = L.tileLayer('https://{s}.google.com/vt/lyrs=t,m&x={x}&y={y}&z={z}', {
    name: "base",
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    zIndex: 0
});

var cm_province = L.tileLayer.wms(geoUrl + "/geoserver/cm/wms?", {
    layers: 'cm:cm_province',
    format: 'image/png',
    transparent: true,
    name: "lyr",
});

var cm_amphoe = L.tileLayer.wms(geoUrl + "/geoserver/cm/wms?", {
    layers: 'cm:cm_amphoe',
    format: 'image/png',
    transparent: true,
    name: "lyr",
});

var cm_tambon = L.tileLayer.wms(geoUrl + "/geoserver/cm/wms?", {
    layers: 'cm:cm_tambon',
    format: 'image/png',
    transparent: true,
    name: "lyr",
});

var cm_forest_type = L.tileLayer.wms(geoUrl + "/geoserver/cm/wms?", {
    layers: 'cm:cm_forest_type',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    zIndex: 0
});

var cm_waterbody = L.tileLayer.wms(geoUrl + "/geoserver/cm/wms?", {
    layers: 'cm:cm_waterbody',
    format: 'image/png',
    transparent: true,
    name: "lyr",
});

var village_bound = L.tileLayer.wms(geoUrl + "/geoserver/cm/wms?", {
    layers: 'cm:village_bound',
    format: 'image/png',
    transparent: true,
    name: "lyr",
});

var planuse = L.tileLayer.wms(geoUrl + "/geoserver/cm/wms?", {
    layers: 'cm:planuse',
    format: 'image/png',
    transparent: true,
    name: "lyr",
});

var cm_village = L.tileLayer.wms(geoUrl + "/geoserver/cm/wms?", {
    layers: 'cm:cm_village',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    // CQL_FILTER: 'pro_code=53'
});

// var baseMap = {
//     "OSM": osm,
//     "แผนที่ถนน": grod.addTo(map),
//     "แผนที่ภาพถ่าย": ghyb
// }

// var overlayMap = {
//     "ขอบตำบล": tam.addTo(map),
//     "ขอบอำเภอ": amp.addTo(map),
//     "ขอบเขตจังหวัด": pro.addTo(map),
// }

// L.control.layers(baseMap, overlayMap).addTo(map);

let base = {
    mapbox: mapbox.addTo(map),
    ghyb: ghyb,
    grod: grod,
    gter: gter
}

$("input[name='basemap']").change(async (r) => {
    await map.eachLayer(i => {
        // console.log(i);
        if (i.options.name == "base") {
            map.removeLayer(i)
        }
    })

    let basemap = $("input[name='basemap']:checked").val();
    base[`${basemap}`].addTo(map);
})

let lyr = {
    cm_waterbody,
    cm_forest_type,
    cm_tambon,
    cm_amphoe,
    cm_province,
    cm_village,
    village_bound,
    planuse,
}

// set default layer
cm_province.addTo(map);
$("#lyr_prov").prop("checked", true);

cm_amphoe.addTo(map);
$("#lyr_amp").prop("checked", true);

$("input[type=checkbox]").change(async () => {
    await map.eachLayer(i => {
        if (i.options.name == "lyr") {
            map.removeLayer(i)
        }
    })

    let chk = [];
    await $('input[type=checkbox]:checked').each(function () {
        chk.push($(this).val());
    });
    // console.log(chk);
    chk.map(i => {
        if (lyr[`${i}`]) {
            lyr[`${i}`].addTo(map);
        }
    })
})

const legUrl = geoUrl + "/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&legend_options=fontName:Kanit&LAYER=";
$("#proLegend").attr("src", legUrl + "cm:cm_province&rule=Large");
$("#ampLegend").attr("src", legUrl + "cm:cm_amphoe&rule=Large");
$("#tamLegend").attr("src", legUrl + "cm:cm_tambon");
$("#village_boundLegend").attr("src", legUrl + "cm:village_bound");
$("#cm_waterbodyLegend").attr("src", legUrl + "cm:cm_waterbody");
$("#planuseLegend").attr("src", legUrl + "cm:planuse");
$("#villLegend").attr("src", legUrl + "cm:cm_village&rule=Large");
$("#cm_forest_typeLegend").attr("src", legUrl + "cm:cm_forest_type");
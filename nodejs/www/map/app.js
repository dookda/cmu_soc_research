
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

const layers = id.split(',');

console.log(layers);


let map = L.map('map', {
    // center: [18.80, 98.60],
    center: [18.560018266865583, 98.63156318664552],
    zoom: 13,
    scrollWheelZoom: true
});

var marker = "";
let geom = "";
let dataurl = "";

const mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG9va2RhIiwiYSI6ImNsZnh5bjA0OTBocGczbHBoeHBkbm11djMifQ.yyM10PR_m-hiHkXdznCEuQ', {
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

var cm_province = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_province',
    format: 'image/png',
    transparent: true,
    name: "lyr",
});

var cm_amphoe = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_amphoe',
    format: 'image/png',
    transparent: true,
    name: "lyr",
});

var cm_tambon = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_tambon',
    format: 'image/png',
    transparent: true,
    name: "lyr",
});

var cm_forest_type = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_forest_type',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    zIndex: 0
});

var cm_forest_use = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_forest_use',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    zIndex: 0
});

var cm_agriculture_zoning = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_agriculture_zoning',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    zIndex: 0
});

var cm_geology = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_geology',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    zIndex: 0
});


var cm_soil = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_soil',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    zIndex: 0
});

var cm_landuse_2543 = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_landuse_2543',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    zIndex: 0
});

var cm_landuse_2538 = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_landuse_2538',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    zIndex: 0
});

var cm_fault = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_fault',
    format: 'image/png',
    transparent: true,
    name: "lyr",
});

var cm_contour = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_contour',
    format: 'image/png',
    transparent: true,
    name: "lyr",
});

var cm_waterbody = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_waterbody',
    format: 'image/png',
    transparent: true,
    name: "lyr",
});

var village_bound = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:village_bound',
    format: 'image/png',
    transparent: true,
    name: "lyr",
});

var planuse = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:planuse',
    format: 'image/png',
    transparent: true,
    name: "lyr",
});

var cm_river = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_river',
    format: 'image/png',
    transparent: true,
    name: "lyr",
});

var cm_road = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_road',
    format: 'image/png',
    transparent: true,
    name: "lyr",
});

var cm_road = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_road',
    format: 'image/png',
    transparent: true,
    name: "lyr",
});

var mk_pipe = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:mk_pipe',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
});

var mk_plot_MK = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:mk_plot_MK',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    zIndex: 2
});

var mk_pour_point = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:mk_pour_point',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    zIndex: 2
});

var mk_road = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:mk_road',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
});

var mk_servicearea = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:mk_servicearea',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
});

var mk_travel = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:mk_travel',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
});

var mk_stream = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:mk_stream',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    zIndex: 2
});


var ma_boundary = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:ma_boundary',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
});

var ma_irrigation_line = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:ma_irrigation_line',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    zIndex: 2
});

var ma_plot_greenhouse = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:ma_plot_greenhouse',
    format: 'image/png',
    transparent: true,
    opacity: 0.6,
    maxZoom: 21,
    name: "lyr",
    zIndex: 2
});

var ma_servicearea = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:ma_servicearea',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    zIndex: 1
});

var ma_tank_point = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:ma_tank_point',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    zIndex: 2
});

var ma_trail = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:ma_trail',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    zIndex: 2
});

var ma_tree = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:ma_tree',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
});

var cm_village = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_village',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    // CQL_FILTER: 'pro_code=53'
});

let base = {
    mapbox: mapbox,
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

const legUrl = "/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&legend_options=fontName:Kanit;fontAntiAliasing:true;dpi:96&LAYER=";

const irr = [{
    name: "ถังเก็บน้ำ",
    layer_txt: "ma_tank_point",
    layer_var: ma_tank_point,
    legend: legUrl + "cm:ma_tank_point"
}, {
    name: "ทางน้ำ",
    layer_txt: "ma_irrigation_line",
    layer_var: ma_irrigation_line,
    legend: legUrl + "cm:ma_irrigation_line"
}, {
    name: "โรงเรือน",
    layer_txt: "ma_plot_greenhouse",
    layer_var: ma_plot_greenhouse,
    legend: legUrl + "cm:ma_plot_greenhouse"
}, {
    name: "พื้นที่บริการ",
    layer_txt: "ma_servicearea",
    layer_var: ma_servicearea,
    legend: legUrl + "cm:ma_servicearea"
}, {
    name: "ขอบเขตหมู่บ้าน",
    layer_txt: "ma_boundary",
    layer_var: ma_boundary,
    legend: legUrl + "cm:ma_boundary"
}]

const trv = [{
    name: "ทางเดิน",
    layer_txt: "ma_trail",
    layer_var: ma_trail,
    legend: legUrl + "cm:ma_trail"
}, {
    name: "ทางน้ำ",
    layer_txt: "ma_irrigation_line",
    layer_var: ma_irrigation_line,
    legend: legUrl + "cm:ma_irrigation_line"
}, {
    name: "ถนน",
    layer_txt: "cm_road",
    layer_var: cm_road,
    legend: legUrl + "cm:cm_road"
}, {
    name: "พื้นที่บริการ",
    layer_txt: "ma_servicearea",
    layer_var: ma_servicearea,
    legend: legUrl + "cm:ma_servicearea"
}, {
    name: "ขอบเขตหมู่บ้าน",
    layer_txt: "ma_boundary",
    layer_var: ma_boundary,
    legend: legUrl + "cm:ma_boundary"
}]

const listLayers = (layerOpt, div, layerGroup) => {
    document.getElementById("layerGroup").innerHTML = layerGroup;
    document.getElementById("lyrs").innerHTML = "";
    $("#lyr_prov").prop("checked", true);
    let lyrArr = [];
    layerOpt.map(i => {
        let chk = `<input type="checkbox" id="${i.layer_txt}" name="${i.layer_txt}" value="${i.layer_txt}">`;
        let lbl = `<label for="${i.layer_txt}">${i.name}</label>`;
        let leg = `<img src="${i.legend}" alt="">`;
        let div = `<div class="lyr">${chk} ${lbl}<br>${leg}</div>`;
        lyrArr.push(i.layer_var);
        $("#lyrs").append(div);
    })

    $("#" + div).prop("checked", true);
    $("#ma_boundary").prop("checked", true);

    changeOverlay(lyrArr);
    changeBasemap();
}

const changeBasemap = async (r) => {
    await map.eachLayer(i => {
        if (i.options.name == "base") {
            map.removeLayer(i)
        }
    })

    let basemap = $("input[name='basemap']:checked").val();
    base[`${basemap}`].addTo(map);
}

const changeOverlay = async (lyrArr) => {
    await map.eachLayer(i => {
        if (i.options.name == "lyr") {
            map.removeLayer(i)
        }
    })

    let chk = [];
    await $('input[type=checkbox]:checked').each(function () {
        chk.push($(this).val());
    });

    chk.forEach(cb => {
        lyrArr.forEach(lyr => {
            if (lyr.options.layers == `cm:${cb}`) {
                lyr.addTo(map);
            }
        })
    })

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

        chk.forEach(cb => {
            lyrArr.forEach(lyr => {
                if (lyr.options.layers == `cm:${cb}`) {
                    lyr.addTo(map);
                }
            })
        })
    })
}

listLayers(irr, "ghyb", "ระบบชลประทาน");
// ma_boundary.addTo(map)

$("#btn-irr").click(() => {
    listLayers(irr, "ghyb", "ระบบชลประทาน");
})

$("#btn-trv").click(() => {
    listLayers(trv, "gter", "เส้นทางศึกษาธรรมชาติ");
})

map.on("click", (e) => {
    console.log(e);
})

let map = L.map('map', {
    // center: [18.80, 98.60],
    center: [18.86099114104469, 98.82399559020998],
    zoom: 14,
    scrollWheelZoom: true
});

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
    iswms: true,
});

var cm_amphoe = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_amphoe',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    iswms: true,
});

var cm_tambon = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_tambon',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    iswms: true,
});

var cm_forest_type = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_forest_type',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    iswms: true,
    zIndex: 0
});

var cm_forest_use = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_forest_use',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    iswms: true,
    zIndex: 0
});

var cm_agriculture_zoning = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_agriculture_zoning',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    iswms: true,
    zIndex: 0
});

var cm_geology = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_geology',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    iswms: true,
    zIndex: 0
});


var cm_soil = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_soil',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    iswms: true,
    zIndex: 0
});

var cm_landuse_2543 = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_landuse_2543',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    iswms: true,
    zIndex: 0
});

var cm_landuse_2538 = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_landuse_2538',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    iswms: true,
    zIndex: 0
});

var cm_fault = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_fault',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    iswms: true,
});

var cm_contour = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_contour',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    iswms: true,
});

var cm_waterbody = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_waterbody',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    iswms: true,
});

var village_bound = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:village_bound',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    iswms: true,
});

var planuse = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:planuse',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    iswms: true,
});

var cm_river = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_river',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    iswms: true,
});

var cm_road = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_road',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    iswms: true,
});

var cm_road = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_road',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    iswms: true,
});

var mk_pipe = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:mk_pipe',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    iswms: true,
});

var mk_plot = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:mk_plot',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    iswms: true,
    zIndex: 2
});

var mk_pour_point = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:mk_pour_point',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    iswms: true,
    zIndex: 2
});

var mk_artesian_well = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:mk_artesian_well',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    iswms: true,
    zIndex: 2
});

var mk_road = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:mk_road',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    iswms: true,
});

var mk_boundary = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:mk_boundary',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    iswms: true,
});

var mk_servicearea = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:mk_servicearea',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    iswms: true,
});

var mk_watershed = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:mk_watershed',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    iswms: true,
});

var mk_travel = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:mk_travel',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    iswms: true,
});

var mk_stream = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:mk_stream',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    iswms: true,
    zIndex: 2
});


var ma_boundary = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:ma_boundary',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    iswms: true,
});

var ma_irrigation_line = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:ma_irrigation_line',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    iswms: true,
    zIndex: 2
});

var ma_plot_greenhouse = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:ma_plot_greenhouse',
    format: 'image/png',
    transparent: true,
    opacity: 0.6,
    maxZoom: 21,
    name: "lyr",
    iswms: true,
    zIndex: 2
});

var ma_servicearea = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:ma_servicearea',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    iswms: true,
    zIndex: 1
});

var ma_tank_point = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:ma_tank_point',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    iswms: true,
    zIndex: 2
});

var ma_trail = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:ma_trail',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    iswms: true,
    zIndex: 2
});

var ma_tree = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:ma_tree',
    format: 'image/png',
    transparent: true,
    maxZoom: 21,
    name: "lyr",
    iswms: true,
});

var cm_village = L.tileLayer.wms("/geoserver/cm/wms?", {
    layers: 'cm:cm_village',
    format: 'image/png',
    transparent: true,
    name: "lyr",
    iswms: true,
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
    name: "แหล่งน้ำ",
    layer_txt: "mk_pour_point",
    layer_var: mk_pour_point,
    legend: legUrl + "cm:mk_pour_point"
}, {
    name: "บ่อบาดาล",
    layer_txt: "mk_artesian_well",
    layer_var: mk_artesian_well,
    legend: legUrl + "cm:mk_artesian_well"
}, {
    name: "ท่อน้ำ",
    layer_txt: "mk_pipe",
    layer_var: mk_pipe,
    legend: legUrl + "cm:mk_pipe"
}, {
    name: "โรงเรือน",
    layer_txt: "mk_plot",
    layer_var: mk_plot,
    legend: legUrl + "cm:mk_plot"
}, {
    name: "พื้นที่บริการ",
    layer_txt: "mk_servicearea",
    layer_var: mk_servicearea,
    legend: legUrl + "cm:mk_servicearea"
}, {
    name: "ลุ่มน้ำ",
    layer_txt: "mk_watershed",
    layer_var: mk_watershed,
    legend: legUrl + "cm:mk_watershed"
}, {
    name: "ขอบเขตหมู่บ้าน",
    layer_txt: "mk_boundary",
    layer_var: mk_boundary,
    legend: legUrl + "cm:mk_boundary"
}]

const trv = [{
    name: "จุดท่องเที่ยว",
    layer_txt: "mk_travel",
    layer_var: mk_travel,
    legend: legUrl + "cm:mk_travel"
}, {
    name: "ทางน้ำ",
    layer_txt: "mk_stream",
    layer_var: mk_stream,
    legend: legUrl + "cm:mk_stream"
}, {
    name: "ถนน",
    layer_txt: "mk_road",
    layer_var: mk_road,
    legend: legUrl + "cm:mk_road"
}, {
    name: "พื้นที่บริการ",
    layer_txt: "mk_servicearea",
    layer_var: mk_servicearea,
    legend: legUrl + "cm:mk_servicearea"
}, {
    name: "ลุ่มน้ำ",
    layer_txt: "mk_watershed",
    layer_var: mk_watershed,
    legend: legUrl + "cm:mk_watershed"
}, {
    name: "ขอบเขตหมู่บ้าน",
    layer_txt: "mk_boundary",
    layer_var: mk_boundary,
    legend: legUrl + "cm:mk_boundary"
}]

let wmsLyr = [];
let getLayer = () => {
    wmsLyr = [];
    map.eachLayer(i => {
        if (i.options.iswms) {
            wmsLyr.push(i.options.layers);
        }
    })
}

const listLayers = (layerOpt, div, layerGroup) => {
    document.getElementById("layerGroup").innerHTML = layerGroup;
    document.getElementById("lyrs").innerHTML = "";
    // $("#lyr_prov").prop("checked", true);
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
    $("#mk_servicearea").prop("checked", true);

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

    getLayer();

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
        getLayer();
    })
}

listLayers(irr, "ghyb", "ระบบชลประทาน");

$("#btn-irr").click(() => {
    listLayers(irr, "ghyb", "ระบบชลประทาน");
})

$("#btn-trv").click(() => {
    listLayers(trv, "gter", "ท่องเที่ยว");
})

map.on("click", async (e) => {
    var pnt = await map.latLngToContainerPoint(e.latlng, map.getZoom());
    var size = await map.getSize();
    var bbox = await map.getBounds().toBBoxString();
    $("#showlat").text(e.latlng.lat)
    $("#showlng").text(e.latlng.lng)

    let lyrInfoUrl = "/geoserver/wms?SERVICE=WMS" +
        "&VERSION=1.1.1&REQUEST=GetFeatureInfo" +
        "&QUERY_LAYERS=" + wmsLyr +
        "&LAYERS=" + wmsLyr +
        "&Feature_count=" + wmsLyr.length +
        "&INFO_FORMAT=application/json" +
        "&X=" + Math.round(pnt.x) +
        "&Y=" + Math.round(pnt.y) +
        "&SRS=EPSG:4326" +
        "&WIDTH=" + size.x +
        "&HEIGHT=" + size.y +
        "&BBOX=" + bbox

    // console.log(lyrInfoUrl);

    axios.get(lyrInfoUrl).then(res => {
        if (res.data.features.length > 0) {
            var txt = "";
            var malyr = [...irr, ...trv];

            res.data.features.forEach(i => {
                let layer = i.id.split(".")
                let title

                malyr.forEach(j => {
                    if (j.layer_txt == layer[0]) {
                        title = j.name
                    }
                })
                txt += `<b>${title}</b>  ${i.properties.tb}<br>`;
            });

            L.popup()
                .setLatLng(e.latlng)
                .setContent(txt)
                .openOn(map);
        }
    }).catch(err => { })
});

let clearMap = async () => {
    console.log("clear");
    await map.eachLayer(i => {
        if (i.options.name == "query") {
            map.removeLayer(i)
        }
    })
}

let zoomMap = async (geomTxt) => {
    await map.eachLayer(i => {
        if (i.options.name == "query") {
            map.removeLayer(i)
        }
    })

    let geom = JSON.parse(geomTxt);
    // console.log(geom);

    if (geom.type == "Point") {
        L.circleMarker([geom.coordinates[1], geom.coordinates[0]], { radius: 8, name: 'query' }).addTo(map);
        map.setView([geom.coordinates[1], geom.coordinates[0]], 18);
    } else {
        // console.log(geom.coordinates[0][0]);
        let g = L.geoJSON(geom, { name: 'query' }).addTo(map);
        map.fitBounds(g.getBounds());
    }
}

var table = $('#table').DataTable();

const searchWfs = async () => {
    let text = $("#search").val();
    let layer = $("#select_layer").val();

    // $('#table').DataTable().de;
    $('#table').dataTable().fnDestroy();

    table = $('#table').DataTable({
        ajax: {
            type: "POST",
            url: `/api/get_feature`,
            data: { text, layer },
            dataSrc: 'data',
        },
        columns: [
            { data: 'tb' }, {
                data: null,
                render: function (data, type, row, meta) {
                    let mBtn = `<button class= "btn btn-success" onclick='zoomMap(${JSON.stringify(row.geom)})'><i class="fas fa-map-marker-alt"></i>&nbsp;ซูมไปยังตำแหน่งนี้</button>`;
                    let cBtn = `<button class= "btn btn-warning" onclick='clearMap()'><i class="fas fa-map-marker-alt"></i>&nbsp;ไม่แสดงบนแผนที่</button>`;
                    return `${mBtn} ${cBtn}`
                },
            }
        ],
        searching: false,
    });
}

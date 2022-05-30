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

let base = {
    mapbox: mapbox.addTo(map),
    ghyb: ghyb,
    grod: grod,
    gter: gter
}

var baseMap = {
    "แผนที่สีเทา (mapbox)": mapbox,
    "แผนที่ถนน": grod,
    "แผนที่ภาพถ่าย": ghyb.addTo(map),
    "แผนที่ภูมิประเทศ": gter
}

var overlayMap = {
    "ขอบเขตจังหวัด": cm_province,
    "ขอบเขตอำเภอ": cm_amphoe,
    "ขอบเขตตำบล": cm_tambon,
}

L.control.layers(baseMap, overlayMap).addTo(map);

let removeLayer = () => {
    map.eachLayer(i => {
        i.options.name == "p" ? map.removeLayer(i) : null;
    })
}

map.on('locationfound', function (e) {
    if (geom) {
        map.removeLayer(geom);
    }
    geom = L.marker(e.latlng, {
        draggable: false,
        name: 'p',

    }).addTo(map);

    setTimeout(() => {
        lc.stop()
    }, 500)

    document.getElementById('lat').innerHTML = "lat " + e.latlng.lat
    document.getElementById('lng').innerHTML = "lon " + e.latlng.lng
});

let lc = L.control.locate().addTo(map);
lc.start();

map.on('click', (e) => {
    if (geom) {
        map.removeLayer(geom);
    }
    // lc.stop();
    geom = L.marker(e.latlng, {
        draggable: false,
        name: 'p'
    }).addTo(map);
    document.getElementById('lat').innerHTML = "lat " + e.latlng.lat
    document.getElementById('lng').innerHTML = "lon " + e.latlng.lng
});

let handleFiles = () => {
    var filesToUploads = document.getElementById('imgfile').files;
    var file = filesToUploads[0];
    var reader = new FileReader();

    reader.onloadend = (e) => {
        let imageOriginal = reader.result;
        resizeImage(file);
        document.getElementById('preview').src = imageOriginal;
    }
    reader.readAsDataURL(file);
};

let input = document.getElementById('imgfile');
input.addEventListener('change', handleFiles);

let resizeImage = (file) => {
    var maxW = 600;
    var maxH = 600;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var img = document.createElement('img');
    var result = '';
    img.onload = function () {
        var iw = img.width;
        var ih = img.height;
        var scale = Math.min((maxW / iw), (maxH / ih));
        var iwScaled = iw * scale;
        var ihScaled = ih * scale;
        canvas.width = iwScaled;
        canvas.height = ihScaled;
        context.drawImage(img, 0, 0, iwScaled, ihScaled);
        result += canvas.toDataURL('image/jpeg', 0.5);
        dataurl = result;
        // document.getElementById('rez').src = that.imageResize;
    }
    img.src = URL.createObjectURL(file);
}

const modal = new bootstrap.Modal(document.getElementById('modal'), {
    keyboard: false,
})

let saveData = () => {

    if (!dataurl) {
        dataurl = '-';
    }

    const obj = {
        data: {
            // usrid: document.getElementById('usrid').value,
            placename: document.getElementById('placename').value,
            placedetail: document.getElementById('placedetail').value,

            // lat: document.getElementById('lat').value,
            // lng: document.getElementById('lng').value,
            img: dataurl ? dataurl : dataurl = "",
            geom: geom == "" ? "" : geom.toGeoJSON()
        }
    }
    console.log(obj);

    axios.post('/3000/api/survey_insert', obj).then((res) => {

        document.getElementById('progress').innerHTML = "กำลังอัพโหลดไฟล์...."
        modal.show();
        if (res.data.data == "success") {
            document.getElementById('progress').innerHTML = "เพิ่มข้อมูลสำเร็จ"
            setTimeout(() => {
                modal.hide()
                document.getElementById('placename').value = "";
                document.getElementById('placedetail').value = "";
                document.getElementById('preview').src = "";
                document.getElementById('imgfile').value = "";
            }, 2000);
        }
    })
};


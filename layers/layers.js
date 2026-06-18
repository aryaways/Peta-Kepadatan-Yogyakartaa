var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KEPADATANPENDUDUKKOTAYOGYAKARTA_1 = new ol.format.GeoJSON();
var features_KEPADATANPENDUDUKKOTAYOGYAKARTA_1 = format_KEPADATANPENDUDUKKOTAYOGYAKARTA_1.readFeatures(json_KEPADATANPENDUDUKKOTAYOGYAKARTA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KEPADATANPENDUDUKKOTAYOGYAKARTA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KEPADATANPENDUDUKKOTAYOGYAKARTA_1.addFeatures(features_KEPADATANPENDUDUKKOTAYOGYAKARTA_1);
var lyr_KEPADATANPENDUDUKKOTAYOGYAKARTA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KEPADATANPENDUDUKKOTAYOGYAKARTA_1, 
                style: style_KEPADATANPENDUDUKKOTAYOGYAKARTA_1,
                popuplayertitle: 'KEPADATAN PENDUDUK KOTA YOGYAKARTA',
                interactive: true,
    title: 'KEPADATAN PENDUDUK KOTA YOGYAKARTA<br />\
    <img src="styles/legend/KEPADATANPENDUDUKKOTAYOGYAKARTA_1_0.png" /> Rendah (8-12 per km2)<br />\
    <img src="styles/legend/KEPADATANPENDUDUKKOTAYOGYAKARTA_1_1.png" /> Sedang (12-14 per km2)<br />\
    <img src="styles/legend/KEPADATANPENDUDUKKOTAYOGYAKARTA_1_2.png" /> Tinggi (14-18 per km2)<br />' });
var format_jogja_tolines_2 = new ol.format.GeoJSON();
var features_jogja_tolines_2 = format_jogja_tolines_2.readFeatures(json_jogja_tolines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jogja_tolines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jogja_tolines_2.addFeatures(features_jogja_tolines_2);
var lyr_jogja_tolines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jogja_tolines_2, 
                style: style_jogja_tolines_2,
                popuplayertitle: 'jogja_tolines',
                interactive: true,
                title: '<img src="styles/legend/jogja_tolines_2.png" /> jogja_tolines'
            });
var format_jogja_centeroids_3 = new ol.format.GeoJSON();
var features_jogja_centeroids_3 = format_jogja_centeroids_3.readFeatures(json_jogja_centeroids_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jogja_centeroids_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jogja_centeroids_3.addFeatures(features_jogja_centeroids_3);
var lyr_jogja_centeroids_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jogja_centeroids_3, 
                style: style_jogja_centeroids_3,
                popuplayertitle: 'jogja_centeroids',
                interactive: true,
                title: '<img src="styles/legend/jogja_centeroids_3.png" /> jogja_centeroids'
            });

lyr_OSMStandard_0.setVisible(true);lyr_KEPADATANPENDUDUKKOTAYOGYAKARTA_1.setVisible(true);lyr_jogja_tolines_2.setVisible(true);lyr_jogja_centeroids_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KEPADATANPENDUDUKKOTAYOGYAKARTA_1,lyr_jogja_tolines_2,lyr_jogja_centeroids_3];
lyr_KEPADATANPENDUDUKKOTAYOGYAKARTA_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'Nama Kecamatan', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'join_No': 'join_No', 'join_Luas': 'Luas Wilayah (ha)', 'join_Pendu': 'Jumlah Penduduk (ribu)', 'join_Kepad': 'Jumlah Kepadatan (ribu per km2)', 'join_Banji': 'join_Banji', 'join_Cuaca': 'join_Cuaca', 'join_Erups': 'join_Erups', 'join_Gelom': 'join_Gelom', 'join_Gel_1': 'join_Gel_1', 'join_Gempa': 'join_Gempa', 'join_Kebak': 'join_Kebak', 'join_Keker': 'join_Keker', 'join_Tanah': 'join_Tanah', });
lyr_jogja_tolines_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'Nama Kecamatan', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'join_No': 'join_No', 'join_Luas': 'Luas Wilayah (ha)', 'join_Pendu': 'Jumlah Penduduk (ribu)', 'join_Kepad': 'Jumlah Kepadatan (ribu per km2)', 'join_Banji': 'join_Banji', 'join_Cuaca': 'join_Cuaca', 'join_Erups': 'join_Erups', 'join_Gelom': 'join_Gelom', 'join_Gel_1': 'join_Gel_1', 'join_Gempa': 'join_Gempa', 'join_Kebak': 'join_Kebak', 'join_Keker': 'join_Keker', 'join_Tanah': 'join_Tanah', });
lyr_jogja_centeroids_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'Nama Kecamatan', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'join_No': 'join_No', 'join_Luas': 'Luas Wilayah (ha)', 'join_Pendu': 'Jumlah Penduduk (ribu)', 'join_Kepad': 'Jumlah Kepadatan (ribu per km2)', 'join_Banji': 'join_Banji', 'join_Cuaca': 'join_Cuaca', 'join_Erups': 'join_Erups', 'join_Gelom': 'join_Gelom', 'join_Gel_1': 'join_Gel_1', 'join_Gempa': 'join_Gempa', 'join_Kebak': 'join_Kebak', 'join_Keker': 'join_Keker', 'join_Tanah': 'join_Tanah', });
lyr_KEPADATANPENDUDUKKOTAYOGYAKARTA_1.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'TIPADM': 'Hidden', 'WADMKC': 'TextEdit', 'WADMKD': 'Hidden', 'WADMKK': 'Hidden', 'WADMPR': 'Hidden', 'LUAS': 'TextEdit', 'Field': 'Hidden', 'join_No': 'Hidden', 'join_Luas': 'TextEdit', 'join_Pendu': 'TextEdit', 'join_Kepad': 'TextEdit', 'join_Banji': 'Hidden', 'join_Cuaca': 'Hidden', 'join_Erups': 'Hidden', 'join_Gelom': 'Hidden', 'join_Gel_1': 'Hidden', 'join_Gempa': 'Hidden', 'join_Kebak': 'Hidden', 'join_Keker': 'Hidden', 'join_Tanah': 'Hidden', });
lyr_jogja_tolines_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'Field': 'TextEdit', 'join_No': 'TextEdit', 'join_Luas': 'TextEdit', 'join_Pendu': 'TextEdit', 'join_Kepad': 'TextEdit', 'join_Banji': 'TextEdit', 'join_Cuaca': 'TextEdit', 'join_Erups': 'TextEdit', 'join_Gelom': 'TextEdit', 'join_Gel_1': 'TextEdit', 'join_Gempa': 'TextEdit', 'join_Kebak': 'TextEdit', 'join_Keker': 'TextEdit', 'join_Tanah': 'TextEdit', });
lyr_jogja_centeroids_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'Field': 'TextEdit', 'join_No': 'TextEdit', 'join_Luas': 'TextEdit', 'join_Pendu': 'TextEdit', 'join_Kepad': 'TextEdit', 'join_Banji': 'TextEdit', 'join_Cuaca': 'TextEdit', 'join_Erups': 'TextEdit', 'join_Gelom': 'TextEdit', 'join_Gel_1': 'TextEdit', 'join_Gempa': 'TextEdit', 'join_Kebak': 'TextEdit', 'join_Keker': 'TextEdit', 'join_Tanah': 'TextEdit', });
lyr_KEPADATANPENDUDUKKOTAYOGYAKARTA_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'join_Luas': 'inline label - always visible', 'join_Pendu': 'inline label - always visible', 'join_Kepad': 'inline label - always visible', });
lyr_jogja_tolines_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'Field': 'no label', 'join_No': 'no label', 'join_Luas': 'no label', 'join_Pendu': 'no label', 'join_Kepad': 'no label', 'join_Banji': 'no label', 'join_Cuaca': 'no label', 'join_Erups': 'no label', 'join_Gelom': 'no label', 'join_Gel_1': 'no label', 'join_Gempa': 'no label', 'join_Kebak': 'no label', 'join_Keker': 'no label', 'join_Tanah': 'no label', });
lyr_jogja_centeroids_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'Field': 'no label', 'join_No': 'no label', 'join_Luas': 'no label', 'join_Pendu': 'no label', 'join_Kepad': 'no label', 'join_Banji': 'no label', 'join_Cuaca': 'no label', 'join_Erups': 'no label', 'join_Gelom': 'no label', 'join_Gel_1': 'no label', 'join_Gempa': 'no label', 'join_Kebak': 'no label', 'join_Keker': 'no label', 'join_Tanah': 'no label', });
lyr_jogja_centeroids_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
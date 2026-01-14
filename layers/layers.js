var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_ConcentraodePessoas_1 = new ol.format.GeoJSON();
var features_ConcentraodePessoas_1 = format_ConcentraodePessoas_1.readFeatures(json_ConcentraodePessoas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConcentraodePessoas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConcentraodePessoas_1.addFeatures(features_ConcentraodePessoas_1);
var lyr_ConcentraodePessoas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConcentraodePessoas_1, 
                style: style_ConcentraodePessoas_1,
                popuplayertitle: 'Concentração de Pessoas (%)',
                interactive: true,
    title: 'Concentração de Pessoas (%)<br />\
    <img src="styles/legend/ConcentraodePessoas_1_0.png" /> 1 % - 2 %<br />\
    <img src="styles/legend/ConcentraodePessoas_1_1.png" /> 1 % - 2 %<br />\
    <img src="styles/legend/ConcentraodePessoas_1_2.png" /> 1 % - 2 %<br />\
    <img src="styles/legend/ConcentraodePessoas_1_3.png" /> 1 % - 2 %<br />\
    <img src="styles/legend/ConcentraodePessoas_1_4.png" /> 1 % - 2 %<br />' });
var format_Tempo30MinVerde_2 = new ol.format.GeoJSON();
var features_Tempo30MinVerde_2 = format_Tempo30MinVerde_2.readFeatures(json_Tempo30MinVerde_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tempo30MinVerde_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tempo30MinVerde_2.addFeatures(features_Tempo30MinVerde_2);
var lyr_Tempo30MinVerde_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tempo30MinVerde_2, 
                style: style_Tempo30MinVerde_2,
                popuplayertitle: 'Tempo < 30 Min (Verde)',
                interactive: true,
    title: 'Tempo < 30 Min (Verde)<br />\
    <img src="styles/legend/Tempo30MinVerde_2_0.png" /> 37,8 - 40<br />\
    <img src="styles/legend/Tempo30MinVerde_2_1.png" /> 40 - 49,9<br />\
    <img src="styles/legend/Tempo30MinVerde_2_2.png" /> 49,9 - 62<br />\
    <img src="styles/legend/Tempo30MinVerde_2_3.png" /> 62 - 72,8<br />\
    <img src="styles/legend/Tempo30MinVerde_2_4.png" /> 72,8 - 82<br />' });
var format_Tempo30min1HoraAmarelo_3 = new ol.format.GeoJSON();
var features_Tempo30min1HoraAmarelo_3 = format_Tempo30min1HoraAmarelo_3.readFeatures(json_Tempo30min1HoraAmarelo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tempo30min1HoraAmarelo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tempo30min1HoraAmarelo_3.addFeatures(features_Tempo30min1HoraAmarelo_3);
var lyr_Tempo30min1HoraAmarelo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tempo30min1HoraAmarelo_3, 
                style: style_Tempo30min1HoraAmarelo_3,
                popuplayertitle: 'Tempo 30min - 1 Hora (Amarelo)',
                interactive: true,
    title: 'Tempo 30min - 1 Hora (Amarelo)<br />\
    <img src="styles/legend/Tempo30min1HoraAmarelo_3_0.png" /> 13,4 - 16,1<br />\
    <img src="styles/legend/Tempo30min1HoraAmarelo_3_1.png" /> 16,1 - 23,5<br />\
    <img src="styles/legend/Tempo30min1HoraAmarelo_3_2.png" /> 23,5 - 27,6<br />\
    <img src="styles/legend/Tempo30min1HoraAmarelo_3_3.png" /> 27,6 - 31<br />\
    <img src="styles/legend/Tempo30min1HoraAmarelo_3_4.png" /> 31 - 34,9<br />' });
var format_Tempo1HoraVermelho_4 = new ol.format.GeoJSON();
var features_Tempo1HoraVermelho_4 = format_Tempo1HoraVermelho_4.readFeatures(json_Tempo1HoraVermelho_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tempo1HoraVermelho_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tempo1HoraVermelho_4.addFeatures(features_Tempo1HoraVermelho_4);
var lyr_Tempo1HoraVermelho_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tempo1HoraVermelho_4, 
                style: style_Tempo1HoraVermelho_4,
                popuplayertitle: 'Tempo > 1 Hora (Vermelho)',
                interactive: true,
    title: 'Tempo > 1 Hora (Vermelho)<br />\
    <img src="styles/legend/Tempo1HoraVermelho_4_0.png" /> 4,7 - 7,2<br />\
    <img src="styles/legend/Tempo1HoraVermelho_4_1.png" /> 7,2 - 11<br />\
    <img src="styles/legend/Tempo1HoraVermelho_4_2.png" /> 11 - 15,2<br />\
    <img src="styles/legend/Tempo1HoraVermelho_4_3.png" /> 15,2 - 21,5<br />\
    <img src="styles/legend/Tempo1HoraVermelho_4_4.png" /> 21,5 - 29,3<br />' });
var format_TransportePblicoAutocarro_5 = new ol.format.GeoJSON();
var features_TransportePblicoAutocarro_5 = format_TransportePblicoAutocarro_5.readFeatures(json_TransportePblicoAutocarro_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransportePblicoAutocarro_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransportePblicoAutocarro_5.addFeatures(features_TransportePblicoAutocarro_5);
var lyr_TransportePblicoAutocarro_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransportePblicoAutocarro_5, 
                style: style_TransportePblicoAutocarro_5,
                popuplayertitle: 'Transporte Público (Autocarro) (%)',
                interactive: true,
    title: 'Transporte Público (Autocarro) (%)<br />\
    <img src="styles/legend/TransportePblicoAutocarro_5_0.png" /> 7,4 - 11<br />\
    <img src="styles/legend/TransportePblicoAutocarro_5_1.png" /> 11 - 20,9<br />\
    <img src="styles/legend/TransportePblicoAutocarro_5_2.png" /> 20,9 - 33,3<br />\
    <img src="styles/legend/TransportePblicoAutocarro_5_3.png" /> 33,3 - 40,7<br />\
    <img src="styles/legend/TransportePblicoAutocarro_5_4.png" /> 40,7 - 52,2<br />' });
var format_TransportePrivadoCarro_6 = new ol.format.GeoJSON();
var features_TransportePrivadoCarro_6 = format_TransportePrivadoCarro_6.readFeatures(json_TransportePrivadoCarro_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransportePrivadoCarro_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransportePrivadoCarro_6.addFeatures(features_TransportePrivadoCarro_6);
var lyr_TransportePrivadoCarro_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransportePrivadoCarro_6, 
                style: style_TransportePrivadoCarro_6,
                popuplayertitle: 'Transporte Privado (Carro) (%)',
                interactive: true,
    title: 'Transporte Privado (Carro) (%)<br />\
    <img src="styles/legend/TransportePrivadoCarro_6_0.png" /> 31,3 - 37,1<br />\
    <img src="styles/legend/TransportePrivadoCarro_6_1.png" /> 37,1 - 45,9<br />\
    <img src="styles/legend/TransportePrivadoCarro_6_2.png" /> 45,9 - 51,6<br />\
    <img src="styles/legend/TransportePrivadoCarro_6_3.png" /> 51,6 - 61<br />\
    <img src="styles/legend/TransportePrivadoCarro_6_4.png" /> 61 - 72<br />' });
var format_TransporteAtivoBicicleta_7 = new ol.format.GeoJSON();
var features_TransporteAtivoBicicleta_7 = format_TransporteAtivoBicicleta_7.readFeatures(json_TransporteAtivoBicicleta_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransporteAtivoBicicleta_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransporteAtivoBicicleta_7.addFeatures(features_TransporteAtivoBicicleta_7);
var lyr_TransporteAtivoBicicleta_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransporteAtivoBicicleta_7, 
                style: style_TransporteAtivoBicicleta_7,
                popuplayertitle: 'Transporte Ativo (Bicicleta) (%)',
                interactive: true,
    title: 'Transporte Ativo (Bicicleta) (%)<br />\
    <img src="styles/legend/TransporteAtivoBicicleta_7_0.png" /> 10,9 - 12,4<br />\
    <img src="styles/legend/TransporteAtivoBicicleta_7_1.png" /> 12,4 - 15,1<br />\
    <img src="styles/legend/TransporteAtivoBicicleta_7_2.png" /> 15,1 - 18,3<br />\
    <img src="styles/legend/TransporteAtivoBicicleta_7_3.png" /> 18,3 - 22,1<br />\
    <img src="styles/legend/TransporteAtivoBicicleta_7_4.png" /> 22,1 - 26,4<br />' });
var format_MobilidadeAtivaBicicletaP_8 = new ol.format.GeoJSON();
var features_MobilidadeAtivaBicicletaP_8 = format_MobilidadeAtivaBicicletaP_8.readFeatures(json_MobilidadeAtivaBicicletaP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MobilidadeAtivaBicicletaP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MobilidadeAtivaBicicletaP_8.addFeatures(features_MobilidadeAtivaBicicletaP_8);
var lyr_MobilidadeAtivaBicicletaP_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MobilidadeAtivaBicicletaP_8, 
                style: style_MobilidadeAtivaBicicletaP_8,
                popuplayertitle: 'Mobilidade Ativa (Bicicleta/Pé) (%)',
                interactive: true,
    title: 'Mobilidade Ativa (Bicicleta/Pé) (%)<br />\
    <img src="styles/legend/MobilidadeAtivaBicicletaP_8_0.png" /> 10,9 - 12,4<br />\
    <img src="styles/legend/MobilidadeAtivaBicicletaP_8_1.png" /> 12,4 - 15,1<br />\
    <img src="styles/legend/MobilidadeAtivaBicicletaP_8_2.png" /> 15,1 - 18,3<br />\
    <img src="styles/legend/MobilidadeAtivaBicicletaP_8_3.png" /> 18,3 - 22,1<br />\
    <img src="styles/legend/MobilidadeAtivaBicicletaP_8_4.png" /> 22,1 - 26,4<br />' });
var format_PopulaocomAcessoemat30min_9 = new ol.format.GeoJSON();
var features_PopulaocomAcessoemat30min_9 = format_PopulaocomAcessoemat30min_9.readFeatures(json_PopulaocomAcessoemat30min_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulaocomAcessoemat30min_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulaocomAcessoemat30min_9.addFeatures(features_PopulaocomAcessoemat30min_9);
var lyr_PopulaocomAcessoemat30min_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PopulaocomAcessoemat30min_9, 
                style: style_PopulaocomAcessoemat30min_9,
                popuplayertitle: 'População com Acesso em até 30 min (%)',
                interactive: true,
    title: 'População com Acesso em até 30 min (%)<br />\
    <img src="styles/legend/PopulaocomAcessoemat30min_9_0.png" /> 37,8 - 40<br />\
    <img src="styles/legend/PopulaocomAcessoemat30min_9_1.png" /> 40 - 49,9<br />\
    <img src="styles/legend/PopulaocomAcessoemat30min_9_2.png" /> 49,9 - 62<br />\
    <img src="styles/legend/PopulaocomAcessoemat30min_9_3.png" /> 62 - 72,8<br />\
    <img src="styles/legend/PopulaocomAcessoemat30min_9_4.png" /> 72,8 - 82<br />' });
var format_RedeCicloviriaExistente_10 = new ol.format.GeoJSON();
var features_RedeCicloviriaExistente_10 = format_RedeCicloviriaExistente_10.readFeatures(json_RedeCicloviriaExistente_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedeCicloviriaExistente_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedeCicloviriaExistente_10.addFeatures(features_RedeCicloviriaExistente_10);
var lyr_RedeCicloviriaExistente_10 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_RedeCicloviriaExistente_10, 
                radius: 0 * 2,
                gradient: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
                blur: 15,
                shadow: 250,
                title: 'Rede Cicloviária Existente'
            });
var format_BarreirasUrbanasPortoVelho_11 = new ol.format.GeoJSON();
var features_BarreirasUrbanasPortoVelho_11 = format_BarreirasUrbanasPortoVelho_11.readFeatures(json_BarreirasUrbanasPortoVelho_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BarreirasUrbanasPortoVelho_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarreirasUrbanasPortoVelho_11.addFeatures(features_BarreirasUrbanasPortoVelho_11);
var lyr_BarreirasUrbanasPortoVelho_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarreirasUrbanasPortoVelho_11, 
                style: style_BarreirasUrbanasPortoVelho_11,
                popuplayertitle: 'Barreiras Urbanas (Porto Velho)',
                interactive: true,
    title: 'Barreiras Urbanas (Porto Velho)<br />\
    <img src="styles/legend/BarreirasUrbanasPortoVelho_11_0.png" /> Ponte (Conexão)<br />\
    <img src="styles/legend/BarreirasUrbanasPortoVelho_11_1.png" /> Rio (Barreira)<br />\
    <img src="styles/legend/BarreirasUrbanasPortoVelho_11_2.png" /> Rodovia Expressa (Barreira)<br />\
    <img src="styles/legend/BarreirasUrbanasPortoVelho_11_3.png" /> Via Rápida (Barreira)<br />\
    <img src="styles/legend/BarreirasUrbanasPortoVelho_11_4.png" /> <br />' });
var format_MapadePortoVelho_12 = new ol.format.GeoJSON();
var features_MapadePortoVelho_12 = format_MapadePortoVelho_12.readFeatures(json_MapadePortoVelho_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapadePortoVelho_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapadePortoVelho_12.addFeatures(features_MapadePortoVelho_12);
var lyr_MapadePortoVelho_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MapadePortoVelho_12, 
                style: style_MapadePortoVelho_12,
                popuplayertitle: 'Mapa de Porto Velho',
                interactive: true,
                title: '<img src="styles/legend/MapadePortoVelho_12.png" /> Mapa de Porto Velho'
            });
var format_AlcanceTransportePrivadoCarro_13 = new ol.format.GeoJSON();
var features_AlcanceTransportePrivadoCarro_13 = format_AlcanceTransportePrivadoCarro_13.readFeatures(json_AlcanceTransportePrivadoCarro_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlcanceTransportePrivadoCarro_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlcanceTransportePrivadoCarro_13.addFeatures(features_AlcanceTransportePrivadoCarro_13);
var lyr_AlcanceTransportePrivadoCarro_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlcanceTransportePrivadoCarro_13, 
                style: style_AlcanceTransportePrivadoCarro_13,
                popuplayertitle: 'Alcance: Transporte Privado (Carro)',
                interactive: true,
                title: '<img src="styles/legend/AlcanceTransportePrivadoCarro_13.png" /> Alcance: Transporte Privado (Carro)'
            });
var format_PolosdeEmprego_14 = new ol.format.GeoJSON();
var features_PolosdeEmprego_14 = format_PolosdeEmprego_14.readFeatures(json_PolosdeEmprego_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolosdeEmprego_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolosdeEmprego_14.addFeatures(features_PolosdeEmprego_14);
var lyr_PolosdeEmprego_14 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_PolosdeEmprego_14, 
                radius: 10 * 2,
                gradient: ['#fcfdbf', '#fcf4b6', '#fdebac', '#fde2a3', '#fed89a', '#fecf92', '#fec68a', '#febd82', '#feb47b', '#feaa74', '#fea16e', '#fd9869', '#fc8e64', '#fb8560', '#f97b5d', '#f7725c', '#f4695c', '#f1605d', '#ec5860', '#e75263', '#e04c67', '#d9466b', '#d2426f', '#ca3e72', '#c23b75', '#ba3878', '#b2357b', '#aa337d', '#a1307e', '#992d80', '#912b81', '#892881', '#812581', '#792282', '#721f81', '#6a1c81', '#621980', '#5a167e', '#52137c', '#4a1079', '#420f75', '#390f6e', '#311165', '#29115a', '#21114e', '#1a1042', '#140e36', '#0e0b2b', '#090720', '#050416', '#02020b', '#000004'],
                blur: 15,
                shadow: 250,
                title: 'Polos de Emprego'
            });
var format_DensidadeResidencial_15 = new ol.format.GeoJSON();
var features_DensidadeResidencial_15 = format_DensidadeResidencial_15.readFeatures(json_DensidadeResidencial_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DensidadeResidencial_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DensidadeResidencial_15.addFeatures(features_DensidadeResidencial_15);
var lyr_DensidadeResidencial_15 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_DensidadeResidencial_15, 
                radius: 10 * 2,
                gradient: ['#fffff0', '#ffffe1', '#ffffb6', '#ffff96', '#ffff7c', '#ffff64', '#ffff3f', '#ffff19', '#ffdb00'],
                blur: 15,
                shadow: 250,
                title: 'Densidade Residencial'
            });
var format_AlcanceBicicleta30min_16 = new ol.format.GeoJSON();
var features_AlcanceBicicleta30min_16 = format_AlcanceBicicleta30min_16.readFeatures(json_AlcanceBicicleta30min_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlcanceBicicleta30min_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlcanceBicicleta30min_16.addFeatures(features_AlcanceBicicleta30min_16);
var lyr_AlcanceBicicleta30min_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlcanceBicicleta30min_16, 
                style: style_AlcanceBicicleta30min_16,
                popuplayertitle: 'Alcance: Bicicleta (30 min)',
                interactive: true,
                title: '<img src="styles/legend/AlcanceBicicleta30min_16.png" /> Alcance: Bicicleta (30 min)'
            });
var format_VantagemBicicletavsAutocarro_17 = new ol.format.GeoJSON();
var features_VantagemBicicletavsAutocarro_17 = format_VantagemBicicletavsAutocarro_17.readFeatures(json_VantagemBicicletavsAutocarro_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VantagemBicicletavsAutocarro_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VantagemBicicletavsAutocarro_17.addFeatures(features_VantagemBicicletavsAutocarro_17);
var lyr_VantagemBicicletavsAutocarro_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VantagemBicicletavsAutocarro_17, 
                style: style_VantagemBicicletavsAutocarro_17,
                popuplayertitle: 'Vantagem: Bicicleta vs Autocarro',
                interactive: true,
                title: '<img src="styles/legend/VantagemBicicletavsAutocarro_17.png" /> Vantagem: Bicicleta vs Autocarro'
            });
var format_AlcanceAp30min_18 = new ol.format.GeoJSON();
var features_AlcanceAp30min_18 = format_AlcanceAp30min_18.readFeatures(json_AlcanceAp30min_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlcanceAp30min_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlcanceAp30min_18.addFeatures(features_AlcanceAp30min_18);
var lyr_AlcanceAp30min_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlcanceAp30min_18, 
                style: style_AlcanceAp30min_18,
                popuplayertitle: 'Alcance: A pé (30 min)',
                interactive: true,
                title: '<img src="styles/legend/AlcanceAp30min_18.png" /> Alcance: A pé (30 min)'
            });
var format_AlcanceTransportePblico_19 = new ol.format.GeoJSON();
var features_AlcanceTransportePblico_19 = format_AlcanceTransportePblico_19.readFeatures(json_AlcanceTransportePblico_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlcanceTransportePblico_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlcanceTransportePblico_19.addFeatures(features_AlcanceTransportePblico_19);
var lyr_AlcanceTransportePblico_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlcanceTransportePblico_19, 
                style: style_AlcanceTransportePblico_19,
                popuplayertitle: 'Alcance: Transporte Público',
                interactive: true,
                title: '<img src="styles/legend/AlcanceTransportePblico_19.png" /> Alcance: Transporte Público'
            });
var format_ParagensdeAutocarroPortoVelho_20 = new ol.format.GeoJSON();
var features_ParagensdeAutocarroPortoVelho_20 = format_ParagensdeAutocarroPortoVelho_20.readFeatures(json_ParagensdeAutocarroPortoVelho_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParagensdeAutocarroPortoVelho_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParagensdeAutocarroPortoVelho_20.addFeatures(features_ParagensdeAutocarroPortoVelho_20);
var lyr_ParagensdeAutocarroPortoVelho_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParagensdeAutocarroPortoVelho_20, 
                style: style_ParagensdeAutocarroPortoVelho_20,
                popuplayertitle: 'Paragens de Autocarro (Porto Velho)',
                interactive: true,
                title: '<img src="styles/legend/ParagensdeAutocarroPortoVelho_20.png" /> Paragens de Autocarro (Porto Velho)'
            });
var format_DeslocamentoCrtico1h_21 = new ol.format.GeoJSON();
var features_DeslocamentoCrtico1h_21 = format_DeslocamentoCrtico1h_21.readFeatures(json_DeslocamentoCrtico1h_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeslocamentoCrtico1h_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeslocamentoCrtico1h_21.addFeatures(features_DeslocamentoCrtico1h_21);
var lyr_DeslocamentoCrtico1h_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeslocamentoCrtico1h_21, 
                style: style_DeslocamentoCrtico1h_21,
                popuplayertitle: 'Deslocamento Crítico (> 1h) (%)',
                interactive: true,
    title: 'Deslocamento Crítico (> 1h) (%)<br />\
    <img src="styles/legend/DeslocamentoCrtico1h_21_0.png" /> 4,7 - 7,2<br />\
    <img src="styles/legend/DeslocamentoCrtico1h_21_1.png" /> 7,2 - 11<br />\
    <img src="styles/legend/DeslocamentoCrtico1h_21_2.png" /> 11 - 15,2<br />\
    <img src="styles/legend/DeslocamentoCrtico1h_21_3.png" /> 15,2 - 21,5<br />\
    <img src="styles/legend/DeslocamentoCrtico1h_21_4.png" /> 21,5 - 29,3<br />' });
var format_LimiteseBarreirasUrbanasSP_22 = new ol.format.GeoJSON();
var features_LimiteseBarreirasUrbanasSP_22 = format_LimiteseBarreirasUrbanasSP_22.readFeatures(json_LimiteseBarreirasUrbanasSP_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteseBarreirasUrbanasSP_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteseBarreirasUrbanasSP_22.addFeatures(features_LimiteseBarreirasUrbanasSP_22);
var lyr_LimiteseBarreirasUrbanasSP_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteseBarreirasUrbanasSP_22, 
                style: style_LimiteseBarreirasUrbanasSP_22,
                popuplayertitle: 'Limites e Barreiras Urbanas (SP)',
                interactive: true,
    title: 'Limites e Barreiras Urbanas (SP)<br />\
    <img src="styles/legend/LimiteseBarreirasUrbanasSP_22_0.png" /> Ponte (Conexão)<br />\
    <img src="styles/legend/LimiteseBarreirasUrbanasSP_22_1.png" /> Rio (Barreira)<br />\
    <img src="styles/legend/LimiteseBarreirasUrbanasSP_22_2.png" /> Rodovia Expressa (Barreira)<br />\
    <img src="styles/legend/LimiteseBarreirasUrbanasSP_22_3.png" /> Via Rápida (Barreira)<br />\
    <img src="styles/legend/LimiteseBarreirasUrbanasSP_22_4.png" /> <br />' });
var format_MapadeSoPaulo_23 = new ol.format.GeoJSON();
var features_MapadeSoPaulo_23 = format_MapadeSoPaulo_23.readFeatures(json_MapadeSoPaulo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapadeSoPaulo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapadeSoPaulo_23.addFeatures(features_MapadeSoPaulo_23);
var lyr_MapadeSoPaulo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MapadeSoPaulo_23, 
                style: style_MapadeSoPaulo_23,
                popuplayertitle: 'Mapa de São Paulo',
                interactive: true,
                title: '<img src="styles/legend/MapadeSoPaulo_23.png" /> Mapa de São Paulo'
            });
var format_PolosdeEmpregoSoPaulo_24 = new ol.format.GeoJSON();
var features_PolosdeEmpregoSoPaulo_24 = format_PolosdeEmpregoSoPaulo_24.readFeatures(json_PolosdeEmpregoSoPaulo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolosdeEmpregoSoPaulo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolosdeEmpregoSoPaulo_24.addFeatures(features_PolosdeEmpregoSoPaulo_24);
var lyr_PolosdeEmpregoSoPaulo_24 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_PolosdeEmpregoSoPaulo_24, 
                radius: 500 * 2,
                gradient: ['#fcfdbf', '#fcf4b6', '#fdebac', '#fde2a3', '#fed89a', '#fecf92', '#fec68a', '#febd82', '#feb47b', '#feaa74', '#fea16e', '#fd9869', '#fc8e64', '#fb8560', '#f97b5d', '#f7725c', '#f4695c', '#f1605d', '#ec5860', '#e75263', '#e04c67', '#d9466b', '#d2426f', '#ca3e72', '#c23b75', '#ba3878', '#b2357b', '#aa337d', '#a1307e', '#992d80', '#912b81', '#892881', '#812581', '#792282', '#721f81', '#6a1c81', '#621980', '#5a167e', '#52137c', '#4a1079', '#420f75', '#390f6e', '#311165', '#29115a', '#21114e', '#1a1042', '#140e36', '#0e0b2b', '#090720', '#050416', '#02020b', '#000004'],
                blur: 15,
                shadow: 250,
                title: 'Polos de Emprego (São Paulo)'
            });
var format_DensidadeResidencialSoPaulo_25 = new ol.format.GeoJSON();
var features_DensidadeResidencialSoPaulo_25 = format_DensidadeResidencialSoPaulo_25.readFeatures(json_DensidadeResidencialSoPaulo_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DensidadeResidencialSoPaulo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DensidadeResidencialSoPaulo_25.addFeatures(features_DensidadeResidencialSoPaulo_25);
var lyr_DensidadeResidencialSoPaulo_25 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_DensidadeResidencialSoPaulo_25, 
                radius: 900 * 2,
                gradient: ['#fee977', '#fbba00', '#fbba00'],
                blur: 15,
                shadow: 250,
                title: 'Densidade Residencial (São Paulo)'
            });
var format_CoberturaTransportePrivadoSP_26 = new ol.format.GeoJSON();
var features_CoberturaTransportePrivadoSP_26 = format_CoberturaTransportePrivadoSP_26.readFeatures(json_CoberturaTransportePrivadoSP_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoberturaTransportePrivadoSP_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoberturaTransportePrivadoSP_26.addFeatures(features_CoberturaTransportePrivadoSP_26);
var lyr_CoberturaTransportePrivadoSP_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoberturaTransportePrivadoSP_26, 
                style: style_CoberturaTransportePrivadoSP_26,
                popuplayertitle: 'Cobertura: Transporte Privado (SP)',
                interactive: true,
                title: '<img src="styles/legend/CoberturaTransportePrivadoSP_26.png" /> Cobertura: Transporte Privado (SP)'
            });
var format_CinturodeExclusoPerifrica_27 = new ol.format.GeoJSON();
var features_CinturodeExclusoPerifrica_27 = format_CinturodeExclusoPerifrica_27.readFeatures(json_CinturodeExclusoPerifrica_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CinturodeExclusoPerifrica_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CinturodeExclusoPerifrica_27.addFeatures(features_CinturodeExclusoPerifrica_27);
var lyr_CinturodeExclusoPerifrica_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CinturodeExclusoPerifrica_27, 
                style: style_CinturodeExclusoPerifrica_27,
                popuplayertitle: 'Cinturão de Exclusão Periférica',
                interactive: true,
                title: '<img src="styles/legend/CinturodeExclusoPerifrica_27.png" /> Cinturão de Exclusão Periférica'
            });
var format_CoberturaTransportePblicoSP_28 = new ol.format.GeoJSON();
var features_CoberturaTransportePblicoSP_28 = format_CoberturaTransportePblicoSP_28.readFeatures(json_CoberturaTransportePblicoSP_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoberturaTransportePblicoSP_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoberturaTransportePblicoSP_28.addFeatures(features_CoberturaTransportePblicoSP_28);
var lyr_CoberturaTransportePblicoSP_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoberturaTransportePblicoSP_28, 
                style: style_CoberturaTransportePblicoSP_28,
                popuplayertitle: 'Cobertura: Transporte Público (SP)',
                interactive: true,
                title: '<img src="styles/legend/CoberturaTransportePblicoSP_28.png" /> Cobertura: Transporte Público (SP)'
            });
var format_EstaesdeMetroComboioeTerminais_29 = new ol.format.GeoJSON();
var features_EstaesdeMetroComboioeTerminais_29 = format_EstaesdeMetroComboioeTerminais_29.readFeatures(json_EstaesdeMetroComboioeTerminais_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstaesdeMetroComboioeTerminais_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstaesdeMetroComboioeTerminais_29.addFeatures(features_EstaesdeMetroComboioeTerminais_29);
var lyr_EstaesdeMetroComboioeTerminais_29 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_EstaesdeMetroComboioeTerminais_29, 
                radius: 1000 * 2,
                gradient: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
                blur: 15,
                shadow: 250,
                title: 'Estações de Metro, Comboio e Terminais'
            });
var format_RedeEstruturaldeTransporteColetivo_30 = new ol.format.GeoJSON();
var features_RedeEstruturaldeTransporteColetivo_30 = format_RedeEstruturaldeTransporteColetivo_30.readFeatures(json_RedeEstruturaldeTransporteColetivo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedeEstruturaldeTransporteColetivo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedeEstruturaldeTransporteColetivo_30.addFeatures(features_RedeEstruturaldeTransporteColetivo_30);
var lyr_RedeEstruturaldeTransporteColetivo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedeEstruturaldeTransporteColetivo_30, 
                style: style_RedeEstruturaldeTransporteColetivo_30,
                popuplayertitle: 'Rede Estrutural de Transporte Coletivo (%)',
                interactive: true,
    title: 'Rede Estrutural de Transporte Coletivo (%)<br />\
    <img src="styles/legend/RedeEstruturaldeTransporteColetivo_30_0.png" /> 7,4 - 11<br />\
    <img src="styles/legend/RedeEstruturaldeTransporteColetivo_30_1.png" /> 11 - 20,9<br />\
    <img src="styles/legend/RedeEstruturaldeTransporteColetivo_30_2.png" /> 20,9 - 33,3<br />\
    <img src="styles/legend/RedeEstruturaldeTransporteColetivo_30_3.png" /> 33,3 - 40,7<br />\
    <img src="styles/legend/RedeEstruturaldeTransporteColetivo_30_4.png" /> 40,7 - 52,2<br />' });
var format_DomniodoTransportePrivadoRioBranco_31 = new ol.format.GeoJSON();
var features_DomniodoTransportePrivadoRioBranco_31 = format_DomniodoTransportePrivadoRioBranco_31.readFeatures(json_DomniodoTransportePrivadoRioBranco_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DomniodoTransportePrivadoRioBranco_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DomniodoTransportePrivadoRioBranco_31.addFeatures(features_DomniodoTransportePrivadoRioBranco_31);
var lyr_DomniodoTransportePrivadoRioBranco_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DomniodoTransportePrivadoRioBranco_31, 
                style: style_DomniodoTransportePrivadoRioBranco_31,
                popuplayertitle: 'Domínio do Transporte Privado (Rio Branco) (%)',
                interactive: true,
    title: 'Domínio do Transporte Privado (Rio Branco) (%)<br />\
    <img src="styles/legend/DomniodoTransportePrivadoRioBranco_31_0.png" /> 31,3 - 37,1<br />\
    <img src="styles/legend/DomniodoTransportePrivadoRioBranco_31_1.png" /> 37,1 - 45,9<br />\
    <img src="styles/legend/DomniodoTransportePrivadoRioBranco_31_2.png" /> 45,9 - 51,6<br />\
    <img src="styles/legend/DomniodoTransportePrivadoRioBranco_31_3.png" /> 51,6 - 61<br />\
    <img src="styles/legend/DomniodoTransportePrivadoRioBranco_31_4.png" /> 61 - 72<br />' });
var format_LimiteseBarreirasUrbanasRB_32 = new ol.format.GeoJSON();
var features_LimiteseBarreirasUrbanasRB_32 = format_LimiteseBarreirasUrbanasRB_32.readFeatures(json_LimiteseBarreirasUrbanasRB_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteseBarreirasUrbanasRB_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteseBarreirasUrbanasRB_32.addFeatures(features_LimiteseBarreirasUrbanasRB_32);
var lyr_LimiteseBarreirasUrbanasRB_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteseBarreirasUrbanasRB_32, 
                style: style_LimiteseBarreirasUrbanasRB_32,
                popuplayertitle: 'Limites e Barreiras Urbanas (RB)',
                interactive: true,
    title: 'Limites e Barreiras Urbanas (RB)<br />\
    <img src="styles/legend/LimiteseBarreirasUrbanasRB_32_0.png" /> Ponte (Conexão)<br />\
    <img src="styles/legend/LimiteseBarreirasUrbanasRB_32_1.png" /> Rio (Barreira)<br />\
    <img src="styles/legend/LimiteseBarreirasUrbanasRB_32_2.png" /> Via Rápida (Barreira)<br />\
    <img src="styles/legend/LimiteseBarreirasUrbanasRB_32_3.png" /> <br />' });
var format_MapadeRioBranco_33 = new ol.format.GeoJSON();
var features_MapadeRioBranco_33 = format_MapadeRioBranco_33.readFeatures(json_MapadeRioBranco_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapadeRioBranco_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapadeRioBranco_33.addFeatures(features_MapadeRioBranco_33);
var lyr_MapadeRioBranco_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MapadeRioBranco_33, 
                style: style_MapadeRioBranco_33,
                popuplayertitle: 'Mapa de Rio Branco',
                interactive: true,
                title: '<img src="styles/legend/MapadeRioBranco_33.png" /> Mapa de Rio Branco'
            });
var format_ParagensdeAutocarroRioBranco_34 = new ol.format.GeoJSON();
var features_ParagensdeAutocarroRioBranco_34 = format_ParagensdeAutocarroRioBranco_34.readFeatures(json_ParagensdeAutocarroRioBranco_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParagensdeAutocarroRioBranco_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParagensdeAutocarroRioBranco_34.addFeatures(features_ParagensdeAutocarroRioBranco_34);
var lyr_ParagensdeAutocarroRioBranco_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParagensdeAutocarroRioBranco_34, 
                style: style_ParagensdeAutocarroRioBranco_34,
                popuplayertitle: 'Paragens de Autocarro (Rio Branco)',
                interactive: true,
                title: '<img src="styles/legend/ParagensdeAutocarroRioBranco_34.png" /> Paragens de Autocarro (Rio Branco)'
            });
var format_PolosdeEmpregoRioBranco_35 = new ol.format.GeoJSON();
var features_PolosdeEmpregoRioBranco_35 = format_PolosdeEmpregoRioBranco_35.readFeatures(json_PolosdeEmpregoRioBranco_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolosdeEmpregoRioBranco_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolosdeEmpregoRioBranco_35.addFeatures(features_PolosdeEmpregoRioBranco_35);
var lyr_PolosdeEmpregoRioBranco_35 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_PolosdeEmpregoRioBranco_35, 
                radius: 10 * 2,
                gradient: ['#fcfdbf', '#fcf4b6', '#fdebac', '#fde2a3', '#fed89a', '#fecf92', '#fec68a', '#febd82', '#feb47b', '#feaa74', '#fea16e', '#fd9869', '#fc8e64', '#fb8560', '#f97b5d', '#f7725c', '#f4695c', '#f1605d', '#ec5860', '#e75263', '#e04c67', '#d9466b', '#d2426f', '#ca3e72', '#c23b75', '#ba3878', '#b2357b', '#aa337d', '#a1307e', '#992d80', '#912b81', '#892881', '#812581', '#792282', '#721f81', '#6a1c81', '#621980', '#5a167e', '#52137c', '#4a1079', '#420f75', '#390f6e', '#311165', '#29115a', '#21114e', '#1a1042', '#140e36', '#0e0b2b', '#090720', '#050416', '#02020b', '#000004'],
                blur: 15,
                shadow: 250,
                title: 'Polos de Emprego (Rio Branco)'
            });
var format_CoberturaCarroRioBranco_36 = new ol.format.GeoJSON();
var features_CoberturaCarroRioBranco_36 = format_CoberturaCarroRioBranco_36.readFeatures(json_CoberturaCarroRioBranco_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoberturaCarroRioBranco_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoberturaCarroRioBranco_36.addFeatures(features_CoberturaCarroRioBranco_36);
var lyr_CoberturaCarroRioBranco_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoberturaCarroRioBranco_36, 
                style: style_CoberturaCarroRioBranco_36,
                popuplayertitle: 'Cobertura: Carro (Rio Branco)',
                interactive: true,
                title: '<img src="styles/legend/CoberturaCarroRioBranco_36.png" /> Cobertura: Carro (Rio Branco)'
            });
var format_GapdeAcessibilidadeModalRioBranco_37 = new ol.format.GeoJSON();
var features_GapdeAcessibilidadeModalRioBranco_37 = format_GapdeAcessibilidadeModalRioBranco_37.readFeatures(json_GapdeAcessibilidadeModalRioBranco_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GapdeAcessibilidadeModalRioBranco_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GapdeAcessibilidadeModalRioBranco_37.addFeatures(features_GapdeAcessibilidadeModalRioBranco_37);
var lyr_GapdeAcessibilidadeModalRioBranco_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GapdeAcessibilidadeModalRioBranco_37, 
                style: style_GapdeAcessibilidadeModalRioBranco_37,
                popuplayertitle: 'Gap de Acessibilidade Modal (Rio Branco)',
                interactive: true,
                title: '<img src="styles/legend/GapdeAcessibilidadeModalRioBranco_37.png" /> Gap de Acessibilidade Modal (Rio Branco)'
            });
var format_CoberturaAutocarroRioBranco_38 = new ol.format.GeoJSON();
var features_CoberturaAutocarroRioBranco_38 = format_CoberturaAutocarroRioBranco_38.readFeatures(json_CoberturaAutocarroRioBranco_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoberturaAutocarroRioBranco_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoberturaAutocarroRioBranco_38.addFeatures(features_CoberturaAutocarroRioBranco_38);
var lyr_CoberturaAutocarroRioBranco_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoberturaAutocarroRioBranco_38, 
                style: style_CoberturaAutocarroRioBranco_38,
                popuplayertitle: 'Cobertura: Autocarro (Rio Branco)',
                interactive: true,
                title: '<img src="styles/legend/CoberturaAutocarroRioBranco_38.png" /> Cobertura: Autocarro (Rio Branco)'
            });
var format_DensidadeResidencialRioBranco_39 = new ol.format.GeoJSON();
var features_DensidadeResidencialRioBranco_39 = format_DensidadeResidencialRioBranco_39.readFeatures(json_DensidadeResidencialRioBranco_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DensidadeResidencialRioBranco_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DensidadeResidencialRioBranco_39.addFeatures(features_DensidadeResidencialRioBranco_39);
var lyr_DensidadeResidencialRioBranco_39 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_DensidadeResidencialRioBranco_39, 
                radius: 5 * 2,
                gradient: ['#ffea46', '#ffe843', '#ffe742', '#ffe642', '#ffe544', '#fee445', '#fde346', '#fbe248', '#fae149', '#f9e04a', '#f8df4b', '#f7de4c', '#f6dd4d', '#f4dc4e', '#f3db4f', '#f2da50', '#f1d951', '#f0d852', '#efd753', '#edd654', '#ecd555', '#ebd456', '#ead357', '#e9d358', '#e8d259', '#e6d159', '#e5d05a', '#e4cf5b', '#e3ce5c', '#e2cd5c', '#e1cc5d', '#e0cb5e', '#deca5f', '#ddc95f', '#dcc860', '#dbc761', '#dac661', '#d9c562', '#d8c563', '#d7c463', '#d6c364', '#d4c264', '#d3c165', '#d2c066', '#d1bf66', '#d0be67', '#cfbd67', '#cebc68', '#cdbc68', '#ccbb69', '#cbba69', '#c9b96a', '#c8b86a', '#c7b76b', '#c6b66b', '#c5b56c', '#c4b56c', '#c3b46d', '#c2b36d', '#c1b26d', '#c0b16e', '#bfb06e', '#beaf6f', '#bcaf6f', '#bbae6f', '#baad70', '#b9ac70', '#b8ab70', '#b7aa71', '#b6a971', '#b5a971', '#b4a872', '#b3a772', '#b2a672', '#b1a573', '#b0a473', '#afa473', '#aea374', '#ada274', '#aca174', '#aba074', '#aa9f75', '#a99f75', '#a89e75', '#a69d75', '#a59c76', '#a49b76', '#a39a76', '#a29a76', '#a19976', '#a09877', '#9f9777', '#9e9677', '#9d9677', '#9c9577', '#9b9477', '#9a9377', '#999278', '#989278', '#979178', '#969078', '#958f78', '#948e78', '#938e78', '#928d78', '#918c78', '#908b79', '#8f8a79', '#8e8a79', '#8d8979', '#8c8879', '#8b8779', '#8a8779', '#898679', '#888579', '#878479', '#868379', '#858379', '#848279', '#848179', '#838079', '#828079', '#817f79', '#807e79', '#7f7d78', '#7e7d78', '#7d7c78', '#7c7b78', '#7b7a78', '#7a7a78', '#797977', '#787877', '#787777', '#777776', '#767676', '#757575', '#747475', '#737475', '#727374', '#727274', '#717174', '#707173', '#6f7073', '#6e6f73', '#6d6e72', '#6c6e72', '#6c6d72', '#6b6c71', '#6a6c71', '#696b71', '#686a71', '#676970', '#666970', '#656870', '#646770', '#64666f', '#63666f', '#62656f', '#61646f', '#60646f', '#5f636e', '#5e626e', '#5d616e', '#5c616e', '#5b606e', '#5a5f6d', '#595f6d', '#595e6d', '#585d6d', '#575c6d', '#565c6d', '#555b6d', '#545a6c', '#53596c', '#52596c', '#51586c', '#50576c', '#4f576c', '#4e566c', '#4d556c', '#4c546c', '#4b546c', '#4a536b', '#49526b', '#48526b', '#47516b', '#46506b', '#444f6b', '#434f6b', '#424e6b', '#414d6b', '#404d6b', '#3f4c6b', '#3e4b6b', '#3d4a6b', '#3b4a6b', '#3a496b', '#39486b', '#38486b', '#36476b', '#35466b', '#34456b', '#32456b', '#31446b', '#30436c', '#2e436c', '#2d426c', '#2b416c', '#2a406c', '#28406c', '#263f6c', '#243e6c', '#233e6c', '#213d6d', '#1f3c6d', '#1d3b6d', '#1a3b6d', '#183a6d', '#15396d', '#12386d', '#0f386e', '#0b376e', '#06366e', '#01366e', '#00356e', '#00346f', '#00336f', '#00336f', '#00326f', '#00316f', '#00306f', '#00306f', '#002f6f', '#002f6f', '#002e6f', '#002e6e', '#002d6c', '#002c6a', '#002c69', '#002b67', '#002a65', '#002a63', '#002961', '#002860', '#00275e', '#00275c', '#00265a', '#002558', '#002557', '#002455', '#002353', '#002252', '#002250', '#00214e', '#00204d'],
                blur: 15,
                shadow: 250,
                title: 'Densidade Residencial (Rio Branco)'
            });
var format_PopulaocomAcessoat30min_40 = new ol.format.GeoJSON();
var features_PopulaocomAcessoat30min_40 = format_PopulaocomAcessoat30min_40.readFeatures(json_PopulaocomAcessoat30min_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulaocomAcessoat30min_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulaocomAcessoat30min_40.addFeatures(features_PopulaocomAcessoat30min_40);
var lyr_PopulaocomAcessoat30min_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PopulaocomAcessoat30min_40, 
                style: style_PopulaocomAcessoat30min_40,
                popuplayertitle: 'População com Acesso até 30 min (%)',
                interactive: true,
    title: 'População com Acesso até 30 min (%)<br />\
    <img src="styles/legend/PopulaocomAcessoat30min_40_0.png" /> 37,8 - 40<br />\
    <img src="styles/legend/PopulaocomAcessoat30min_40_1.png" /> 40 - 49,9<br />\
    <img src="styles/legend/PopulaocomAcessoat30min_40_2.png" /> 49,9 - 62<br />\
    <img src="styles/legend/PopulaocomAcessoat30min_40_3.png" /> 62 - 72,8<br />\
    <img src="styles/legend/PopulaocomAcessoat30min_40_4.png" /> 72,8 - 82<br />' });
var group_MobilidadedeRioBranco = new ol.layer.Group({
                                layers: [lyr_DomniodoTransportePrivadoRioBranco_31,lyr_LimiteseBarreirasUrbanasRB_32,lyr_MapadeRioBranco_33,lyr_ParagensdeAutocarroRioBranco_34,lyr_PolosdeEmpregoRioBranco_35,lyr_CoberturaCarroRioBranco_36,lyr_GapdeAcessibilidadeModalRioBranco_37,lyr_CoberturaAutocarroRioBranco_38,lyr_DensidadeResidencialRioBranco_39,lyr_PopulaocomAcessoat30min_40,],
                                fold: 'open',
                                title: 'Mobilidade de Rio Branco'});
var group_MobilidadedeSoPaulo = new ol.layer.Group({
                                layers: [lyr_DeslocamentoCrtico1h_21,lyr_LimiteseBarreirasUrbanasSP_22,lyr_MapadeSoPaulo_23,lyr_PolosdeEmpregoSoPaulo_24,lyr_DensidadeResidencialSoPaulo_25,lyr_CoberturaTransportePrivadoSP_26,lyr_CinturodeExclusoPerifrica_27,lyr_CoberturaTransportePblicoSP_28,lyr_EstaesdeMetroComboioeTerminais_29,lyr_RedeEstruturaldeTransporteColetivo_30,],
                                fold: 'open',
                                title: 'Mobilidade de São Paulo'});
var group_MobilidadedePortoVelho = new ol.layer.Group({
                                layers: [lyr_MobilidadeAtivaBicicletaP_8,lyr_PopulaocomAcessoemat30min_9,lyr_RedeCicloviriaExistente_10,lyr_BarreirasUrbanasPortoVelho_11,lyr_MapadePortoVelho_12,lyr_AlcanceTransportePrivadoCarro_13,lyr_PolosdeEmprego_14,lyr_DensidadeResidencial_15,lyr_AlcanceBicicleta30min_16,lyr_VantagemBicicletavsAutocarro_17,lyr_AlcanceAp30min_18,lyr_AlcanceTransportePblico_19,lyr_ParagensdeAutocarroPortoVelho_20,],
                                fold: 'open',
                                title: 'Mobilidade de Porto Velho'});
var group_Brasil = new ol.layer.Group({
                                layers: [lyr_ConcentraodePessoas_1,lyr_Tempo30MinVerde_2,lyr_Tempo30min1HoraAmarelo_3,lyr_Tempo1HoraVermelho_4,lyr_TransportePblicoAutocarro_5,lyr_TransportePrivadoCarro_6,lyr_TransporteAtivoBicicleta_7,],
                                fold: 'open',
                                title: 'Brasil'});

lyr_Positron_0.setVisible(true);lyr_ConcentraodePessoas_1.setVisible(true);lyr_Tempo30MinVerde_2.setVisible(true);lyr_Tempo30min1HoraAmarelo_3.setVisible(true);lyr_Tempo1HoraVermelho_4.setVisible(true);lyr_TransportePblicoAutocarro_5.setVisible(true);lyr_TransportePrivadoCarro_6.setVisible(true);lyr_TransporteAtivoBicicleta_7.setVisible(true);lyr_MobilidadeAtivaBicicletaP_8.setVisible(true);lyr_PopulaocomAcessoemat30min_9.setVisible(true);lyr_RedeCicloviriaExistente_10.setVisible(true);lyr_BarreirasUrbanasPortoVelho_11.setVisible(true);lyr_MapadePortoVelho_12.setVisible(true);lyr_AlcanceTransportePrivadoCarro_13.setVisible(true);lyr_PolosdeEmprego_14.setVisible(true);lyr_DensidadeResidencial_15.setVisible(true);lyr_AlcanceBicicleta30min_16.setVisible(true);lyr_VantagemBicicletavsAutocarro_17.setVisible(true);lyr_AlcanceAp30min_18.setVisible(true);lyr_AlcanceTransportePblico_19.setVisible(true);lyr_ParagensdeAutocarroPortoVelho_20.setVisible(true);lyr_DeslocamentoCrtico1h_21.setVisible(true);lyr_LimiteseBarreirasUrbanasSP_22.setVisible(true);lyr_MapadeSoPaulo_23.setVisible(true);lyr_PolosdeEmpregoSoPaulo_24.setVisible(true);lyr_DensidadeResidencialSoPaulo_25.setVisible(true);lyr_CoberturaTransportePrivadoSP_26.setVisible(true);lyr_CinturodeExclusoPerifrica_27.setVisible(true);lyr_CoberturaTransportePblicoSP_28.setVisible(true);lyr_EstaesdeMetroComboioeTerminais_29.setVisible(true);lyr_RedeEstruturaldeTransporteColetivo_30.setVisible(true);lyr_DomniodoTransportePrivadoRioBranco_31.setVisible(true);lyr_LimiteseBarreirasUrbanasRB_32.setVisible(true);lyr_MapadeRioBranco_33.setVisible(true);lyr_ParagensdeAutocarroRioBranco_34.setVisible(true);lyr_PolosdeEmpregoRioBranco_35.setVisible(true);lyr_CoberturaCarroRioBranco_36.setVisible(true);lyr_GapdeAcessibilidadeModalRioBranco_37.setVisible(true);lyr_CoberturaAutocarroRioBranco_38.setVisible(true);lyr_DensidadeResidencialRioBranco_39.setVisible(true);lyr_PopulaocomAcessoat30min_40.setVisible(true);
var layersList = [lyr_Positron_0,group_Brasil,group_MobilidadedePortoVelho,group_MobilidadedeSoPaulo,group_MobilidadedeRioBranco];
lyr_ConcentraodePessoas_1.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', 'Perc_pesso': 'Perc_pesso', 'Pessoas_%': 'Pessoas_%', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', 'concentracao_pessoas_limpo': 'concentracao_pessoas_limpo', });
lyr_Tempo30MinVerde_2.set('fieldAliases', {'fid': 'fid', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_Tempo30min1HoraAmarelo_3.set('fieldAliases', {'fid': 'fid', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_Tempo1HoraVermelho_4.set('fieldAliases', {'fid': 'fid', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_TransportePblicoAutocarro_5.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', 'Perc_pesso': 'Perc_pesso', 'Pessoas_%': 'Pessoas_%', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_TransportePrivadoCarro_6.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', 'Perc_pesso': 'Perc_pesso', 'Pessoas_%': 'Pessoas_%', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_TransporteAtivoBicicleta_7.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', 'Perc_pesso': 'Perc_pesso', 'Pessoas_%': 'Pessoas_%', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_MobilidadeAtivaBicicletaP_8.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', 'Perc_pesso': 'Perc_pesso', 'Pessoas_%': 'Pessoas_%', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_PopulaocomAcessoemat30min_9.set('fieldAliases', {'fid': 'fid', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_BarreirasUrbanasPortoVelho_11.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'osm_id': 'osm_id', 'name': 'name', 'tipo_barreira': 'tipo_barreira', });
lyr_MapadePortoVelho_12.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_AlcanceTransportePrivadoCarro_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_AlcanceBicicleta30min_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', 'area (km)': 'area (km)', });
lyr_VantagemBicicletavsAutocarro_17.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', 'area (km)': 'area (km)', 'area': 'area', });
lyr_AlcanceAp30min_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_AlcanceTransportePblico_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_ParagensdeAutocarroPortoVelho_20.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'categoria': 'categoria', });
lyr_DeslocamentoCrtico1h_21.set('fieldAliases', {'fid': 'fid', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_LimiteseBarreirasUrbanasSP_22.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'osm_id': 'osm_id', 'name': 'name', 'tipo_barreira': 'tipo_barreira', });
lyr_MapadeSoPaulo_23.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_CoberturaTransportePrivadoSP_26.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_CinturodeExclusoPerifrica_27.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', 'area_km2_vantagem_carro': 'area_km2_vantagem_carro', 'raio_carro_km': 'raio_carro_km', 'raio_transPublic_km': 'raio_transPublic_km', });
lyr_CoberturaTransportePblicoSP_28.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_RedeEstruturaldeTransporteColetivo_30.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', 'Perc_pesso': 'Perc_pesso', 'Pessoas_%': 'Pessoas_%', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_DomniodoTransportePrivadoRioBranco_31.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', 'Perc_pesso': 'Perc_pesso', 'Pessoas_%': 'Pessoas_%', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_LimiteseBarreirasUrbanasRB_32.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'osm_id': 'osm_id', 'name': 'name', 'tipo_barreira': 'tipo_barreira', });
lyr_MapadeRioBranco_33.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_ParagensdeAutocarroRioBranco_34.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'categoria': 'categoria', });
lyr_CoberturaCarroRioBranco_36.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_GapdeAcessibilidadeModalRioBranco_37.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', 'area': 'area', 'area (km)': 'area (km)', });
lyr_CoberturaAutocarroRioBranco_38.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_PopulaocomAcessoat30min_40.set('fieldAliases', {'fid': 'fid', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_ConcentraodePessoas_1.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Perc_pesso': 'TextEdit', 'Pessoas_%': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', 'concentracao_pessoas_limpo': 'TextEdit', });
lyr_Tempo30MinVerde_2.set('fieldImages', {'fid': '', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_Tempo30min1HoraAmarelo_3.set('fieldImages', {'fid': '', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_Tempo1HoraVermelho_4.set('fieldImages', {'fid': '', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_TransportePblicoAutocarro_5.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Perc_pesso': 'TextEdit', 'Pessoas_%': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_TransportePrivadoCarro_6.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Perc_pesso': 'TextEdit', 'Pessoas_%': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_TransporteAtivoBicicleta_7.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Perc_pesso': 'TextEdit', 'Pessoas_%': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_MobilidadeAtivaBicicletaP_8.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Perc_pesso': '', 'Pessoas_%': '', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_PopulaocomAcessoemat30min_9.set('fieldImages', {'fid': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_BarreirasUrbanasPortoVelho_11.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'tipo_barreira': 'TextEdit', });
lyr_MapadePortoVelho_12.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_AlcanceTransportePrivadoCarro_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_AlcanceBicicleta30min_16.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', 'area (km)': 'TextEdit', });
lyr_VantagemBicicletavsAutocarro_17.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', 'area (km)': 'TextEdit', 'area': 'TextEdit', });
lyr_AlcanceAp30min_18.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_AlcanceTransportePblico_19.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_ParagensdeAutocarroPortoVelho_20.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'categoria': '', });
lyr_DeslocamentoCrtico1h_21.set('fieldImages', {'fid': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_LimiteseBarreirasUrbanasSP_22.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'tipo_barreira': 'TextEdit', });
lyr_MapadeSoPaulo_23.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_CoberturaTransportePrivadoSP_26.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_CinturodeExclusoPerifrica_27.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', 'area_km2_vantagem_carro': 'TextEdit', 'raio_carro_km': 'TextEdit', 'raio_transPublic_km': 'TextEdit', });
lyr_CoberturaTransportePblicoSP_28.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_RedeEstruturaldeTransporteColetivo_30.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Perc_pesso': '', 'Pessoas_%': '', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_DomniodoTransportePrivadoRioBranco_31.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Perc_pesso': '', 'Pessoas_%': '', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_LimiteseBarreirasUrbanasRB_32.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'tipo_barreira': 'TextEdit', });
lyr_MapadeRioBranco_33.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_ParagensdeAutocarroRioBranco_34.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'categoria': 'TextEdit', });
lyr_CoberturaCarroRioBranco_36.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_GapdeAcessibilidadeModalRioBranco_37.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', 'area': 'TextEdit', 'area (km)': 'TextEdit', });
lyr_CoberturaAutocarroRioBranco_38.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_PopulaocomAcessoat30min_40.set('fieldImages', {'fid': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_ConcentraodePessoas_1.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', 'Perc_pesso': 'no label', 'Pessoas_%': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', 'concentracao_pessoas_limpo': 'no label', });
lyr_Tempo30MinVerde_2.set('fieldLabels', {'fid': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_Tempo30min1HoraAmarelo_3.set('fieldLabels', {'fid': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_Tempo1HoraVermelho_4.set('fieldLabels', {'fid': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_TransportePblicoAutocarro_5.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', 'Perc_pesso': 'no label', 'Pessoas_%': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_TransportePrivadoCarro_6.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', 'Perc_pesso': 'no label', 'Pessoas_%': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_TransporteAtivoBicicleta_7.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', 'Perc_pesso': 'no label', 'Pessoas_%': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_MobilidadeAtivaBicicletaP_8.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', 'Perc_pesso': 'no label', 'Pessoas_%': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_PopulaocomAcessoemat30min_9.set('fieldLabels', {'fid': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_BarreirasUrbanasPortoVelho_11.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'tipo_barreira': 'no label', });
lyr_MapadePortoVelho_12.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_AlcanceTransportePrivadoCarro_13.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', });
lyr_AlcanceBicicleta30min_16.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', 'area (km)': 'no label', });
lyr_VantagemBicicletavsAutocarro_17.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'prop_is_only_walking': 'no label', 'area (km)': 'no label', 'area': 'no label', });
lyr_AlcanceAp30min_18.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', });
lyr_AlcanceTransportePblico_19.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', });
lyr_ParagensdeAutocarroPortoVelho_20.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'categoria': 'no label', });
lyr_DeslocamentoCrtico1h_21.set('fieldLabels', {'fid': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_LimiteseBarreirasUrbanasSP_22.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'tipo_barreira': 'no label', });
lyr_MapadeSoPaulo_23.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_CoberturaTransportePrivadoSP_26.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', });
lyr_CinturodeExclusoPerifrica_27.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', 'area_km2_vantagem_carro': 'no label', 'raio_carro_km': 'no label', 'raio_transPublic_km': 'no label', });
lyr_CoberturaTransportePblicoSP_28.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', });
lyr_RedeEstruturaldeTransporteColetivo_30.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', 'Perc_pesso': 'no label', 'Pessoas_%': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_DomniodoTransportePrivadoRioBranco_31.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', 'Perc_pesso': 'no label', 'Pessoas_%': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_LimiteseBarreirasUrbanasRB_32.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'tipo_barreira': 'no label', });
lyr_MapadeRioBranco_33.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_ParagensdeAutocarroRioBranco_34.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'categoria': 'no label', });
lyr_CoberturaCarroRioBranco_36.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', });
lyr_GapdeAcessibilidadeModalRioBranco_37.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', 'area': 'no label', 'area (km)': 'no label', });
lyr_CoberturaAutocarroRioBranco_38.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', });
lyr_PopulaocomAcessoat30min_40.set('fieldLabels', {'fid': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_PopulaocomAcessoat30min_40.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});
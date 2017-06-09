    ymaps.ready(init);
      function init(){
        var map = new ymaps.Map("map", {
                center: [55.590346, 38.147420],
                zoom: 15
            });
        map.behaviors.disable('scrollZoom');
        placemark = new ymaps.Placemark([55.590346, 38.147420], {
          hintContent: 'Хата Костика',
          balloonContentHeader: 'Хата Костика',
          balloonContentBody: 'пос. Кратово, ул. Симбирская, д.5, кв.4'
        });
        map.geoObjects.add(placemark);
      }
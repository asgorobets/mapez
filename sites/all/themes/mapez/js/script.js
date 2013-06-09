(function ($) {

  Drupal.behaviors.mapezMap = {
    attach: function (context, settings) {
      $('#leaflet-map-wrapper #leaflet-map').height($(window).height() -70);

      $('.results-list li').click(function() {
        var lat = $(this).children('.result-lat').html();
        var lon = $(this).children('.result-lon').html();
        Drupal.settings.leaflet[0].lMap.panTo([lat, lon]);
        var layers = Drupal.settings.leaflet[0].lMap._layers;
        for (var prop in layers) {
          if (!isNaN(prop)) {
            if (lat == Drupal.settings.leaflet[0].lMap._layers[prop]._latlng.lat
              && lon == Drupal.settings.leaflet[0].lMap._layers[prop]._latlng.lng) {
              Drupal.settings.leaflet[0].lMap._layers[prop].openPopup();
            }
          }
        }
      });
    }
  };


})(jQuery);
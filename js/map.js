$(document).ready( function()
     {
     var map = new L.Map('map');
 
     var theAttribution = 'Map tiles by [Stamen]';
 
     // Change this url to use different set of map tiles
     var theTiles = 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png';
     var theSubdomains = ['a', 'b', 'c', 'd'];
     map.setView( new L.LatLng( 38.9, -77.05 ), 11 ).addLayer
          ( new L.TileLayer
               ( theTiles
               ,    { maxZoom: 18
                    , attribution: theAttribution
                    , subdomains: theSubdomains
                    }
               )
          );
      map.scrollWheelZoom.disable();
      } );

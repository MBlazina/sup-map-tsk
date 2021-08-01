// Initialize and add the map
function initMap() {
    // The location of Uluru
    const munich = { lat: 48.137154, lng: 11.576124 };
    // The map, centered at munich
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: munich,
    });
    // The marker, positioned at munich
    const marker = new google.maps.Marker({
      position: munich,
      map: map,
    });
  }
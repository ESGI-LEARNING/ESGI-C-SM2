import '../../node_modules/leaflet/dist/leaflet.js';

export const Leaflet = () => {
  console.log('Leaflet');
  console.log(document.getElementById('map'));
  if (document.getElementById('map')) {
    const map = L.map('map').setView([51.505, -0.09], 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const fetchData = async () => {
      const response = await fetch(
        'https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records?order_by=start_date&limit=61&offset=0&exclude=category_id%3Avenue-paralympic&lang=fr&timezone=Europe%2FParis&include_links=false&include_app_metas=true',
      );
      const data = await response.json();
      return data;
    };

    fetchData().then((data) => {
      const results = data.results;
      results.forEach(
        ({
          point_geo: { lat, lon: lng },
          nom_site,
          sports,
          start_date,
          end_date,
        }) => {
          const marker = L.marker([lat, lng]).addTo(map);
          marker
            .bindPopup(
              `<b>${nom_site}</b><br>${sports}<br>${start_date} - ${end_date}`,
            )
            .openPopup();
        },
      );
    });
  }
};
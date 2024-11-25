function trackLocationAndProvideInfo() {
    if (!navigator.geolocation) {
        alert('La geolocalización no está soportada por tu navegador.');
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;

            console.log(`Latitud: ${latitude}, Longitud: ${longitude}`);

            provideTouristInfo(latitude, longitude);
        },
        (error) => {
            console.error('Error al obtener la ubicación:', error);
            alert('No se pudo obtener la ubicación. Verifica tus permisos o conexión.');
        }
    );
}

function provideTouristInfo(lat, lng) {
    const touristLocations = [
        {
            name: 'Torre Eiffel',
            description: 'Un monumento icónico de París, Francia.',
            latitude: 48.8584,
            longitude: 2.2945,
        },
        {
            name: 'Gran Cañón',
            description: 'Un espectacular cañón en Arizona, EE. UU.',
            latitude: 36.1069,
            longitude: -112.1129,
        },
        {
            name: 'Coliseo Romano',
            description: 'Un antiguo anfiteatro en Roma, Italia.',
            latitude: 41.8902,
            longitude: 12.4922,
        },
    ];

    const closestLocation = touristLocations.reduce((closest, location) => {
        const distance = calculateDistance(lat, lng, location.latitude, location.longitude);
        return distance < closest.distance ? { ...location, distance } : closest;
    }, { distance: Infinity });

    if (closestLocation.distance <= 10) { // Si está a 10 km o menos
        alert(`Estás cerca de ${closestLocation.name}: ${closestLocation.description}`);
    } else {
        alert('No se encontraron lugares turísticos cercanos.');
    }
}

// Calcula la distancia entre dos coordenadas (en kilómetros)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const toRadians = (degrees) => degrees * (Math.PI / 180);
    const R = 6371; // Radio de la Tierra en kilómetros
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Inicia el rastreo
trackLocationAndProvideInfo();
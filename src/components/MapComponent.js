import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const MapComponent = ({ profile }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    // Reset error state on each render
    setError(null);

    if (!mapContainer.current) return;

    // Validate coordinates if profile exists
    if (profile) {
      const { lat, lng } = profile;
      if (
        typeof lat !== 'number' || typeof lng !== 'number' ||
        isNaN(lat) || isNaN(lng) ||
        lat < -90 || lat > 90 || lng < -180 || lng > 180
      ) {
        setError('Invalid latitude or longitude values.');
        return;
      }
    }

    try {
      // Initialize the map
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: {
          version: 8,
          sources: {
            osm: {
              type: 'raster',
              tiles: [
                'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
                'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
                'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
              ],
              tileSize: 256,
              attribution:
                '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            },
          },
          layers: [
            {
              id: 'osm-tiles',
              type: 'raster',
              source: 'osm',
              minzoom: 0,
              maxzoom: 19,
            },
          ],
        },
        center: profile ? [profile.lng, profile.lat] : [-74.0060, 40.7128],
        zoom: profile ? 10 : 2,
      });

      // Add marker if profile exists and coordinates are valid
      if (profile) {
        new maplibregl.Marker({ color: 'red' })
          .setLngLat([profile.lng, profile.lat])
          .addTo(map.current);
      }

      // Listen for map load errors (e.g., tile fetch failures)
      map.current.on('error', (e) => {
        setError('Failed to load map tiles. Please check your internet connection.');
      });

      // Ensure map loads successfully
      map.current.on('load', () => {
        setError(null); // Clear error if map loads
      });
      

    } catch (err) {
      setError('Failed to initialize the map: ' + err.message);
    }

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [profile]);

  // Render error message or map
  return (
    <div className='map-comp' style={{ width: '100%', height: '400px', position: 'relative' }}>
      {error ? (
        <div className="map-error" style={{ padding: '20px', color: 'red', textAlign: 'center' }}>
          <p>{error}</p>
          <p>Unable to display the map at this time.</p>
        </div>
      ) : (
        <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
      )}
    </div>
  );
};

export default MapComponent;
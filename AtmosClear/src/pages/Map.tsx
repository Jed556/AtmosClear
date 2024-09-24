import React, { useEffect, useRef } from 'react';

const MapEmbed: React.FC = () => {
    return (
        <iframe className='map-embed'
            src="https://www.iqair.com/air-quality-map?lat=14.288459777778&lng=121.01183316667&zoomLevel=6"
            width="100%"
            height="100%"
            style={{ position: 'absolute', border: 0, minHeight: '168vh' , top: -68}}
            allowFullScreen={false}
            loading="lazy"
        ></iframe>
    );
};

export default MapEmbed;
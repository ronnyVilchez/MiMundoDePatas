import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MapaDorado() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="relative inline-block">
      <Link
        to="#"
        onMouseEnter={() => setShowMap(true)}
        onMouseLeave={() => setShowMap(false)}
        className="text-black hover:underline"
      >
        La Primavera: Eleodoro Demetrio Coral N°125, Chiclayo.
      </Link>

      {showMap && (
        <section className="absolute z-10 bottom-full mb-2 p-4 bg-white border rounded shadow-lg">
          <p>La Primavera: Eleodoro Demetrio Coral N°125, Chiclayo.</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.63158746544326!2d-79.84387481694665!3d-6.757000060572142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904ceec44b95ea7f%3A0x6f9d7b55daab0529!2sMimaskot!5e0!3m2!1ses-419!2spe!4v1723953392171!5m2!1ses-419!2spe" width="300" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
      )}
    </div>
  );
}

export default MapaDorado;

import React from 'react';
import styles from './ServiceDetail.module.css';

const ServiceDetail = ({ service }) => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">{service.title}</h1>
      <img src={service.companyImage} alt="Company" className="w-24 h-24 object-cover" />
      <p>{service.longDescription}</p>
      {service.images && service.images.map((img, idx) => (
        <img key={idx} src={img} alt={`Detail ${idx}`} className="w-full max-w-md my-2" />
      ))}
      <div className="mt-4">
        <h3 className="font-semibold">Options by Weight:</h3>
        <ul>
          {service.pricing.map((option, idx) => (
            <li key={idx} className="text-sm">{option.weight}kg: ${option.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetail;
import React, { useState } from 'react';

export const VetAppointmentForm = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    petName: '',
    ownerPhone: '',
    ownerEmail: '',
    petAge: '',
    petBreed: '',
    appointmentReason: '',
    description: '',
    additionalInfo: '',
  });

  const [reasonDescription, setReasonDescription] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReasonChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      appointmentReason: value,
    });
    
    // Set the description based on the reason
    switch (value) {
      case 'bath':
        setReasonDescription('Descripción para baño: Indique el tipo de baño y frecuencia.');
        break;
      case 'treatment':
        setReasonDescription('Descripción para tratamiento: Indique el tipo de tratamiento y duración.');
        break;
      case 'surgery':
        setReasonDescription('Descripción para cirugía: Proporcione detalles sobre la cirugía y cualquier preparación.');
        break;
      default:
        setReasonDescription('');
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-xl font-semibold mb-4'>Agendar Cita con el Veterinario</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='ownerName' className='block text-sm font-medium'>Nombre del Dueño</label>
          <input
            type='text'
            id='ownerName'
            name='ownerName'
            value={formData.ownerName}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            required
          />
        </div>

        <div>
          <label htmlFor='petName' className='block text-sm font-medium'>Nombre de la Mascota</label>
          <input
            type='text'
            id='petName'
            name='petName'
            value={formData.petName}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            required
          />
        </div>

        <div>
          <label htmlFor='ownerPhone' className='block text-sm font-medium'>Teléfono del Dueño</label>
          <input
            type='tel'
            id='ownerPhone'
            name='ownerPhone'
            value={formData.ownerPhone}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            required
          />
        </div>

        <div>
          <label htmlFor='ownerEmail' className='block text-sm font-medium'>Email del Dueño</label>
          <input
            type='email'
            id='ownerEmail'
            name='ownerEmail'
            value={formData.ownerEmail}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            required
          />
        </div>

        <div>
          <label htmlFor='petAge' className='block text-sm font-medium'>Edad de la Mascota</label>
          <input
            type='number'
            id='petAge'
            name='petAge'
            value={formData.petAge}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            required
          />
        </div>

        <div>
          <label htmlFor='petBreed' className='block text-sm font-medium'>Raza de la Mascota</label>
          <input
            type='text'
            id='petBreed'
            name='petBreed'
            value={formData.petBreed}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            required
          />
        </div>

        <div>
          <label htmlFor='appointmentReason' className='block text-sm font-medium'>Motivo de la Cita</label>
          <select
            id='appointmentReason'
            name='appointmentReason'
            value={formData.appointmentReason}
            onChange={handleReasonChange}
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            required
          >
            <option value='' disabled>Selecciona el motivo</option>
            <option value='bath'>Baño</option>
            <option value='treatment'>Tratamiento</option>
            <option value='surgery'>Cirugía</option>
          </select>
        </div>

        {reasonDescription && (
          <div>
            <p className='text-sm text-gray-600'>{reasonDescription}</p>
          </div>
        )}

        <div>
          <label htmlFor='description' className='block text-sm font-medium'>Descripción del Motivo</label>
          <textarea
            id='description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            rows='4'
            required
          />
        </div>

        <div>
          <label htmlFor='additionalInfo' className='block text-sm font-medium'>Información Adicional</label>
          <textarea
            id='additionalInfo'
            name='additionalInfo'
            value={formData.additionalInfo}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            rows='4'
          />
        </div>

        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'
        >
          Agendar Cita
        </button>
      </form>
    </div>
  );
};


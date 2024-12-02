import React from 'react';
import PropTypes from 'prop-types';
import FormSection from './FormSection/FormSection';
import Label from './Label';
import Input from './Input'
import Button from '../Button/Button';
import styles from '../../styles/sass/form.module.scss';

export default function Form({ vehicleName, vehiclePlate, hourlyRate, onChange, onSubmit }) {
  return (
    <FormSection className={styles.form} onSubmit={onSubmit}>
      <Label htmlFor='vehicle' text={'Veículo'}/>
      <Input
        type='text'
        id='vehicle'
        value={vehicleName}
        onChange={(e) => onChange('vehicleName', e.target.value)}
      />
      <Label htmlFor='plate' text={'Placa'}/>
      <Input
        type='text'
        id='plate' 
        value={vehiclePlate}
        onChange={(e) => onChange('vehiclePlate', e.target.value)}
      />
      <Label htmlFor='hourlyRate' text={'Valor por hora (R$)'}/>
      <Input
        type='number'
        id='hourlyRate'
        value={hourlyRate}
        onChange={(e) => onChange('hourlyRate', e.target.value)}
      />
      <Button type='submit' text='Inserir'/>
    </FormSection>
  );
}

Form.propTypes = {
  vehicleName: PropTypes.string.isRequired,
  vehiclePlate: PropTypes.string.isRequired,
  hourlyRate: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
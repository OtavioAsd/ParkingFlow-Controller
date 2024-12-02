import React, { useState} from 'react';
import Render from '../Table/Table';
import Header from '../Header/Header';
import FormSection from '../Form/FormSection/FormSection';
import Label from '../Form/FormSection/Label';
import Input from '../Form/FormSection/Input';
import Button from '../Button/Button';
import styles from '../../styles/sass/home.module.scss';
import Footer from '../Footer/Footer';

export default function Home() {

  const [vehicleName, setVehicleName] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicles, setVehicles] = useState([]);
  const [hourlyRate, setHourlyRate] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    if (!vehicleName.trim() || !vehiclePlate.trim() || !hourlyRate.trim()) {
      alert('Por favor, preencha todos os campos antes de inserir.');
      return;
    }

    const now = new Date();
    setVehicles([
      ...vehicles,
      { name: vehicleName, plate: vehiclePlate, entryTime: now },
    ]);

    setVehicleName('');
    setVehiclePlate('');
  };

  const handleRemove = (index) => {
    setVehicles(vehicles.filter((_, i) => i !== index));
  };

  const handleComplete = (index) => {
    const now = new Date();
    const vehicle = vehicles[index];

    const elapsedTimeMs = now - vehicle.entryTime;
    const elapsedTimeHours = Math.floor(elapsedTimeMs / (1000 * 60 * 60));
    const elapsedTimeMinutes = Math.floor(
      (elapsedTimeMs % (1000 * 60 * 60)) / (1000 * 60)
    );
    const totalCost = elapsedTimeMs / (1000 * 60 * 60) * parseFloat(hourlyRate);

    alert(
      `O veículo ${vehicle.name} ficou por ${elapsedTimeHours}h e ${elapsedTimeMinutes}min. \nCusto total: R$ ${totalCost.toFixed(2)}`
    );

    handleRemove(index);
  };

  return (
    <div className={styles.wrapper}>
      <Header className={styles.header}/>
      <FormSection className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputSection}>
          <Label htmlFor='vehicle' text='Veículo' className={styles.label} />
          <Input
            className={styles.input}
            type='text'
            id='vehicle'
            maxLength={20}
            value={vehicleName}
            onChange={(e) => setVehicleName(e.target.value.toUpperCase())}
            autoComplete='off'
          />
          <Label htmlFor='plate' text='Placa' className={styles.label}/>
          <Input
            className={styles.input}
            type='text'
            id='plate'
            maxLength={7}
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value.toUpperCase())}
            autoComplete='off'
          />
          <Label htmlFor='hourlyRate' className={styles.label} text='Valor por hora (R$)' />
          <Input
            className={styles.hourlyRateInput}
            type='number'
            id='hourlyRate'
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
          />
          <Button className={styles.addBtn} type='submit' text='Adicionar' />
        </div>
      </FormSection>
      <Render 
      vehicles={vehicles} 
      onRemove={handleRemove} 
      onComplete={handleComplete} 
      />
      <div className={styles.footerWrapper}>
      <Footer className={styles.footer} >
        <div>
        <p> &copy; Desenvolvido por Otávio Daniel</p> 
        </div>
      </Footer>
      </div>
    </div>
  );
}


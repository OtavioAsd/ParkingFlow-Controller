import Button from "../Button/Button";
import TableSection from './TableSection/TableSection';
import Thead from "./TableSection/Thead"
import Th from "./TableSection/Th"
import Tbody from "./TableSection/Tbody"
import Td from "./TableSection/Td"
import styles from "../../styles/sass/table.module.scss"



export default function Table({ vehicles, onRemove, onComplete }) {
  return (
    <TableSection className={styles.wrapper}>
      <Thead className={styles.thead}>
        <tr className={styles.tr}>
          <Th className={styles.th} text={'#'}/>
          <Th className={styles.th} text={'Veículo'}/>
          <Th className={styles.th} text={'Placa'}/>
          <Th className={styles.th} text={'Ações'}/>
        </tr>
        </Thead>
      <Tbody className={styles.tbody}>
        {vehicles.map((vehicle, index) => (

          <tr key={index}>
            <Td className={styles.td} text={index + 1}/>
            <Td className={styles.td} text={vehicle.name}/>
            <Td className={styles.td} text={vehicle.plate}/>
            <Td>
              <Button className={styles.concludeButton} onClick={() => onComplete(index)} text={'Concluir'}/>
              <Button className={styles.removeButton} onClick={() => onRemove(index)} text={'Remover'}/>
            </Td>
          </tr>

        ))}
      </Tbody>
    </TableSection>
  );
}


import { Controller } from 'react-hook-form';
import { EquipmentCheckbox } from '..';
import s from './vehicleEquipments.module.scss';

const VehicleEquipments = ({ control, className = null }) => (
  <div className={className}>
    <p className={s.filterBlockName}>Vehicle equipment</p>
    <div className={s.equipmentOptions}>
      {['AC', 'transmission', 'kitchen', 'TV', 'bathroom'].map((item) => (
        <Controller
          key={item}
          name={item}
          control={control}
          render={({ field: { value, onChange } }) => (
            <EquipmentCheckbox item={item} value={value} onChange={onChange} />
          )}
        />
      ))}
    </div>
  </div>
);

export default VehicleEquipments;

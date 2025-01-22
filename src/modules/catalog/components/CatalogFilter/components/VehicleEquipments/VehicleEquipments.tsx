import { Controller, Control } from 'react-hook-form';
import { EquipmentCheckbox } from '..';
import { ClassNameProp } from 'shared/types';
import { Filter } from 'shared/types';
import s from './vehicleEquipments.module.scss';

interface VehicleEquipmentsProps extends ClassNameProp {
  control: Control<Filter>;
}

const equipmentKeys: (keyof Filter)[] = [
  'AC',
  'transmission',
  'kitchen',
  'TV',
  'bathroom',
];

const VehicleEquipments = ({ control, className }: VehicleEquipmentsProps) => (
  <div className={className}>
    <p className={s.filterBlockName}>Vehicle equipment</p>
    <div className={s.equipmentOptions}>
      {equipmentKeys.map((item) => (
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

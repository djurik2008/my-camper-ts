import { Controller, Control } from 'react-hook-form';
import { TypeRadio } from '..';
import { ClassNameProp } from 'shared/types';
import { Filter } from 'shared/types';
import s from './vehicleTypes.module.scss';

interface VehicleTypesProps extends ClassNameProp {
  control: Control<Filter>;
}

const VehicleTypes = ({ control, className }: VehicleTypesProps) => (
  <div className={className}>
    <p className={s.filterBlockName}>Vehicle type</p>
    <div className={s.typeOptions}>
      {['panelTruck', 'fullyIntegrated', 'alcove'].map((type) => (
        <Controller
          key={type}
          name="form"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TypeRadio type={type} value={value} onChange={onChange} />
          )}
        />
      ))}
    </div>
  </div>
);

export default VehicleTypes;

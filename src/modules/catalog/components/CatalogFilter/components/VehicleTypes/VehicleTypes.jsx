import { Controller } from 'react-hook-form';
import { TypeRadio } from '..';
import s from './vehicleTypes.module.scss';

const VehicleTypes = ({ control, className = null }) => (
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

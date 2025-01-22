import { Controller, Control } from 'react-hook-form';
import { LocationInput } from '..';
import { ClassNameProp } from 'shared/types';
import { Filter } from 'shared/types';

interface LocationFilterProps extends ClassNameProp {
  control: Control<Filter>;
}

const LocationFilter = ({ control, className }: LocationFilterProps) => (
  <div className={className}>
    <Controller
      name="location"
      control={control}
      render={({ field }) => <LocationInput field={field} />}
    />
  </div>
);

export default LocationFilter;

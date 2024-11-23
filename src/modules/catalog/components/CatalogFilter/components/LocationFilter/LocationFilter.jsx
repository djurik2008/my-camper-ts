import { Controller } from 'react-hook-form';
import { LocationInput } from '..';

const LocationFilter = ({ control, className = null }) => (
  <div className={className}>
    <Controller
      name="location"
      control={control}
      render={({ field }) => <LocationInput field={field} />}
    />
  </div>
);

export default LocationFilter;

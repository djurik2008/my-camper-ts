import { useForm, Controller } from 'react-hook-form';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { setFilter } from '@redux/filter/filterSlice';
import { EquipmentCheckbox, TypeRadio, LocationInput } from './components';
import { SubmitButton } from 'shared/components';
import s from './catalogFilter.module.scss';

const CatalogFilter = ({ className = null }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      location: '',
      AC: false,
      transmission: '',
      kitchen: false,
      TV: false,
      bathroom: false,
      form: '',
    },
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setFilter(data));
  };

  return (
    <section className={s.filtersSection}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(s.filterForm, className && className)}
      >
        <Controller
          name="location"
          control={control}
          render={({ field }) => (
            <LocationInput field={field} className={s.locationInput} />
          )}
        />

        <p className={s.filtersTitle}>Filters</p>

        <div>
          <p className={s.filterBlockName}>Vehicle equipment</p>
          <div className={s.equipmentOptions}>
            {['AC', 'transmission', 'kitchen', 'TV', 'bathroom'].map((item) => (
              <Controller
                key={item}
                name={item}
                control={control}
                render={({ field: { value, onChange } }) => (
                  <EquipmentCheckbox
                    item={item}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            ))}
          </div>
        </div>

        <div>
          <p className={s.filterBlockName}>Vehicle type</p>
          <div className={s.typeOptions}>
            {['van', 'fullyIntegrated', 'alcove'].map((type) => (
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

        <SubmitButton text={'Search'} />
      </form>
    </section>
  );
};

export default CatalogFilter;

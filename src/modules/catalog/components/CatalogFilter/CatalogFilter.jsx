import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import isEqual from 'lodash/isEqual';
import { setFilter, clearFilter } from '@redux/filter/filterSlice';
import { selectFilter } from '@redux/filter/filterSelectors';
import { clearCampers } from '@redux/campers/campersSlice';
import { initialFilter } from '@redux/filter/filterSlice';
import { useOutsideClickWithButton } from 'hooks/useOutsideClickWithButton';
import { LocationFilter, VehicleEquipments, VehicleTypes } from './components';
import { SubmitButton } from 'shared/components';
import s from './catalogFilter.module.scss';

const CatalogFilter = ({
  className = null,
  isOpen = null,
  onClose = null,
  filtersBtnRef = null,
}) => {
  const filter = useSelector(selectFilter);
  const filterSectionRef = useRef(null);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: filter,
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(clearCampers());
    dispatch(setFilter(data));
    if (onClose) onClose();
  };

  const onReset = () => {
    const isFilterChanged = !isEqual(filter, initialFilter);

    if (!isFilterChanged) {
      reset(filter);
    } else {
      dispatch(clearFilter());
      dispatch(clearCampers());
      reset(initialFilter);
    }
  };

  useOutsideClickWithButton(filterSectionRef, filtersBtnRef, isOpen, onClose);

  return (
    <section
      className={clsx(s.filtersSection, isOpen && s.open, className)}
      ref={filterSectionRef}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(s.filterForm, isOpen && s.open)}
      >
        <LocationFilter control={control} className={s.locationFilter} />

        <p className={s.filtersTitle}>Filters</p>

        <VehicleEquipments control={control} className={s.vehicleEquipments} />

        <VehicleTypes control={control} className={s.vehicleTypes} />

        <div className={s.formBtnsWrapper}>
          <SubmitButton text={'Search'} className={s.responsiveSubBtn} />
          <button type="button" className={s.resetFilterBtn} onClick={onReset}>
            Reset filter
          </button>
        </div>
      </form>
    </section>
  );
};

export default CatalogFilter;

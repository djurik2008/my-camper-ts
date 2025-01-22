import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useRef, RefObject } from 'react';
import isEqual from 'lodash/isEqual';
import { AppDispatch, useAppSelector } from '@redux/store';
import { setFilter, clearFilter } from '@redux/filter/filterSlice';
import { selectFilter } from '@redux/filter/filterSelectors';
import { clearCampers } from '@redux/campers/campersSlice';
import { initialFilter } from '@redux/filter/filterSlice';
import { useOutsideClickWithButton } from 'hooks/useOutsideClickWithButton';
import { LocationFilter, VehicleEquipments, VehicleTypes } from './components';
import { SubmitButton } from 'shared/components';
import { ClassNameProp } from 'shared/types';
import { Filter } from 'shared/types';
import s from './catalogFilter.module.scss';

interface CatalogFilterProps extends ClassNameProp {
  isOpen?: boolean;
  onClose?: () => void;
  filtersBtnRef?: RefObject<HTMLButtonElement>;
}

const CatalogFilter = ({
  className,
  isOpen,
  onClose,
  filtersBtnRef,
}: CatalogFilterProps) => {
  const filter = useAppSelector(selectFilter);
  const filterSectionRef = useRef(null);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: filter,
  });

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: Filter) => {
    dispatch(clearCampers());
    dispatch(setFilter(data));
    if (onClose) onClose();
  };

  const onReset = () => {
    const isFilterChanged = !isEqual(filter, initialFilter);

    if (!isFilterChanged) {
      reset(initialFilter);
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

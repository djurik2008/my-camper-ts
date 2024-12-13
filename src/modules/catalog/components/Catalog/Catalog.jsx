import { useSelector, useDispatch } from 'react-redux';
import { useState, useMemo, useRef } from 'react';
import {
  selectPage,
  selectTotalPages,
  selectIsLoading,
} from '@redux/campers/campersSelectors';
import { setPage } from '@redux/campers/campersSlice';
import { useMedia } from 'hooks/useMedia';
import { Container, LoadMoreButton } from 'shared/components';
import { CatalogList, CatalogFilter, FiltersButton } from 'modules/catalog';
import s from './catalog.module.scss';

const Catalog = () => {
  const [isOpenFilterSection, setIsOpenFilterSection] = useState(false);
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectIsLoading);
  const { isMobile, isTablet } = useMedia();
  const filtersBtnRef = useRef(null);

  const loadMore = () => {
    dispatch(setPage(page + 1));
  };

  const filtersBtnOnClick = () => setIsOpenFilterSection((ps) => !ps);

  const responsiveFilterProps = useMemo(
    () =>
      isMobile || isTablet
        ? {
            isOpen: isOpenFilterSection,
            onClose: filtersBtnOnClick,
            filtersBtnRef,
          }
        : {},
    [isMobile, isTablet, isOpenFilterSection]
  );

  return (
    <main>
      <Container className={s.catalogContainer}>
        {(isMobile || isTablet) && (
          <FiltersButton
            className={s.catalogFiltersBtn}
            onClick={filtersBtnOnClick}
            ref={filtersBtnRef}
          />
        )}
        <CatalogFilter {...responsiveFilterProps} />
        <CatalogList>
          {page < totalPages && (
            <LoadMoreButton
              onClick={loadMore}
              isLoading={isLoading}
              className={s.loadMoreBtn}
            />
          )}
        </CatalogList>
      </Container>
    </main>
  );
};

export default Catalog;

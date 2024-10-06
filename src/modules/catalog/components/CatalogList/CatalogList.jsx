import { CatalogItem } from 'modules/catalog';
import s from './catalogList.module.scss';

const CatalogList = ({ campersList }) => {
  return (
    <ul className={s.catalogList}>
      {campersList.map((camper) => (
        <li key={camper.id}>
          <CatalogItem camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CatalogList;

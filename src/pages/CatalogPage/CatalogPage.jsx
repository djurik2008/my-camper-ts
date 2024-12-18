import { Catalog } from 'modules/catalog';
import { useDoneProgressBar } from 'hooks/useDoneProgressBar';

const CatalogPage = () => {
  useDoneProgressBar();

  return <Catalog />;
};

export default CatalogPage;

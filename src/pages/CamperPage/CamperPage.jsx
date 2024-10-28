import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCamperById } from '@redux/camper/camperOperations';
import s from './camperPage.module.scss';

const CamperPage = () => {
  const dispatch = useDispatch();
  const { camperId } = useParams();

  useEffect(() => {
    dispatch(getCamperById(Number(camperId)));
  }, [dispatch, camperId]);

  return <h1 className={s.title}>Camper details</h1>;
};

export default CamperPage;

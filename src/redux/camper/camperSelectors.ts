import { RootState } from '@redux/store';

export const selectCamper = (state: RootState) => state.camper.camper;

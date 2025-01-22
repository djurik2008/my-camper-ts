import { RootState } from '@redux/store';

export const selectCampersItems = (state: RootState) => state.campers.items;
export const selectIsLoading = (state: RootState) => state.campers.isLoading;
export const selectSelected = (state: RootState) => state.campers.selected;
export const selectPage = (state: RootState) => state.campers.page;
export const selectTotalPages = (state: RootState) => state.campers.totalPages;

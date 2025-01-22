import { useContext } from 'react';
import { NprogressContext } from 'context/NprogressProvider';

export const useNProgress = () => useContext(NprogressContext);

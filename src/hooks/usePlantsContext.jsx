import { useContext } from 'react';
import { PlantsContext } from '../context/PlantsContext';

export const usePlantsContext = () => {
    const context = useContext(PlantsContext);

    if(!context) {
        throw Error('context error!')
    }

    return context;
}
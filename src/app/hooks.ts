import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';

export const userAppDispatch: () => AppDispatch = useDispatch;
export const userAppSelector: TypedUseSelectorHook = useSelector;
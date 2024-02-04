import { ReactElement } from 'react';
import { CustomCompProps } from '../../App';
import { ButtonType } from '../../types';
import type { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../store';
import { useLocation, useNavigate } from 'react-router-dom';

interface SubmitButtonProps extends CustomCompProps {
  text: string;
  type?: Extract<ButtonType, 'reset'>;
  size?: string;
  color?: string;
  reducer: ActionCreatorWithoutPayload;
}

const ResetButton = ({ text, type, size = 'btn-md', color = 'btn-primary', reducer }: SubmitButtonProps): ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => {
    dispatch(reducer());
    navigate(pathname);
  };

  return (
    <button onClick={handleClick} type={type} className={`btn btn-block uppercase ${size} ${color}`}>
      {text || 'reset'}
    </button>
  );
};
export default ResetButton;

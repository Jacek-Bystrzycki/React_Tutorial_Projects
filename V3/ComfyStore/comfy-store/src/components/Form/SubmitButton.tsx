import { ReactElement } from 'react';
import { CustomCompProps } from '../../App';
import { ButtonType } from '../../types';
import { useNavigation } from 'react-router-dom';

interface SubmitButtonProps extends CustomCompProps {
  text: string;
  type?: Extract<ButtonType, 'submit'>;
  size?: string;
  color?: string;
}

const SubmitButton = ({ text, type, size = 'btn-md', color = 'btn-primary' }: SubmitButtonProps): ReactElement => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button type={type} className={`btn  btn-block uppercase ${size} ${color}`} disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  );
};
export default SubmitButton;

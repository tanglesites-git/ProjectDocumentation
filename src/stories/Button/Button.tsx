import './button.scss';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  kind?: 'square' | 'rounded' | 'pill';
  onClick?: () => void;
}


export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  kind = 'square',
  ...props
}: ButtonProps) => {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <button
      type="button"
      className={['button', size, mode, kind].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

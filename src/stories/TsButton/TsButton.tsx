import "./TsButton.scss";


interface TsButtonProps {
  material?: 'solid' | 'outline'
  background?: 'information' | 'danger' | 'warning' | 'success' | 'error' | 'muted'
  label: string;
  size?: 'small' | 'medium' | 'large' 
  shape?: 'sharp' | 'soft' | 'pill'
}

const TsButton: React.FC<TsButtonProps> = ({label, material = 'solid', background = 'information', size = 'medium', shape = 'sharp' }) => {
  return (
    <button type="button"
      className={`ts-btn ${material} ${background} ${size} ${shape}`}
    >
      {label}
    </button>
  )
}


export default TsButton;
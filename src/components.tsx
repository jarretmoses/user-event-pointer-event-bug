import './index.css';

interface Props {
  onClick(param?: any): void;
}

export const ComponentWithoutParent = ({onClick}: Props) => {
  return (
    <div
      className='clickable-el'
      onClick={onClick}
    >
      Click me
    </div>
  )
}

export const ComponentWithParent = ({ onClick }: Props) => {
  return (
    <div
      className='parent'
      style={{pointerEvents: 'none'}}
    >
      <div
        className='clickable-el'
        onClick={onClick}
      >
        Click me
      </div>
    </div>
  )
}

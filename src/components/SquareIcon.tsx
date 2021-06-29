interface SquareIconProps {
  squareColor: string;
}


export function SquareIcon({ squareColor }: SquareIconProps) {
  return (
    <div className='squareIcon' style={{ 'background': squareColor }}>
      &nbsp;
    </div >
  )
}
interface FlagProps {
  code: string;
  name: string;
  className?: string;
}

const FLAG_BASE = 'https://flagcdn.com/w320';

export function Flag({ code, name, className = '' }: FlagProps) {
  return (
    <img
      src={`${FLAG_BASE}/${code}.png`}
      srcSet={`${FLAG_BASE}/${code}.png 1x, https://flagcdn.com/w640/${code}.png 2x`}
      alt={`${name} flag`}
      className={`block object-cover ${className}`}
      loading="eager"
      draggable={false}
    />
  );
}

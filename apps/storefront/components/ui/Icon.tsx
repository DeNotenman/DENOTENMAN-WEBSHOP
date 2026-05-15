type IconProps = {
  name: string;
  alt?: string;
  className?: string;
};

export function Icon({ name, alt = "", className = "" }: IconProps) {
  return (
    <img
      aria-hidden={alt ? undefined : true}
      alt={alt}
      className={`ui-icon ${className}`.trim()}
      src={`/icons/${name}.png`}
    />
  );
}

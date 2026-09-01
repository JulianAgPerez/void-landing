export default function MangaPanel({
  children,
  className = '',
  variant = 'frame',
  rotation = 0,
  style,
}) {
  if (variant === 'accent') {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none ${className}`}
        style={style}
      />
    )
  }

  const isFloat = variant === 'float'

  return (
    <div
      aria-hidden={!children ? 'true' : undefined}
      className={`border border-white/[0.12] bg-white/[0.02] ${isFloat ? 'shadow-lg shadow-black/20' : ''} ${className}`}
      style={{
        transform: isFloat ? `rotate(${rotation}deg)` : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

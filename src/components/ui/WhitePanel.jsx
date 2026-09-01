export default function WhitePanel({
  children,
  className = '',
  style,
  dark = true,
}) {
  return (
    <div
      className={`bg-void-50 shadow-lg shadow-black/20 ${dark ? 'text-void-900' : 'text-void-100'} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

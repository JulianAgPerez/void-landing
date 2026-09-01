export default function PaperPanel({
  children,
  className = '',
  style,
}) {
  return (
    <div
      className={`border-2 border-paper-ink bg-paper text-paper-ink ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
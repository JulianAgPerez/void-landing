export default function PaperPanel({
  children,
  className = '',
  style,
  tone = 'paper',
}) {
  const tones = {
    paper: 'border-2 border-paper-ink bg-paper text-paper-ink',
    dark: 'border-2 border-[#3A3A3A] bg-[#191919] text-void-100',
  }
  return (
    <div
      className={`${tones[tone]} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
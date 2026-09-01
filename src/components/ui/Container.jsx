export default function Container({ children, className = '', ...props }) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-14 lg:px-24 xl:px-32 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

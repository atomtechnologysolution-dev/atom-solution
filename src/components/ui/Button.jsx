import { cn } from '../../lib/utils'

function Button({
  children,
  href,
  variant = 'primary',
  className,
  type = 'button',
  ...props
}) {
  const Component = href ? 'a' : 'button'

  const baseClasses = 'inline-flex items-center justify-center rounded-lg px-8 py-4 font-medium transition-all duration-300'

  const variantClasses = {
    primary: 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30 hover:-translate-y-1 hover:bg-orange-600',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-brand-dark',
  }

  return (
    <Component
      href={href}
      type={href ? undefined : type}
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button

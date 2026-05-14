import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  variant?: 'light' | 'dark'
}

export default function SectionLabel({
  children,
  className,
  variant = 'dark',
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-block font-condensed font-semibold text-sm uppercase tracking-[0.3em]',
        variant === 'dark' ? 'text-gold' : 'text-gold',
        className
      )}
    >
      {children}
    </span>
  )
}

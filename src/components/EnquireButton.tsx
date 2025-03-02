
import { cn } from '@/lib/utils';

interface EnquireButtonProps {
  className?: string;
  variant?: 'default' | 'white';
}

const EnquireButton = ({ className, variant = 'default' }: EnquireButtonProps) => {
  return (
    <a 
      href="#enquire" 
      className={cn(
        "btn btn-ghost uppercase text-sm tracking-wider transition-all duration-300",
        variant === 'white' && "text-white hover:text-white/80",
        className
      )}
    >
      Enquire
    </a>
  );
};

export default EnquireButton;

import { cn } from "@/lib/utils";

interface EnquireButtonProps {
  className?: string;
  variant?: "default" | "white";
  isScrolled?: boolean;
}

const EnquireButton = ({
  className,
  variant = "default",
  isScrolled = true,
}: EnquireButtonProps) => {
  return (
    <a
      href="#enquire"
      className={cn(
        "btn btn-ghost uppercase text-sm tracking-wider transition-all duration-300",
        isScrolled ? "text-black" : "text-white hover:bg-ultima-800 hover:text-white  transition-2s"
      )}
    >
      Enquire
    </a>
  );
};

export default EnquireButton;

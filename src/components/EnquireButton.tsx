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
        "relative px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300",
        "before:absolute before:inset-0 before:rounded-full before:scale-95 before:opacity-0 before:bg-black/10 before:transition-all before:duration-300 hover:before:scale-100 hover:before:opacity-100",
        isScrolled
          ? "text-black hover:text-white hover:bg-black"
          : "text-white border border-white hover:bg-white hover:text-black"
      )}
    >
      Enquire
    </a>
  );
};

export default EnquireButton;

import type { ButtonHTMLAttributes } from "react";

type AppearanceType = "primary" | "secondary" | "tertiary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  appearance?: AppearanceType;
};

// Mobile primeiro: 48px de altura no celular, 44px a partir de md
const solidSize = "h-12 px-6 text-base md:h-11 md:px-5 md:text-sm";

const getAppearanceStyle = (appearance: AppearanceType) =>
  ({
    primary: `${solidSize} bg-foreground text-primary-foreground hover:bg-primary active:bg-primary motion-safe:hover:-translate-y-0.5`,

    secondary: `${solidSize} border border-border bg-transparent hover:border-primary hover:text-primary active:bg-primary/10 motion-safe:hover:-translate-y-0.5`,

    tertiary: `${solidSize} w-full bg-orange-500 text-black hover:bg-orange-500/90 active:bg-orange-500 motion-safe:hover:-translate-y-0.5`,
  })[appearance];

const Button = ({
  appearance = "primary",
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) => {
  const commonStyles =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer rounded-lg font-bold transition duration-200 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
    "disabled:pointer-events-none disabled:opacity-50";

  const classes = `${commonStyles} ${getAppearanceStyle(appearance)} ${className}`;

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
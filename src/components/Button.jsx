import { cn } from "../utilities/lib";

export default function Button({
    children,
    variant = "primary",
    className,
    icon: Icon,
    iconPosition = "left",
    ...props
}) {
    return (
        <button
            className={cn(
                // Base structure common to all buttons
                "inline-flex items-center justify-center font-jetbrian text-jb-sm font-extrabold uppercase tracking-widest transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 border",

                // Primary Variant: Solid Orange background, dark text, no rounding
                variant === "primary" &&
                    "bg-orange_normal border-orange_normal text-grey_dark_active hover:bg-opacity-90 hover:border-opacity-90",

                // Secondary Variant: Transparent background, grey border, light grey text
                variant === "secondary" &&
                    "bg-transparent border-grey_light_active text-grey_light_active hover:bg-white/5",

                className,
            )}
            {...props}
        >
            {/* Icon rendering logic */}
            {Icon && iconPosition === "left" && (
                <Icon
                    size="16"
                    className="mr-2 variant-icon"
                    data-variant={variant}
                />
            )}

            <span>{children}</span>

            {Icon && iconPosition === "right" && (
                <Icon
                    size="16"
                    className="ml-2 variant-icon"
                    data-variant={variant}
                />
            )}
        </button>
    );
}

import { cn } from "../utilities/lib";

const DashedHeader = ({
    children,
    right = true,
    left = true,
    className,
    ...props
}) => {
    return (
        <div className={cn(" flex items-center  gap-4", className)} {...props}>
            {right && <div className="w-12 h-px bg-orange_normal" />}
            <div
                className={cn(
                    "text-jb-xs md:text-jb-sm text-orange_light_active font-extrabold font-jetbrian ",
                )}
            >
                {children}
            </div>
            {left && <div className="w-12 h-px bg-orange_normal" />}
        </div>
    );
};

export default DashedHeader;

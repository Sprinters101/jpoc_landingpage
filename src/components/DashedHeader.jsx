import { cn } from "../utilities/lib";

const DashedHeader = ({ children, right = true, left = true }) => {
    return (
        <div className=" flex items-center  gap-4">
            {right && <div className="w-12 h-px bg-orange_normal" />}
            <div
                className={cn(
                    "text-[0.625rem] md:text-[0.8125rem] text-orange_light_active font-medium ",
                )}
            >
                {children}
            </div>
            {left && <div className="w-12 h-px bg-orange_normal" />}
        </div>
    );
};

export default DashedHeader;

import { cn } from "../utilities/lib";

export default function Container({ children, className }) {
    return (
        <div
            className={cn(
                "mx-auto max-w-360 w-full px-5 sm:px-10 lg:px-20",
                className,
            )}
        >
            {children}
        </div>
    );
}

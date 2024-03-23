import { cn } from "@/lib/utils";

type TSectionProps = {
    name: string;
    title?: string;
    subTitle?: string;
    className?: string;
};

const SectionTitle = ({ name, title, subTitle, className }: TSectionProps) => {
    return (
        <div className={cn(`px-4 mb-10 text-center md:my-20 ${className} `)}>
            <p className="mb-2 text-lg font-semibold  dark:text-gray-300">
                {name}
            </p>
            <h2 className="pb-2 text-2xl font-bold  md:text-4xl dark:text-gray-300">
                {title}
            </h2>
            <div className="flex justify-center">
                <div className="flex justify-center w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-5">
                    <div className="flex-1 h-2 bg-blue-200"></div>
                    <div className="flex-1 h-2 bg-primary"></div>
                    <div className="flex-1 h-2 bg-blue-300"></div>
                </div>
            </div>
            {subTitle && <p className="text-sm leading-relaxed">{subTitle}</p>}
        </div>
    );
};

export default SectionTitle;

import React, { useState, ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type AccordionItemProps = {
    number: string;
    title: string;
    description: string;
    children: ReactNode;
};

type AccordionProps = {
    children: React.ReactElement<AccordionItemProps>[];
};

export const Accordion: React.FC<AccordionProps> = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="space-y-6">
            {React.Children.map(children, (child, index) => {
                const { number, title, description, children: details } = child.props;

                return (
                    <div key={index} className="border-b pb-10">
                        <div className="flex lg:flex-row md:flex-row flex-col gap-4 justify-between items-start">
                            <div className="flex items-start space-x-4">
                                <span className="text-3xl text-blue-900 font-semibold">{number}</span>
                                <h2 className="text-3xl text-blue-900 font-semibold">{title}</h2>
                            </div>
                            <div className="flex items-start space-x-8">
                                <p className="text-gray-700 max-w-2xl text-lg">{description}</p>
                                <button onClick={() => toggleIndex(index)} className="p-2 border border-red-500  hover:bg-red-500  rounded-full">
                                    {activeIndex === index ? (
                                        <ChevronUp className="hover:text-white text-black w-6 h-6" />
                                    ) : (
                                        <ChevronDown className="hover:text-white text-black w-6 h-6" />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div
                            className={`transition-all duration-500 overflow-hidden ${activeIndex === index ? "max-h-[999px] mt-16" : "max-h-0"
                                }`}
                        >
                            <p className="text-gray-600">{details}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export const AccordionItem: React.FC<AccordionItemProps> = () => null;

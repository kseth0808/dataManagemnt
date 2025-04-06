import React, { useState } from 'react';

type CardSliderProps = {
    children: React.ReactNode;
};

const CardSlider: React.FC<CardSliderProps> = ({ children }) => {

    const [currentIndex, setCurrentIndex] = useState(1);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex gap-6 justify-center items-center w-full">
                {React.Children.map(children, (child, index) => (
                    <div
                        key={index}
                        className={`transition-transform duration-500 ${index === currentIndex ? 'scale-100' : 'scale-90 opacity-50'}`}
                    >
                        {child}
                    </div>
                ))}
            </div>
            <div className="flex mt-6 space-x-2">
                {React.Children.map(children, (_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gray-400' : 'bg-gray-200'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardSlider;

import React from 'react';

interface FieldSizeProps {
    setSmall: () => void;
    setMedium: () => void;
    setLarge: () => void;
}
export const FieldSize: React.FC<FieldSizeProps> = (props: FieldSizeProps) => {
    const setSmall = () => props.setSmall();
    const setMedium = () => props.setMedium();
    const setLarge = () => props.setLarge();
    return (
        <>
            <button onClick={setSmall}>small 10x10</button>
            <button onClick={setMedium}>medium 20x20</button>
            <button onClick={setLarge}>large 30x30</button>
        </>
    );
};
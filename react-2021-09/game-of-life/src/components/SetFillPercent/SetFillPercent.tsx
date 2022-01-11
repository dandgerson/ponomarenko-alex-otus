import React from 'react';
import { Button } from '@components/Button';
import { FillPercent } from '@src/consts';

interface FieldSizeProps {
    fill0: () => void;
    fill25: () => void;
    fill50: () => void;
    fill75: () => void;
    fill100: () => void;
    curPercent: FillPercent;
}
export const SetFillPercent: React.FC<FieldSizeProps> = ({
    fill0,
    fill25,
    fill50,
    fill75,
    fill100,
    curPercent,
}) => {
    return (
        <>
            <Button id="btFill0" onClick={fill0} active={curPercent === FillPercent.P0}>
                clear
            </Button>
            <Button id="btFill25" onClick={fill25} active={curPercent === FillPercent.P25}>
                25%
            </Button>
            <Button id="btFill50" onClick={fill50} active={curPercent === FillPercent.P50}>
                50%
            </Button>
            <Button id="btFill75" onClick={fill75} active={curPercent === FillPercent.P75}>
                75%
            </Button>
            <Button id="btFill100" onClick={fill100} active={curPercent === FillPercent.P100}>
                100%
            </Button>
        </>
    );
};

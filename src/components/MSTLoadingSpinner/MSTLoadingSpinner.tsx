import React from 'react';
import clsx from 'clsx';

const BlockName = 'mst-loading-spinner';
const ClassNames = {
    Block: BlockName,
    Elements: {
        BaseRing: `${BlockName}__base-ring`,
        Ring: `${BlockName}__ring`,
    },
    // Modifiers: {},
};

const DEFAULT_DURATION = 1500; //ms;

export type MSTLoadingSpinnerProps = {
    className?: string;
    size?: number;
    speed?: number;

    baseRingColor?: string;
    ringColor?: string;

    rounded?: boolean;
    ringThick?: number;

    minRingPercent?: number;
    maxRingPercent?: number;

    startAt?: 'min' | 'max';
};

export const MSTLoadingSpinner = (props: MSTLoadingSpinnerProps) => {
    const {
        className,
        size = 32,
        speed = 1,
        baseRingColor = `var(--B25)`,
        ringColor = 'var(--B50)',
        rounded = true,
        ringThick = 3,
        minRingPercent = 0,
        maxRingPercent = 100,
        startAt = 'min',
    } = props;

    return (
        <div className={clsx(ClassNames.Block, className)}>
            <span className={ClassNames.Elements.BaseRing}>
                <span className={ClassNames.Elements.Ring} />
            </span>
        </div>
    );
};

import { useEffect, useState } from 'react';
import currentEpochSeconds from '../utils/currentEpochSeconds';
import epochToTimeDiff from '../utils/epochToTimeDiff';

type UseEpochDiffFunction = (epochData: Record<string, string> | null) => string | null;

const useEpochDiff: UseEpochDiffFunction = (epochData) => {
    const [currentDiff, setCurrentDiff] = useState<string | null>(null);

    useEffect(() => {
        if (epochData) {
            
            const convertEpoch = () => {
                const machineEpoch = currentEpochSeconds();
                const convertedEpoch = epochToTimeDiff(machineEpoch, parseInt(epochData.epoch));
                setCurrentDiff(convertedEpoch);
            }
            convertEpoch();
            const interval = setInterval(convertEpoch, 1000);
            return () => clearInterval(interval);
        }
    }, [epochData])

    return currentDiff;
}

export default useEpochDiff;

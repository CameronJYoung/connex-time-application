function epochToTimeDiff(machineEpoch: number, serverEpoch: number): string {
    const epochDifference = Math.abs(machineEpoch - serverEpoch);

    const hours = Math.floor(epochDifference / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((epochDifference % 3600) / 60).toString().padStart(2, '0');
    const seconds = Math.floor(epochDifference % 60).toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`
}

export default epochToTimeDiff;

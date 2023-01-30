function currentEpochSeconds(): number {
	return Math.trunc(new Date().getTime() / 1000);
}

export default currentEpochSeconds;

import IEpochService from '../interfaces/IEpochService';

class EpochService implements IEpochService {
  public generateEpoch() {
    return Math.trunc(new Date().getTime() / 1000);
  }
}

export default EpochService;

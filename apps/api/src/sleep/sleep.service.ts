import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SleepService {
  private readonly logger: Logger;
  constructor() {
    this.logger = new Logger(SleepService.name);
  }

  async getUserSleepRecords({ userId }): Promise<any> {
    return sleepRecord[userId];
  }
}
type SleepRecord = {
  date: string;
};

type User = {
  name: string;
  gender: string;
  records: SleepRecord[];
};

const sleepRecord: { [name: string]: User } = {
  '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d': {
    gender: 'Male',
    name: 'john',
    records: [
      { date: '2021-04-21' },
      { date: '2021-04-22' },
      { date: '2021-04-23' },
      { date: '2021-04-24' },
      { date: '2021-04-25' },
      { date: '2021-04-26' },
      { date: '2021-04-27' },
      { date: '2021-04-28' },
      { date: '2021-04-29' },
      { date: '2021-04-30' },
    ],
  },
  '76ahab4d-3b7d-9ka-a0qa-5qadti8apaq9': {
    name: 'Alice',
    gender: 'Female',
    records: [
      { date: '2021-05-01' },
      { date: '2021-05-02' },
      { date: '2021-05-03' },
      { date: '2021-05-04' },
      { date: '2021-05-05' },
      { date: '2021-05-06' },
      { date: '2021-05-07' },
      { date: '2021-05-08' },
      { date: '2021-05-09' },
      { date: '2021-05-10' },
    ],
  },
  '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b': {
    name: 'bob',
    gender: 'Male',
    records: [
      { date: '2021-06-01' },
      { date: '2021-06-02' },
      { date: '2021-06-03' },
      { date: '2021-06-04' },
      { date: '2021-06-05' },
      { date: '2021-06-06' },
      { date: '2021-06-07' },
      { date: '2021-06-08' },
      { date: '2021-06-09' },
      { date: '2021-06-10' },
    ],
  },
};

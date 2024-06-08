import { SleepRecordType } from 'src/sleepRecord/entity/sleep-record';
import { MockModel } from './MockSleepRecordModel';

class MockedSleepRecorMockdModel extends MockModel<SleepRecordType> {
  constructor(entityStub: SleepRecordType) {
    super(entityStub);
  }

  // Concrete implementation for the abstract property 'entityStub'
  protected entityStub: SleepRecordType = {} as SleepRecordType;

  // Implement the constructorSpy method
  protected constructorSpy(createdEntityData: SleepRecordType): void {
    // Your mocked implementation
  }
}

export default MockedSleepRecorMockdModel;

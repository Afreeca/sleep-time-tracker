export abstract class MockModel<T> {
  protected abstract entityStub: T;

  constructor(createdEntityData: T) {
    this.constructorSpy(createdEntityData);
  }

  // Change constructorSpy to an abstract method
  protected abstract constructorSpy(createdEntityData: T): void;

  findOne(): { exec: () => any } {
    return {
      exec: () => this.entityStub,
    };
  }

  async find(): Promise<T[]> {
    return [this.entityStub];
  }

  async findOneAndUpdate(): Promise<T> {
    return this.entityStub;
  }

  async save(): Promise<T> {
    return this.entityStub;
  }
}

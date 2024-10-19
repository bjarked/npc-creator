import { NonEmptyPipe } from './non-empty.pipe';

describe('NonEmptyPipe', () => {
  it('create an instance', () => {
    const pipe = new NonEmptyPipe();
    expect(pipe).toBeTruthy();
  });
});

import { IsClassPipe } from './is-class.pipe';

describe('IsClassPipe', () => {
  it('create an instance', () => {
    const pipe = new IsClassPipe();
    expect(pipe).toBeTruthy();
  });
});

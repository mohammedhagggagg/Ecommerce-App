import { MyCustomTransformationPipe } from './my-custom-transformation.pipe';

describe('MyCustomTransformationPipe', () => {
  it('create an instance', () => {
    const pipe = new MyCustomTransformationPipe();
    expect(pipe).toBeTruthy();
  });
});

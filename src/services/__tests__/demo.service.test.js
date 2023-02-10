import DemoService from '../demo.service';

describe('Demo Test', () => {
  it('Should return demo results', (done) => {
    const demos = DemoService.getAllDemos();
    expect(demos.length).toBe(1);
    expect(demos[0].purpose).toBe('demo purpose');
    done();
  });

  it('Should return a sindle demo by id', (done) => {
    const demos = DemoService.getDemoById('demo');
    expect(demos).toBeDefined();
    expect(demos).toStrictEqual({
      id: 'demo',
      purpose: 'demo purpose',
    });
    done();
  });
});

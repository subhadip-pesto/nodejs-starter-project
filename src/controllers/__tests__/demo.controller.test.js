import { mockRequest, mockResponse } from '../../utils/interceptor';
import Controllers from '..';

describe("Check method GET 'demo.controller' ", () => {
  it('should 200 and return demos ', async () => {
    const req = mockRequest();
    req.params.id = 1;
    const res = mockResponse();

    await Controllers.DemoController.getDemos(req, res);

    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send.mock.calls.length).toBe(1);
    expect(res.send).toHaveBeenCalledWith([
      { id: 'demo', purpose: 'demo purpose' },
    ]);
  });

  it('should 200 and return demo by id ', async () => {
    const req = mockRequest();
    req.params.id = 'demo';
    const res = mockResponse();

    await Controllers.DemoController.getDemo(req, res);

    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send.mock.calls.length).toBe(1);
    expect(res.send).toHaveBeenCalledWith({
      id: 'demo',
      purpose: 'demo purpose',
    });
  });

  it('should 400 and return error', async () => {
    const req = mockRequest();
    req.params.id = null;
    const res = mockResponse();

    await Controllers.DemoController.getDemo(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({ message: 'id is required' });
  });
});

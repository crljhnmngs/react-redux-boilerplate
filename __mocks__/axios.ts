const axios = {
    create: jest.fn(() => axios),
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
};

export default axios;

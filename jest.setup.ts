import { server } from "@/mocks/server";
import "@testing-library/jest-dom";

// api 모킹
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close);

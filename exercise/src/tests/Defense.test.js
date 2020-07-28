import React from "react";
import { shallow, mount, render } from "enzyme";
import Defense from "../Defense";

function setup() {
  const props = {};
  const wrapper = mount(<Defense />);
  return { wrapper, props };
}

beforeEach(() => {
  beforeAll(() => {
    const mockSuccessResponse = {
      ok: true,
      json: async () => ({ success: true }),
    };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
  });
});

describe("Defense Route Tests", () => {
  it("Should render", () => {
    const { wrapper } = setup();
    expect(wrapper.find("#defense").exists()).toBe(true);
  });

  it("Should fetch data", (done) => {
    setTimeout(() => {
      const { wrapper } = setup();

      expect(global.fetch).toHaveBeenCalledTimes(1);

      done();
    }, 100);
  });
});

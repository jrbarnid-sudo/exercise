import React from "react";
import { shallow, mount, render } from "enzyme";
import Defense from "../Defense";

function setup() {
  const props = {};
  const wrapper = mount(<Defense />);
  return { wrapper, props };
}

describe("Defense Route Tests", () => {
  it("Should render", () => {
    const { wrapper } = setup();
    expect(wrapper.find("#defense").exists()).toBe(true);
  });
});

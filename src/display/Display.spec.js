import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";

// Test away!
// ### Display Component

// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class

describe("<Display />", () => {
  const state = {
    closed: false,
    locked: false
  };

  it("should have Unlocked and Open", () => {
    const { getByText } = render(<Display {...state} />);

    const unlocked = getByText("Unlocked");
    const open = getByText("Open");

    expect(unlocked).toBeInTheDocument();
    expect(unlocked).toHaveClass("green-led");
    expect(open).toBeInTheDocument();
    expect(open).toHaveClass("green-led");
  });

  it("should have Locked and Closed", () => {
    state.closed = true;
    state.locked = true;
    const { getByText } = render(<Display {...state} />);

    const locked = getByText("Locked");
    const closed = getByText("Closed");

    expect(locked).toBeInTheDocument();
    expect(locked).toHaveClass("red-led");
    expect(closed).toBeInTheDocument();
    expect(closed).toHaveClass("red-led");
  });
});

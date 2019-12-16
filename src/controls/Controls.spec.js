import React from "react";
import { render } from "@testing-library/react";
import Controls from "./Controls";

// Test away!
// ### Controls Component

// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open

describe("<Controls />", () => {
  const state = {
    locked: false,
    closed: false
  };

  it("should render without error", () => {
    render(<Controls {...state} />);
  });

  it("should have Lock Gate and Close Gate", () => {
    const { getByText } = render(<Controls {...state} />);

    const lockGate = getByText("Lock Gate");
    const closeGate = getByText("Close Gate");

    expect(lockGate).toBeInTheDocument();
    expect(closeGate).toBeInTheDocument();
  });

  it("sholud have Unlock Gate and Open Gate", () => {
    state.locked = true;
    state.closed = true;
    const { getByText } = render(<Controls {...state} />);

    const unlockGate = getByText("Unlock Gate");
    const openGate = getByText("Open Gate");

    expect(unlockGate).toBeInTheDocument();
    expect(openGate).toBeInTheDocument();
  });
});

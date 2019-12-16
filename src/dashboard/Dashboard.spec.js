import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";

// Test away
// ### Display Component

// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class

// ### Controls Component

// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open

describe("<Dashboard />", () => {
  it("should render without error", () => {
    render(<Dashboard />);
  });

  it("Close Gate", () => {
    const { getByText } = render(<Dashboard />);

    const closeGate = getByText("Close Gate");
    fireEvent.click(closeGate);
    const closed = getByText("Closed");
    expect(closed).toBeInTheDocument();
  });

  it("Lock Gate", () => {
    const { getByText } = render(<Dashboard />);

    const closeGate = getByText("Close Gate");
    fireEvent.click(closeGate);
    const closed = getByText("Closed");
    expect(closed).toBeInTheDocument();

    const lockGate = getByText("Lock Gate");
    fireEvent.click(lockGate);
    const locked = getByText("Locked");
    expect(locked).toBeInTheDocument();
  });

  it("the closed toggle button is disabled if the gate is locked", () => {
    const { getByText } = render(<Dashboard />);

    const closeGate = getByText("Close Gate");
    fireEvent.click(closeGate);
    const closed = getByText("Closed");
    expect(closed).toBeInTheDocument();

    const lockGate = getByText("Lock Gate");
    fireEvent.click(lockGate);
    const locked = getByText("Locked");
    expect(locked).toBeInTheDocument();

    expect(closeGate).toBeDisabled();
  });

  it("the locked toggle button is disabled if the gate is open", () => {
    const { getByText } = render(<Dashboard />);

    const open = getByText("Open");
    expect(open).toBeInTheDocument();
    const lockGate = getByText("Lock Gate");
    fireEvent.click(lockGate);
    expect(lockGate).toBeDisabled();

  });
});

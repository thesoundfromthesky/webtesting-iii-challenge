import React from "react";
import { render, fireEvent } from "@testing-library/react";
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
    closed: false,
    toggleLocked: jest.fn(() => {
      state.locked = !state.locked;
    }),
    toggleClosed: jest.fn(() => {
      state.closed = !state.closed;
    })
  };
  beforeEach(() => {
    state.locked = false;
    state.closed = false;
    jest.clearAllMocks();
  });

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

  
  it("Close Gate should be Open Gate when clicked", ()=>{
    const { getByText , rerender } = render(<Controls {...state} />);
    const closeGate = getByText("Close Gate");
    
    fireEvent.click(closeGate);
    rerender(<Controls {...state} />);
    expect(closeGate).toHaveTextContent("Open Gate");
  })

  it("Lock Gate should not work when Close Gate is in the document", ()=>{
    const { getByText , rerender } = render(<Controls {...state} />);
    const lockGate = getByText("Lock Gate");
    
    fireEvent.click(lockGate);
    rerender(<Controls {...state} />);
    expect(lockGate).toHaveTextContent("Lock Gate");
  })

  it("Lock Gate should be Unlock Gate when Open Gate is in the document", ()=>{
    state.closed = true;
    const { getByText , rerender } = render(<Controls {...state} />);
    const lockGate = getByText("Lock Gate");
    
    fireEvent.click(lockGate);
    rerender(<Controls {...state} />);
    expect(lockGate).toHaveTextContent("Unlock Gate");
  })

  it("Open Gate should not work when Unlock Gate is in the document", () => {
    state.locked = true;
    state.closed = true;
    const { getByText } = render(<Controls {...state} />);

    const unlockGate = getByText("Unlock Gate");
    const openGate = getByText("Open Gate");

    expect(unlockGate).toBeInTheDocument();
    expect(openGate).toBeInTheDocument();

     
    fireEvent.click(openGate);
    expect(openGate).toHaveTextContent("Open Gate");
  });

});

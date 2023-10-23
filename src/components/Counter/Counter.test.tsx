import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter test", () => {
  it("should type correct number", () => {
    render(<Counter initialValue={5} />);

    expect(screen.getByText(/Count: 5/i)).toBeInTheDocument();
  });

  it("should type default value for counter", () => {
    render(<Counter />);

    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });

  it("increment button should work", async () => {
    render(<Counter initialValue={10} />);
    expect(screen.getByText(/Count: 10/i)).toBeInTheDocument();

    const incrementButton = screen.getByText(/Increment/i);
    userEvent.click(incrementButton);

    await waitFor(() => {
      expect(screen.getByText(/Count: 11/i)).toBeInTheDocument();
    });
  });

  it("decrement button should work", async () => {
    render(<Counter initialValue={8} />);
    expect(screen.getByText(/Count: 8/i)).toBeInTheDocument();

    const decrementButton = screen.getByText(/Decrement/i);
    userEvent.click(decrementButton);

    await waitFor(() => {
      expect(screen.getByText(/Count: 7/i)).toBeInTheDocument();
    });
  });

  it("both of decrement and increment buttons should work", async () => {
    render(<Counter initialValue={7} />);
    expect(screen.getByText(/Count: 7/i)).toBeInTheDocument();

    const incrementButton = screen.getByText(/Increment/i);
    const decrementButton = screen.getByText(/Decrement/i);
    
    userEvent.click(incrementButton);
    userEvent.click(decrementButton);
    userEvent.click(decrementButton);

    await waitFor(() => {
      expect(screen.getByText(/Count: 6/i)).toBeInTheDocument();
    });
  });
});

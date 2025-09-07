import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../Button";

describe("Button", () => {
  it("renders with correct text", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
  });

  it("applies Tailwind classes", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveClass(
      "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    );
  });

  it("handles click events", async () => {
    const handleClick = vi.fn(); // Vitest mock function
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders with different children", () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByRole("button", { name: /test button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Test Button");
  });
});

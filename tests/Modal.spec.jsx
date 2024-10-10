import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
  test("renders the modal and accepts credentials", () => {
    render(<Modal isOpen={true} />);
    expect(screen.getByText("Enter Google API Key")).toBeInTheDocument();
  });

  test("calls the onSubmit function when valid credentials are entered", () => {
    const onSubmit = jest.fn();
    render(<Modal isOpen={true} onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText("Google API Key"), {
      target: { value: "dummy-api-key" }
    });
    fireEvent.change(screen.getByLabelText("Search Engine ID"), {
      target: { value: "dummy-search-id" }
    });

    fireEvent.click(screen.getByText("Submit"));
    expect(onSubmit).toHaveBeenCalled();
  });
});

import { render, screen } from "@testing-library/react";
import App from "./App";

test("test first react app", () => {
  render(<App />);
  const text = screen.getByText(/First React Test Case/i);
  const title = screen.getByTitle("electronics img");

  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test("testing input box", () => {
  render(<App />);
  const inputBox = screen.getByPlaceholderText(/Enter user new mantri/i); //check placeholder text
  expect(inputBox).toBeInTheDocument();
  const checkInput = screen.getByRole("textbox"); // check the input box by role
  expect(checkInput).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name","username"); //check the attribute name
});

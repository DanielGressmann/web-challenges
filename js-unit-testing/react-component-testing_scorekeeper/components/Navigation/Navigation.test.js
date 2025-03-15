import { render, screen } from "@testing-library/react";
import Navigation from ".";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

// test("renders with two links 'Play' and 'History'", () => {
//   render(<Navigation player={[]} />);

//   const playLink = screen.getByRole("link", { name: /play/i });
//   const historyLink = screen.getByRole("Link", { name: /history/i });

//   expect(playLink).toBeInTheDocument();
//   expect(historyLink).toBeInTheDocument();
// }); // Chat GPT Lösung

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);

  const playLink = screen.getByRole("Link", { name: "Play" });
  expect(playLink).toBeInTheDocument();

  const historyLink = screen.getByRole("Link", {
    name: "History",
  });
  expect(historyLink).toBeInTheDocument();
});

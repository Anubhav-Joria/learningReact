import { render, screen } from "@testing-library/react";
import TestingAPI from ".";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("testing API component", function () {
  it("testing Render", function () {
    render(<TestingAPI />);
    const heading = screen.getByText("Testing API response");
    expect(heading).toBeInTheDocument();
  });

  it("testing user render", async () => {
    render(<TestingAPI />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(2);
  });

  it("testing error render", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<TestingAPI />);
    const errorMessage = await screen.findByText("Error Occured");
    expect(errorMessage).toBeInTheDocument();
  });
});

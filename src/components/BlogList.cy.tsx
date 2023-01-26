import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import BlogList from "./BlogList";

describe("my function or component", () => {
  it("Should render BlogList component", () => {
    render(
      <Router>
        <BlogList />
      </Router>
    );
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  describe("When i'm in main screen", () => {
    it("should show title", () => {
      render(<App />);
      expect(screen.getByText("ByteBank"));
    });

    it("should show operation button", () => {
      render(<App />);
      expect(screen.getByText("Realizar operação"));
    });

    it("should show balance text", () => {
      render(<App />);
      expect(screen.getByText("Saldo:"));
    });
  });
});

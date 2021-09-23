import React from "react";
import { render, screen } from "@testing-library/react";
import Conta from "./Conta";

describe("Component Conta", () => {
  it("should contain money element", async () => {
    render(<Conta saldo={1000} />);
    const textMoney = screen.getByTestId("saldo-conta").textContent;
    expect(textMoney).toBe("R$ 1000");
  });
});

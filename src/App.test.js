import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { calcularNovoSaldo } from "./App";

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

  describe("When calculate the balance", () => {
    it("should deposit a value", () => {
      const balance = 1000;
      const values = {
        transacao: "deposito",
        valor: 500,
      };

      const newBalance = calcularNovoSaldo(values, balance);
      expect(newBalance).toBe(1500);
    });

    it("should wrest a value", () => {
      const balance = 1000;
      const values = {
        transacao: "saque",
        valor: 500,
      };

      const newBalance = calcularNovoSaldo(values, balance);
      expect(newBalance).toBe(500);
    });

    it("should verify if had limit", () => {
      const balance = 1000;
      const values = {
        transacao: "saque",
        valor: 1500,
      };

      const newBalance = calcularNovoSaldo(values, balance);
      expect(newBalance).toBe(1000);
    });
  });
});

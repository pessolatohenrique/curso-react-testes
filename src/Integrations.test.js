import React from "react";
import api from "./api";
import App from "./App";
import { render, screen } from "@testing-library/react";

jest.mock("./api");

describe("API Calls", () => {
  it("should load API calls", async () => {
    await api.listaTransacoes.mockResolvedValue([
      {
        valor: 30,
        transacao: "saque",
        data: "10/08/2020",
        id: 1,
      },
      {
        transacao: "deposito",
        valor: "20",
        data: "26/09/2020",
        id: 2,
      },
    ]);

    render(<App />);

    expect(await screen.findByText("saque")).toBeInTheDocument();
    expect(screen.getByTestId("transacoes").children.length).toBe(2);
  });
});

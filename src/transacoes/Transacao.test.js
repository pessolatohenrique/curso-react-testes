import React from "react";
import { render } from "@testing-library/react";
import Transacao from "./Transacao";

describe("Transacao component", () => {
  it("should render with snapshot", () => {
    const { container } = render(
      <Transacao data="01/01/2021" tipo="saque" valor="500" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});

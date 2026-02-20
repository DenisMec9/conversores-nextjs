import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DistanceConverter } from "./distance-converter";

describe("DistanceConverter", () => {
  it("converte metros para pés e polegadas", () => {
    render(<DistanceConverter />);

    fireEvent.change(screen.getByLabelText("Metros (m)"), { target: { value: "1" } });

    expect(screen.getByText("3.28")).toBeInTheDocument();
    expect(screen.getByText("39.37")).toBeInTheDocument();
  });
});

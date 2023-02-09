import { FC, useEffect, useRef } from "react";
import * as d3 from 'd3';
import { Data } from "../data";

interface BarChartPropsPlus {
  data: Data[];
}

export const BarChartPlus: FC<BarChartPropsPlus> = () => {
  const svg = useRef<SVGSVGElement>(null);

  // TODO: crear el componente BarChartPlus.

  useEffect(() => {

  }, [])

  return (
    <svg
      className="container"
      ref={svg}
    ></svg>
  )
}
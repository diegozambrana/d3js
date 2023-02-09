// import rd3 from 'react-d3-library'
import { FC, useEffect, useRef } from "react";
import * as d3 from 'd3';
import { Data } from "../data";
import './BarChart.css';


interface BarChartProps {
  data: Data[];
}

export const BarChart: FC<BarChartProps> = () => {
  const svg = useRef<SVGSVGElement>(null);

  const buildGraph = (data: Array<number>) => {
    const width = 500,
    scaleFactor = 15,
    barHeight = 40;

    const graph = d3.select(svg.current)
      .attr("width", width)
      .attr("height", barHeight * data.length);

    const bar = graph.selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", function(d, i) {
            return "translate(0," + i * barHeight + ")";
      });

    bar.append("rect")
      .attr("width", function(d) {
                return d * scaleFactor;
      })
      .attr("height", barHeight - 1);
       
    bar.append("text")
      .attr("x", function(d) { return (d*scaleFactor); })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return d; });
  }

  useEffect(() => {
    buildGraph([5, 10, 12, 23, 2, 4, 1, 12]);
  }, [])

  return (
    <div>
      <h1>Bar Chart</h1>
      <div className="svg ">
        <svg
          className="container"
          ref={svg}
          width="300"
          height="300"
        ></svg>
      </div>
    </div>
        
  )
}
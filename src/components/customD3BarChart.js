import React, { useRef, useEffect } from "react";
import { select, axisBottom, axisLeft, scaleLinear, scaleBand } from "d3";

const dynamicSizing = ref => {
    // console.log(ref)
    return { width: 150, height: 150 };
};

function BarChart({ data }) {
    
    console.log(data.length)
    
    const svgRef = useRef();
    const svgArea = dynamicSizing(svgRef)
    const padding = 0.3

    const barColor = enrolled => {
        return enrolled > 3 ? "red" : "green"
    }

    // will be called initially and on every data change
    useEffect(() => {
        
        const svg = select(svgRef.current);
        const xScale = scaleBand()
            .domain(data.map((d, idx) => idx ))
            .range([0, 250])
            .padding(padding);

        const yScale = scaleLinear()
            .domain([0, 50])
            .range([120, 0]);

        const xAxis = axisBottom(xScale).ticks(data.enrolled);

        svg
            .select(".x-axis")
            .style("transform", "translateY(130px)")
            .call(xAxis);

        const yAxis = axisLeft(yScale);
        svg
            .select(".y-axis")
            .style("transform", "translateX(0px)")
            .style("border-color", "grey")
            .call(yAxis);

        svg
            .selectAll(".bar") 
            .data(data)
            .join("rect")
            .attr("class", "bar")
            .style("transform", "scale(1, -1)")
            .attr("x", (d, idx) => xScale(idx))
            .attr("y", -120)
            .attr("width", xScale.bandwidth())
            .transition()
            .attr("fill", d => barColor(d.enrolled))
            .attr("text", d => d.course)
            .attr("height", d => svgArea.width - yScale(d.enrolled*7));
        
        svg
            .selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text(d => d.enrolled)

        
    }, [data, svgArea]);

    return (
        <div style={{ marginBottom: "2rem" }}>
            <svg ref={svgRef}>
                <g className="x-axis" />
                <g className="y-axis" />
            </svg>
        </div>
    );
}

export default BarChart;
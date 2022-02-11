import React, { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { BasicTooltip } from "@nivo/tooltip";

const mydata = [
  {
    // country: "AD",
    minimum: 62,
    quantile25: 135,
    quantile75: 179,
    maximum: 118,
  },
];

// https://codesandbox.io/s/9p3is
// , "sandwich", "kebab", "fries", "donut"];
export function Haappy() {
  return (
    <div style={{ height: 170 }}>
      <ResponsiveBar
        data={mydata}
        keys={["minimum", "quantile25", "quantile75", "maximum"]}
        // indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        layout="horizontal"
        // valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "greys" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        // fill={[
        //   {
        //     match: {
        //       id: "fries",
        //     },
        //     id: "dots",
        //   },
        //   {
        //     match: {
        //       id: "sandwich",
        //     },
        //     id: "lines",
        //   },
        // ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        markers={[
          {
            axis: "x",
            value: 300,
            // lineStyle: { stroke: "rgba(0, 0, 0, .35)", strokeWidth: 2 },
            legend: "avg",
            // legendOrientation: "horizontal",
          },
          {
            axis: "x",
            value: 200,
            // lineStyle: { stroke: "rgba(0, 0, 0, .35)", strokeWidth: 2 },
            legend: "median",
            // legendOrientation: "horizontal",
          },
        ]}
        axisTop={null}
        axisRight={null}
        // axisBottom={{
        //   tickSize: 5,
        //   tickPadding: 5,
        //   tickRotation: 0,
        //   legend: "country",
        //   legendPosition: "middle",
        //   legendOffset: 32,
        // }}
        // axisLeft={{
        //   tickSize: 5,
        //   tickPadding: 5,
        //   tickRotation: 0,
        //   legend: "food",
        //   legendPosition: "middle",
        //   legendOffset: -40,
        // }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        // role="application"
        // ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) {
          return (
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          );
        }}
      />
    </div>
  );
}

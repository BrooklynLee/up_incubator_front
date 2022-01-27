import { useState, useEffect } from 'react'
import axios from "axios";
import Papa from 'papaparse'
import { useMemo } from "react";
import { useTable } from "react-table";
import React from 'react';



export const Apple3 = () => {

  const [data, setData] = useState([])
  const [columns, setColumns] = useState([])
  const [headers, setHeaders] = useState([])


  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:8000/media/tongpi.csv")
      const reader = response.body.getReader()
      const result = await reader.read() // raw array
      const decoder = new TextDecoder('utf-8')
      const csv = decoder.decode(result.value) // the csv text
      // const results = Papa.parse(csv, config) // object with { data, errors, meta }
      const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
      // Papa.parse(file, config);

      const data = results.data // array of objects
      const columns = results.meta.fields // array of objects

      const header_array = []
      var o = {};

      for (var i = 0, l = columns.length; i < l; i++) {
        o.headerName = columns[i]
        o.mapKey = columns[i]
        // var text = "{" 
        // var key = Object.keys(columns[i])
        // if (!header_array[key]) { header_array[key] = []; }
        // header_array[key].push(columns[i][key]);
        // {
        //   Header: "Year",
        //     accessor: "Year"
        // },

      }

      setData(data)
      setColumns(columns)
      setHeaders(header_array)
    }
    getData()
    // console.log(columns)
  }, []) // [] means just do this once, after initial render

  return (
    <div>

      <table >
        <thead>
          <tr>
            {columns.map((columnName, index) => (
              <th key={index}>{columnName}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((rows, index) =>
            <tr>
              {Object.keys(rows).map((i, index) =>
                <td key={index}>{rows[i]}</td>
              )}
            </tr>
          )
          }
        </tbody>
      </table>
    </div >
  );

}



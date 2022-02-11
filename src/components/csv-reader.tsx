import { useState, useEffect } from "react";
// import Papa from "papaparse";

const Papa = require("papaparse");

export const CsvReader = () => {
  const [data, setData] = useState<any>([]);
  const [columns, setColumns] = useState<any>([]);
  const [headers, setHeaders] = useState<any>([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:8000/media/testtest.csv");
      const reader = response?.body?.getReader();
      const result = await reader?.read(); // raw array
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result?.value); // the csv text
      // const results = Papa.parse(csv, config); // object with { data, errors, meta }
      const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
      // Papa.parse(file, config);

      const data = results.data; // array of objects
      const columns = results.meta.fields; // array of objects

      const header_array: any = [];
      var o: any = {};

      for (var i = 0, l: any = columns?.length; i < l; i++) {
        if (columns) {
          o.headerName = columns[i];
          o.mapKey = columns[i];
        }
      }

      setData(data);
      setColumns(columns);
      setHeaders(header_array);
    }
    getData();
  }, []); // [] means just do this once, after initial render

  return (
    <div className="w-full mb-12 xl:mb-0 px-4 mx-auto mt-8">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
        <div className="block w-full overflow-x-auto">
          <table className="items-center bg-transparent w-full border-collapse">
            <thead>
              <tr>
                {columns.map((columnName: any, index: any) => (
                  <th
                    className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    key={index}
                  >
                    {columnName}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {(toggle ? data.slice(0, 30) : data.slice(0, 5)).map(
                (rows: any, index: any) => (
                  <tr>
                    {Object.keys(rows).map((i, index) => (
                      <td
                        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        key={index}
                      >
                        {rows[i]}
                      </td>
                    ))}
                  </tr>
                )
              )}
            </tbody>
          </table>
          <table className="items-center bg-transparent w-full border-collapse">
            <tr className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 items-center">
              <td>
                <button
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded"
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? <p>가리기</p> : <p>더보기</p>}
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import fetchSensorData from './GetData.tsx';

interface Props {
  title: string;
  className: string;
  columnNames: string[];
  list: {
    date: string,
    status: string,
    values: number[]
  }[];
}

function DataTable({ title, className }: Props) {
  const [list, setList] = useState<Props['list']>([]);
  const [columnNames, setColumnNames] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchSensorData();
      const list = data.map((item: any) => ({
        date: item.DateTime,
        status: item.Id,
        values: Object.keys(item).filter(key => key !== 'Id').map(key => item[key])
      }));
      const columnNames = ['Date', 'Status', ...Object.keys(data[0]).filter(key => key !== 'Id')];
      setList(list);
      setColumnNames(columnNames);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className={className}>
        <h2>{title}</h2>
        <table>
          <thead>
            <tr>
              {columnNames.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {list.slice(0, 10).map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.status}</td>
                {item.values.map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <a href="#">Show All</a>
      </div >
    </>
  );
};

export default DataTable;
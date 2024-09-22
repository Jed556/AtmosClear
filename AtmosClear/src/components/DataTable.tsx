import { useEffect, useState } from 'react';
import fetchSensorData from './GetData.tsx';
import { isValidDate, formatDateTime } from './DateTime.tsx';

interface TableProps {
  url: string
  className: string
  title: string
  maxRows?: number
}

export default function DataTable({ url, className, title, maxRows = 10 }: TableProps) {
  const [list, setList] = useState<any[]>([]);
  const [columnNames, setColumnNames] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchSensorData(url);
      const list = data.map((item: any) => ({
        values: Object.keys(item).filter(key => key !== 'Id').map(key => item[key])
      }));
      console.log(list);
      const columnNames = [...Object.keys(data[0]).filter(key => key !== 'Id')];
      console.log(columnNames);
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
                <th key={index}>{item == "DateTime" ? "Date & Time" : item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {list.slice(0, maxRows).map((item: any, rowIndex: number) => (
              <tr key={rowIndex}>
                {item.values.map((value: any, colIndex: number) => (
                  <td key={colIndex}>{isValidDate(value) ? formatDateTime(value) : value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <a href="#">Show All</a>
      </div>
    </>
  );
};
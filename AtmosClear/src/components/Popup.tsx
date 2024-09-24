import { useEffect, useState } from 'react';
import fetchData from './GetData';

interface PopupProps {
    url: string;
    type: number;
    refreshInterval?: number;
}

const Popup: React.FC<PopupProps> = ({ url, type, refreshInterval = 3000 }) => {
    const [atmosclearData, setAtmosclearData] = useState<any>(null);
    const [list, setList] = useState<any[]>([]);
    const [columnNames, setColumnNames] = useState<string[]>([]);
    const [logo, setLogo] = useState<string>("");

    useEffect(() => {
        async function fetchList() {
            const data = await fetchData(url);
            const list = data.map((item: any) => ({
                values: Object.keys(item).filter(key => key !== 'Id').map(key => item[key])
            }));
            const columnNames = [...Object.keys(data[0]).filter(key => key !== 'Id')];

            const sortedList = [...list].sort((a, b) => {
                const dateA = new Date(a.values[0]);
                const dateB = new Date(b.values[0]);
                return dateB.getTime() - dateA.getTime(); // Descending order
            });

            setList(sortedList);
            setColumnNames(columnNames);
        }

        fetchList();

        switch (type) {
            case 0:
                setLogo("info");
                break;
            case 1:
                setLogo("info");
                break;
            case 2:
                setLogo("warning");
                break;
            case 3:
                setLogo();
                break;
            case 4:
                logo = "dangerous";
                break;
            default:
                logo = "info";
                break;
        }

        const intervalId = setInterval(fetchList, refreshInterval); // Set up interval

        return () => clearInterval(intervalId);
    }, [url, refreshInterval, type]);

    return (
        <div className="popup-container">
            <div className="icon">
                <span className="material-icons-sharp">
                    {logo}
                </span>
            </div>
            <p className="popup-name">{atmosclearData ? atmosclearData.name : 'Loading...'}</p>
        </div>
    );
};

export default Popup;
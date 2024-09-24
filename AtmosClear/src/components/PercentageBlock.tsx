
interface PercentageBlockProps {
    list: { label: string, color: 'red' | 'green' | 'blue', value: number, maxPercentage: number }[];
}

function PercentageBlock({ list }: PercentageBlockProps) {
    return (
        <>
            {list.map((item, index) => (
                <div key={index} className={item.color}>
                    <div className="status">
                        <div className="info">
                            <h3>{item.label}</h3>
                            <h1>{item.value}</h1>
                        </div>
                        <div className="progress">

                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="10px" height="160px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#e91e63" />
                                        <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="38" cy="38" r="36" stroke-linecap="round" />
                            </svg>
                            <div className="percentage">
                                <p>{((item.value / item.maxPercentage) * 100).toFixed(0)}%</p>
                            </div>
                        </div>
                    </div>
                </div >
            ))
            }
        </>
    );
};

export default PercentageBlock;
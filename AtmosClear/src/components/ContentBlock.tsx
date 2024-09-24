import './PercentageBlock.css';

interface PercentageBlockProps {
    list: { label: string, color: 'red' | 'green' | 'blue', percentage: number, value: number }[];
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
                    </div>
                </div >
            ))
            }
        </>
    );
};

export default PercentageBlock;
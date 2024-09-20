import React from 'react';
import './PercentageBlock.css';

interface PercentageBlockProps {
    list: { label: string, color: 'red' | 'green' | 'blue', percentage: number, value: number }[];
    children?: React.ReactNode;
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
                            <svg>
                                <circle cx="38" cy="38" r="36" stroke="black" strokeWidth="4" fill="none" />
                            </svg>
                            <div className="percentage">
                                <p>{item.percentage}%</p>
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
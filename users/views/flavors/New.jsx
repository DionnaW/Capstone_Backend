import React from 'react';
import DefaultLayout from '../layout/Default';

class New extends React.Component {
    render() {
        const words = [
            'Green Apple', 'Shrek', 'Pekachu', 'Barbie', 'Blackberry', 'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Pimp Juice', 
            'Mango', 'Nectarine', 'Orange', 'Papaya', 'Popeye', 'Raspberry', 'Strawberry', 'Tangerine', 'Rock N Roll',
            'Flan', 'Apricot', 'Wine Cooler', 'Coconut', 'Shrek', 'Tiger Blood', 'Figs', 'Guava', 'Huckleberry', 'Red Hot',
            'Pumpkin', 'Mocha', 'Lime', 'Melon', 'Hulk', 'Popcorn', 'Sponge Bob', 'Lemonade', 'Rhubarb', 'Strawberry',
            'Tamarind', 'Tutti Fruitti', 'Vanilla bean', 'Watermelon', 'Ice Cream', 'King Cake', 'Coffee', 'Mai Tai', 'Chocolate'
        ];

        return (
            <DefaultLayout title={'WHAT IS YOUR FAVORITE FLAVOR?'}>
                <h1>Regular, Sugar Free, & Dye Free!</h1>
                <table className="flavor-table">
                    <tbody>
                        {Array.from({ length: 10 }, (_, rowIndex) => (
                            <tr key={rowIndex}>
                                {Array.from({ length: 5 }, (_, colIndex) => (
                                    <td key={colIndex}>{words[rowIndex * 5 + colIndex]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <style jsx>{`
                    .flavor-table {
                        border-collapse: collapse;
                        width: 100%;
                    }
                    .flavor-table td {
                        border: 1px solid #ddd;
                        padding: 8px;
                        text-align: center;
                    }
                    .flavor-table td:hover {
                        background-color: #f2f2f2;
                    }
                `}</style>
            </DefaultLayout>
        );
    }
}

export default New;
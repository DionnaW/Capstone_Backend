import React from 'react';
import DefaultLayout from '../layout/Default';

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title={'WHAT IS YOUR FAVORITE FLAVOR?'}>
                <h1>You can even mix and match them...</h1>
                <table className="flavor-table">
                    <tbody>
                        {Array.from({ length: 30 }, (_, rowIndex) => (
                            <tr key={rowIndex}>
                                {Array.from({ length: 30 }, (_, colIndex) => (
                                    <td key={colIndex}>Row {rowIndex + 1}, Col {colIndex + 1}</td>
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
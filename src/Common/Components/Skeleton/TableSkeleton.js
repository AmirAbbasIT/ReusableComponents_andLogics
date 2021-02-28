import React from 'react'
import Skeleton from 'react-loading-skeleton';

const TableSkeleton = ({ rows, columns }) => {
    const tRows = [];

    for (let index = 0; index < columns; index++) {
        tRows.push(
            <td style={{ fontSize: 23, lineHeight: 1 }} key={index}>
                <Skeleton height={30} />
            </td>
        );
    }
    return (
        <tbody>
            {[...Array(rows)].map((item, index) => (
                <tr key={index}>
                    {tRows}
                </tr>
            ))}
        </tbody>
    )
}

export default TableSkeleton

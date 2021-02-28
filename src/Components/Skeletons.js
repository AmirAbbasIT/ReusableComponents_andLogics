import React from 'react'
import CardSkeleton from '../Common/Components/Skeleton/CardSkeleton'
import TableSkeleton from '../Common/Components/Skeleton/TableSkeleton'

const Skeletons = () => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <CardSkeleton circle={true} />
                </div>
                <div className="card-footer">
                    <CardSkeleton lines={5} />
                </div>
            </div>
            <table className="table table-responsive text-center">
                <thead className="bg-primary text-white">
                    <th>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </thead>
                <TableSkeleton rows={5} columns={4} />
            </table>
        </div>
    )
}

export default Skeletons

import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CardSkeleton = ({ lines = 1, height = 20, width = "50", circle = false }) => {
    return (
        <div>
            {
                circle ?
                    <Skeleton count={lines} height={100} width={100} circle={circle} />
                    :
                    <Skeleton count={lines} height={height} />
            }
        </div>
    )
}

export default CardSkeleton

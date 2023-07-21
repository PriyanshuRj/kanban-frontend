import React from 'react'
import { Rings } from 'react-loader-spinner'
export default function Loader( {loaderHeight}) {
  return (
    <div className={`flex items-center justify-center ${loaderHeight ? ` ${loaderHeight} ` : 'h-screen  dark:bg-gray-700' }  `}>
                    <Rings
                        height="220"
                        width="220"
                        // radius="9"
                        color="rgb(30 64 175)"
                        ariaLabel="loading"
                    />{" "}
                </div>
  )
}

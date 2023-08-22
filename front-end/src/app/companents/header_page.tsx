'use client'

import { Suspense } from "react";

type AllProps = {
    subTitle?: string,
    headAddButton?: string
};

export default function HeaderPage({ subTitle = 'รายการสินค้า', headAddButton = 'เพิ่มสินค้าอะไหล่' }: AllProps) {
    let shadowBoxRaB = `border-t-gray-200 border-l-gray-200 border-b-gray-400 border-r-gray-400`
    return <div className="flex flex-col ">
            <div className="flex justify-between pr-2">
                <div className="pl-2 flex justify-start">{subTitle}</div>
                <div className="flex">
                    <button className={`flex border-[2px] ${shadowBoxRaB} rounded-md bg-gray-300 pr-2`}>
                        <div className="material-symbols-sharp border-r-[2px] border-white">add</div>
                        <div className="pl-2">{headAddButton}</div>
                    </button>
                </div>
            </div>
        </div>
}
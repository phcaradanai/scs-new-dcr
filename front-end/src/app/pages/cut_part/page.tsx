'use client'

import HeaderPage from "@/app/companents/header_page";
import TableList from "@/app/companents/table_list";
import { IntlProvider } from 'react-intl'; // Import IntlProvider
import { Suspense } from "react";
import EngLang from '../../../../lang/en-US.json'; // Import your translation messages
import ThLang from '../../../../lang/th.json'; // Import your translation messages
export default function Page() {
  let mockList = {
    code:['0001', '0002','0003'],
    name:['ปากกา', 'แท้งน้ำ','กาวแห้ง'],
    brand:['ช้าง', 'ม้า','แมวน้ำ'],
    type:['ของใช้', 'ดำรงชีพ','ของเหนียว'],
    group:['ทั้วไป', 'หนัก','ระวัง'],
    kind:['ด้าม', 'พลาสติก','เปรียก'],
    size:['12cm', '100m','300mm'],
    actions:['edit']
  }
  return  <IntlProvider locale="en" messages={ThLang}>
  <div className="flex flex-col bg-white h-[100vh]">
      <HeaderPage subTitle={'รายการสินค้า'} headAddButton={'เพิ่มสินค้าอะไหล่'} />
      <TableList colsArr={['code', 'name','brand','type','group','kind','size','actions']} actions={{export:"download"}} listData={mockList} />
  </div>
  </IntlProvider>
}
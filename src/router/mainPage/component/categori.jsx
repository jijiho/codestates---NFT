import React from 'react';
import { stockDataHeader, CategoryData } from '../../../dataSet';
import RawStockBlock from '../../../components/rawStockBlock/rawStockBlock';
import { Link } from 'react-router-dom';
function Category({ data }) {
  
  return (
    <div>
      <div className='ml-2 text-sm flex justify-between border-b border-black'>
        <div>심볼</div>
        <div className='flex justify-between w-3/12'>

        <div>이름</div>
        <div>가격</div>
        </div>

        
      </div>
      {data.map((el) => {
        // stockDataHeader에서 el과 동일한 이름을 가진 항목을 찾습니다.
        return (
            <Link className='m-2 flex w-full h-12  hover:bg-slate-100' to={`stockDetail/${el.symbol}`}>
          <div className='h-full w-full'>
            <div className='flex justify-between'>
            <div>{el.symbol}</div>
            <div className='flex justify-between w-3/12'>
              <div>{el.company}</div>
              <div>{el.price_2002}$</div>

            </div>
            </div>
          </div>
            </Link>
          
        );
      })}
      <div className='flex justify-end'><Link className='px-4 py-2 font-bold'  to={"stockDetail/두나무"}>더 보러 가기</Link></div>
    </div>
  );
}

export default Category;

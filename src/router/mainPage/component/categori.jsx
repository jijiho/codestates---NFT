import React from 'react';
import { stockDataHeader, CategoryData } from '../../../dataSet';
import RawStockBlock from '../../../components/rawStockBlock/rawStockBlock';
import { Link } from 'react-router-dom';
function Category({ data }) {
  return (
    <div>
      {data.map((el) => {
        // stockDataHeader에서 el과 동일한 이름을 가진 항목을 찾습니다.
        const matchingStock = stockDataHeader.find((stock) => stock.name === el);

        return (
          <p key={el}>
            <Link to={`stockDetail/${el}`}>{el}
            <button className='m-2'>
              {matchingStock && <span> 가격: {matchingStock.price}</span>}
            </button>
            </Link>
          </p>
        );
      })}
    </div>
  );
}

export default Category;

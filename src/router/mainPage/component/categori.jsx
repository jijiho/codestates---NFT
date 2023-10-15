import React from 'react';
import { stockDataHeader, CategoryData } from '../../../dataSet';
/*
function Category({data}) {
        //console.log(data);        
        return(
                <div>
                        {data.map((el) => {
                                return(
                                    <p>
                                        <button className='m-2'>{el}</button>
                                       
                                
                                    </p>
                                );
                        })}
                </div>
        );
    }
*/
function Category({ data }) {
  return (
    <div>
      {data.map((el) => {
        // stockDataHeader에서 el과 동일한 이름을 가진 항목을 찾습니다.
        const matchingStock = stockDataHeader.find((stock) => stock.name === el);

        return (
          <p key={el}>
            <button className='m-2'>
              {el}
              {matchingStock && <span> 가격: {matchingStock.price}</span>}
            </button>
          </p>
        );
      })}
    </div>
  );
}

export default Category;

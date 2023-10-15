import React, { useState, useEffect } from 'react';
import { stockDataHeader } from '../../dataSet';
import { Link } from 'react-router-dom';
const SearchResult = ({searchTxt}) => {
    return(
        <div className="absolute bg-yellow-500">
            <p>
                {stockDataHeader.map((el)=>{
                    if(el.name.includes(searchTxt)&&searchTxt!==""){
                        return(
                            <div>

                                <Link to={`stockDetail/${el.name}`}>
                                {el.name}
                                </Link>

                            </div>
                        )
                    }
                })}
            </p>
        </div>
    );
};

export default SearchResult;

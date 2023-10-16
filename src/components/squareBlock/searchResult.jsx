import { stockDataHeader } from '../../dataSet';
import { Link } from 'react-router-dom';
const SearchResult = ({searchTxt}) => {
    return(
        <div className=" absolute bg-sky-200">
            
                {stockDataHeader.map((el)=>{
                    if(el.name.includes(searchTxt)&&searchTxt!==""){
                        return(
                            <div className="hover:bg-sky-100">

                                <Link to={`stockDetail/${el.name}`}>
                                {el.name}
                                </Link>

                            </div>
                        )
                    }
                })}
            
        </div>
    );
};

export default SearchResult;

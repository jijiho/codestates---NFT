import { stockDataHeader } from '../../dataSet';
import { Link } from 'react-router-dom';
const SearchResult = ({searchTxt}) => {
    if(searchTxt!==""&&searchTxt!=="Search"){
        return(
            <div className="w-44 h-28 overflow-y-scroll absolute bg-sky-200">
                {stockDataHeader.filter(el => el.name.includes(searchTxt)).map((el)=>{
                    return(
                        <div className="hover:bg-sky-100" key={el.name}>
                            <Link to={`stockDetail/${el.name}`}>
                                {el.name}
                            </Link>
                        </div>
                    )
                })}
            </div>
        );
    }
};

export default SearchResult;

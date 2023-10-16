import FlowChartEl from "./flowChartEl/flowChartEl";
import { stockDataHeader } from "../../dataSet";

export default function FlowChart() {
  return (
    <div className="overflow-hidden pt-2">
      <div className="flex">
        <div className="" ><ul className="flex  animate-infiRoll1 ">
          <li>
            <FlowChartEl stockInfo={stockDataHeader[0]}></FlowChartEl>
          </li>
          <li>
            <FlowChartEl stockInfo={stockDataHeader[1]}></FlowChartEl>
          </li>
          <li>
            <FlowChartEl stockInfo={stockDataHeader[2]}></FlowChartEl>
          </li>
          <li>
            <FlowChartEl stockInfo={stockDataHeader[3]}></FlowChartEl>
          </li>
          <li>
            <FlowChartEl stockInfo={stockDataHeader[4]}></FlowChartEl>
          </li> 
           <li>
            <FlowChartEl stockInfo={stockDataHeader[5]}></FlowChartEl>
          </li> 
           <li>
            <FlowChartEl stockInfo={stockDataHeader[6]}></FlowChartEl>
          </li>
            <li>
            <FlowChartEl stockInfo={stockDataHeader[7]}></FlowChartEl>
          </li>
          <li>
            <FlowChartEl stockInfo={stockDataHeader[8]}></FlowChartEl>
          </li>
          
        </ul>
        </div>
        <div>
        <ul className="flex animate-infiRoll2 ">
          <li>
            <FlowChartEl stockInfo={stockDataHeader[0]}></FlowChartEl>
          </li>
          <li>
            <FlowChartEl stockInfo={stockDataHeader[1]}></FlowChartEl>
          </li>
          <li>
            <FlowChartEl stockInfo={stockDataHeader[2]}></FlowChartEl>
          </li>
          <li>
            <FlowChartEl stockInfo={stockDataHeader[3]}></FlowChartEl>
          </li>
          <li>
            <FlowChartEl stockInfo={stockDataHeader[4]}></FlowChartEl>
          </li> 
           <li>
            <FlowChartEl stockInfo={stockDataHeader[5]}></FlowChartEl>
          </li>
          <li>
            <FlowChartEl stockInfo={stockDataHeader[6]}></FlowChartEl>
          </li> 
          <li>
            <FlowChartEl stockInfo={stockDataHeader[7]}></FlowChartEl>
          </li>
          <li>
            <FlowChartEl stockInfo={stockDataHeader[8]}></FlowChartEl>
          </li>
          
        </ul>
      </div>
      </div>
    </div>
  );
}

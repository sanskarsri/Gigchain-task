import React, {useContext} from "react";
import "./tablerow.css";
import DataContext from "../Datacontext";
import moment from 'moment'

function Tablerow() {

  const details = useContext(DataContext);

  console.log(details);

  return (
    <>
    <div className="table-container mt-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Invoice ID</th>
            <th scope="col"># Gig Types</th>
            <th scope="col"># of Gigs</th>
            <th scope="col">Total Invoice Amount</th>
            <th scope="col">Start Date of the Gigs</th>
            <th scope="col">End Date of the Gigs</th>
            <th scope="col">Current Status</th>
            <th scope="col">%age completion</th>
            <th scope="col">Contact CSM</th>
            <th scope="col">Proof of Completion</th>
          </tr>
        </thead>
        <tbody>
          {details && details.map((entry,i)=>
          <tr key={i}>
            <td>{entry._id}</td>
            <td>{entry.gigtype}</td>
            <td>{entry.gignumber}</td>
            <td>{entry.amount}</td>
            <td>{moment(entry.start).format('MMM Do')}</td>
            <td>{moment(entry.end).format('MMM Do')}</td>
            <td>{entry.status.toUpperCase()}</td>
            <td>{entry.percentage} %</td>
            <td>{entry.contactcsm}</td>
            <td><a href={entry.proof} target="_blank" >Link</a></td>
          </tr>
          )}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default Tablerow;

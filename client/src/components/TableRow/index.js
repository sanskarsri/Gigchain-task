import "./tablerow.css";

function Tablerow() {
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
}

export default Tablerow;

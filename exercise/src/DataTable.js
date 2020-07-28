import React from "react";

export default ({ packages, sort }) => {
  return (
    <table className="table">
      <tr>
        {packages.length > 0 && (
          <th>
            <div className="d-flex justify-content-between">
              <div>Packages ({packages.length} total) </div>
              <div>
                <span className="text-muted">Packages in {sort} order</span>
              </div>
            </div>
          </th>
        )}
      </tr>
      {packages.map((item) => {
        return (
          <tr>
            <td>{item}</td>
          </tr>
        );
      })}
    </table>
  );
};

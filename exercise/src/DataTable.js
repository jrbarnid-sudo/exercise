import React from "react";

export default ({ packages }) => {
  return (
    <div className="col-4">
      <table className="table">
        <tr>
          {packages.length > 0 && <th>Packages ({packages.length} total)</th>}
        </tr>
        {packages.map((item) => {
          return (
            <tr>
              <td>{item}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

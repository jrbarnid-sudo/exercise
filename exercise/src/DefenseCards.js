import React from "react";

export default ({ dataset }) => {
  const {
    accessLevel,
    bureauCode,
    contactPoint,
    dataQuality,
    description,
    identifier,
    keyword,
    modified,
    programCode,
    title,
  } = dataset;

  return (
    <div className="card col-12 py-2 px-2">
      <div className="card-title font-weight-bold pt-3">{title}</div>
      <div className="card-body">
        <dl>
          <dt>Identifier</dt>
          <dd>{identifier}</dd>
          <dt>Access Level</dt>
          <dd>{accessLevel}</dd>
          <dt>Bureau Code</dt>
          <dd>{bureauCode.map((b) => b).join(",")}</dd>
          <dt>Contact Point</dt>
          <dd>
            <a href={contactPoint.hasEmail}>{contactPoint.fn}</a>
          </dd>
          <dt>Data Quality</dt>
          <dd>{dataQuality ? "True" : "False"}</dd>
          <dt>Description</dt>
          <dd>{description}</dd>
          <dt>Keyword</dt>
          <dd>{keyword.join(",")}</dd>
          <dt>Program Code</dt>
          <dd>{programCode}</dd>
          <dt>Modified</dt>
          <dd>{modified}</dd>
        </dl>
      </div>
    </div>
  );
};

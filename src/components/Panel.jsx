import React from "react";
import { Eye } from "lucide-react";

/** Consistent interactive surface used by analytics cards and charts. */
const Panel = ({
  title,
  icon: Icon,
  children,
  wide = false,
  action,
}) => {
  return (
    <section className={`panel ${wide ? "panel-wide" : ""}`}>
      <button
        type="button"
        className="panel-heading"
        onClick={action}
        aria-label={`Inspect ${title}`}
      >
        <span className="panel-icon">
          {Icon ? <Icon size={14} aria-hidden="true" /> : null}
        </span>
        <b>{title}</b>
        <span className="panel-action">
          <Eye size={13} aria-hidden="true" />
        </span>
      </button>
      <div className="panel-content">{children}</div>
    </section>
  );
};

export default Panel;

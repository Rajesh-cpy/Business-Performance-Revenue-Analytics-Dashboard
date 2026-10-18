import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { detailRows, navigation } from "../data/demoData";

const columns = {
  Leads: ["Lead ID", "Owner", "Source", "Status", "Potential value"],
  Quotations: ["Quote ID", "Service", "Lead owner", "Status", "Quoted amount"],
  "Deals & Revenue": ["Deal ID", "Service", "Priority", "Stage", "Deal value"],
  "Orders & Payments": [
    "Order ID",
    "Service",
    "Order status",
    "Payment status",
    "Order value",
  ],
  "Team activity": [
    "Team member",
    "Leads",
    "Qualified",
    "Converted",
    "Revenue",
  ],
  Reports: ["Report", "Coverage", "Date range", "Status", "Format"],
};
const SectionPage = ({ title }) => {
  const [query, setQuery] = useState("");
  const rows = detailRows[title] ?? [];
  const filtered = useMemo(
    () =>
      rows.filter((row) =>
        row.join(" ").toLowerCase().includes(query.toLowerCase()),
      ),
    [rows, query],
  );
  const current = navigation.find((item) => item.label === title);
  const exportRows = () => {
    const csv = [columns[title], ...filtered]
      .map((row) =>
        row
          .map((value) => `"${String(value).replaceAll('"', '""')}"`)
          .join(","),
      )
      .join("\n");
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8;" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };
  return (
    <main className="section-page">
      <header className="section-page-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Dashboard
        </Link>
        <span className="eyebrow">BIZMETRICS / WORKSPACE</span>
        <h1>{title}</h1>
        <p>
          {current?.description}. Sample data is provided for interactive
          evaluation.
        </p>
      </header>
      <section className="section-page-card">
        <div className="section-page-toolbar">
          <div>
            <h2>{title} records</h2>
            <p>{filtered.length} records · Demo workspace</p>
          </div>
          <div className="section-page-actions">
            <label className="search-box">
              <Search size={15} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search records…"
                aria-label="Search records"
              />
            </label>
            <button className="primary-btn" onClick={exportRows}>
              <Download size={15} /> Export CSV
            </button>
          </div>
        </div>
        <div className="section-table-wrap">
          <table className="section-table">
            <thead>
              <tr>
                {columns[title].map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, index) => (
                <tr key={`${row[0]}-${index}`}>
                  {row.map((cell, i) => (
                    <td key={`${cell}-${i}`}>
                      {i === 3 &&
                      [
                        "Qualified",
                        "Converted",
                        "Accepted",
                        "Won",
                        "Completed",
                        "Ready",
                        "In progress",
                      ].includes(cell) ? (
                        <span className="status-pill">{cell}</span>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="empty-state">No records match “{query}”.</div>
          )}
        </div>
      </section>
      <footer className="section-page-footer">
        Illustrative analytics · No backend connection required ·{" "}
        <Link to="/">Return to overview</Link>
      </footer>
    </main>
  );
};

export default SectionPage;

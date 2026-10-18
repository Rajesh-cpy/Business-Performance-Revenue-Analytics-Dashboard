import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  FunnelChart,
  Funnel,
  LabelList,
  RadialBarChart,
  RadialBar,
} from "recharts";
import {
  CalendarDays,
  Download,
  Users,
  CheckCircle2,
  CircleDollarSign,
  Filter,
  FileText,
  BriefcaseBusiness,
  Receipt,
  Target,
  TrendingUp,
  FileCheck2,
  Wallet,
  Activity,
  ChevronDown,
  Search,
  ArrowUpRight,
  ArrowDownRight,
  X,
  Eye,
  Menu,
  RefreshCw,
  CreditCard,
  ClipboardList,
  CircleHelp,
} from "lucide-react";
import "../style.css";
import Panel from "../components/Panel.jsx";

const COLORS = [
  "#2864f0",
  "#09b6c7",
  "#f59e0b",
  "#8b5cf6",
  "#10b981",
  "#f97316",
];
const money = (n) => "₹" + Number(n).toLocaleString("en-IN");
const baseDaily = [
  {
    day: "1 Oct",
    leads: 9,
    qualified: 5,
    converted: 2,
    revenue: 22000,
    collected: 19000,
  },
  {
    day: "4 Oct",
    leads: 24,
    qualified: 13,
    converted: 6,
    revenue: 34000,
    collected: 28000,
  },
  {
    day: "7 Oct",
    leads: 28,
    qualified: 15,
    converted: 8,
    revenue: 42000,
    collected: 38000,
  },
  {
    day: "10 Oct",
    leads: 11,
    qualified: 7,
    converted: 3,
    revenue: 35000,
    collected: 30000,
  },
  {
    day: "13 Oct",
    leads: 8,
    qualified: 5,
    converted: 2,
    revenue: 31000,
    collected: 27000,
  },
  {
    day: "16 Oct",
    leads: 5,
    qualified: 3,
    converted: 1,
    revenue: 28000,
    collected: 24000,
  },
  {
    day: "19 Oct",
    leads: 3,
    qualified: 2,
    converted: 1,
    revenue: 9000,
    collected: 7000,
  },
  {
    day: "22 Oct",
    leads: 2,
    qualified: 1,
    converted: 0,
    revenue: 0,
    collected: 0,
  },
  {
    day: "25 Oct",
    leads: 1,
    qualified: 1,
    converted: 0,
    revenue: 0,
    collected: 0,
  },
  {
    day: "28 Oct",
    leads: 0,
    qualified: 0,
    converted: 0,
    revenue: 0,
    collected: 0,
  },
  {
    day: "31 Oct",
    leads: 0,
    qualified: 0,
    converted: 0,
    revenue: 0,
    collected: 0,
  },
];
const services = [
  {
    name: "Private Limited Company",
    short: "Private Limited",
    count: 56,
    value: 654326,
    accepted: 0,
    pending: 56,
    rejected: 0,
    category: "Company Registration",
  },
  {
    name: "LLP Registration",
    short: "LLP",
    count: 16,
    value: 135272,
    accepted: 0,
    pending: 16,
    rejected: 0,
    category: "Company Registration",
  },
  {
    name: "Trademark",
    short: "Trademark",
    count: 8,
    value: 22496,
    accepted: 0,
    pending: 8,
    rejected: 0,
    category: "IP & Legal",
  },
  {
    name: "Startup India Registration",
    short: "Startup India",
    count: 5,
    value: 22399,
    accepted: 0,
    pending: 5,
    rejected: 0,
    category: "Government Services",
  },
  {
    name: "ISO Certification",
    short: "ISO Certification",
    count: 5,
    value: 71117,
    accepted: 0,
    pending: 5,
    rejected: 0,
    category: "Compliance",
  },
  {
    name: "Penalty / Annual Filing",
    short: "Penalty",
    count: 2,
    value: 27500,
    accepted: 0,
    pending: 2,
    rejected: 0,
    category: "Compliance",
  },
  {
    name: "Annual Compliance",
    short: "Annual Compliance",
    count: 2,
    value: 27500,
    accepted: 0,
    pending: 2,
    rejected: 0,
    category: "Compliance",
  },
];
const salesTeam = [
  {
    user: "Nancy Singh",
    initials: "N",
    leads: 65,
    qualified: 32,
    converted: 12,
    rate: 18.5,
    quotes: 54,
    deals: 13,
    value: 99217,
    revenue: 52498,
    color: "#8b5cf6",
  },
  {
    user: "Sneha Choudhary",
    initials: "S",
    leads: 4,
    qualified: 3,
    converted: 2,
    rate: 50,
    quotes: 13,
    deals: 5,
    value: 70980,
    revenue: 40000,
    color: "#f59e0b",
  },
  {
    user: "Tannu Kumari",
    initials: "T",
    leads: 8,
    qualified: 3,
    converted: 2,
    rate: 25,
    quotes: 22,
    deals: 4,
    value: 48420,
    revenue: 32420,
    color: "#8b5cf6",
  },
  {
    user: "Aman Verma",
    initials: "A",
    leads: 14,
    qualified: 4,
    converted: 0,
    rate: 0,
    quotes: 18,
    deals: 1,
    value: 22000,
    revenue: 12000,
    color: "#06b6d4",
  },
];
const operations = [
  {
    user: "Gaurav Pant",
    initials: "G",
    orders: 4,
    stages: 17,
    pending: 13,
    overdue: 0,
  },
  {
    user: "Srishti Upadhyay",
    initials: "S",
    orders: 1,
    stages: 0,
    pending: 5,
    overdue: 0,
  },
  {
    user: "Azam Afaroz",
    initials: "A",
    orders: 0,
    stages: 0,
    pending: 0,
    overdue: 0,
  },
  { user: "L&D", initials: "L", orders: 0, stages: 0, pending: 0, overdue: 0 },
];
const activities = [
  {
    time: "2026-10-16 12:14:10",
    employee: "Nancy Singh",
    action: "Lead updated",
    record: "#L-209610",
    type: "Lead",
  },
  {
    time: "2026-10-16 12:14:08",
    employee: "Nancy Singh",
    action: "Lead updated",
    record: "#L-209610",
    type: "Lead",
  },
  {
    time: "2026-10-16 11:53:02",
    employee: "Sneha Choudhary",
    action: "Payment recorded",
    record: "#P-1081",
    type: "Payment",
  },
  {
    time: "2026-10-16 11:52:43",
    employee: "Sneha Choudhary",
    action: "Order created",
    record: "#O-2168",
    type: "Order",
  },
  {
    time: "2026-10-16 11:52:43",
    employee: "Sneha Choudhary",
    action: "Deal created",
    record: "#D-822",
    type: "Deal",
  },
  {
    time: "2026-10-16 11:45:27",
    employee: "Sneha Choudhary",
    action: "Quotation created",
    record: "#Q-10467",
    type: "Quotation",
  },
  {
    time: "2026-10-16 11:44:50",
    employee: "Tannu Kumari",
    action: "Quotation created",
    record: "#Q-10466",
    type: "Quotation",
  },
];
const Dashboard = () => {
  const navigate = useNavigate();
  const [period, setPeriod] = useState("Last 30 Days");
  const [customFrom, setCustomFrom] = useState("2026-10-01");
  const [customTo, setCustomTo] = useState("2026-10-31");
  const [user, setUser] = useState("All Users");
  const [department, setDepartment] = useState("All Departments");
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  const [activeNav, setActiveNav] = useState("Overview");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [feedback, setFeedback] = useState(null);
  useEffect(() => {
    setIsUpdating(true);
    const timeoutId = window.setTimeout(() => setIsUpdating(false), 220);
    return () => window.clearTimeout(timeoutId);
  }, [period, customFrom, customTo, user, department]);
  useEffect(() => {
    if (!feedback) return undefined;
    const timeoutId = window.setTimeout(() => setFeedback(null), 3200);
    return () => window.clearTimeout(timeoutId);
  }, [feedback]);
  const periodFactor =
    period === "Today"
      ? 0.12
      : period === "Last 7 Days"
        ? 0.42
        : period === "Custom Range"
          ? Math.max(
              0,
              Math.min(
                1,
                (new Date(customTo) - new Date(customFrom) + 86400000) /
                  (31 * 86400000),
              ),
            )
          : 1;
  const selectedUserFactor =
    user === "All Users"
      ? 1
      : Math.max(0.08, (salesTeam.find((member) => member.user === user)?.leads ?? 0) / 91);
  const selectedDepartmentFactor =
    department === "All Departments"
      ? 1
      : { Sales: 0.72, Operations: 0.2, Finance: 0.08 }[department];
  const factor = periodFactor * selectedUserFactor * selectedDepartmentFactor;
  const filteredServices = useMemo(
    () =>
      services.filter(
        (s) =>
          s.name.toLowerCase().includes(search.toLowerCase()) ||
          s.category.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );
  const daily = useMemo(
    () =>
      baseDaily
        .map((d, i) => ({
          ...d,
          leads: Math.round(d.leads * factor),
          qualified: Math.round(d.qualified * factor),
          converted: Math.round(d.converted * factor),
          revenue: Math.round(d.revenue * factor),
          collected: Math.round(d.collected * factor),
        }))
        .filter((d, i) =>
          period === "Today"
            ? i === 5
            : period === "Last 7 Days"
              ? i >= 4
              : period === "Custom Range"
                ? i >= Math.max(0, 11 - Math.max(1, Math.ceil(periodFactor * 11)))
                : true,
        ),
    [period, factor, periodFactor],
  );
  const totalLeads = Math.round(91 * factor),
    qualified = Math.round(42 * factor),
    converted = Math.round(16 * factor),
    unqualified = Math.max(0, totalLeads - qualified),
    quoteCount = Math.round(107 * factor),
    dealCount = Math.round(23 * factor),
    invoiceCount = Math.round(142 * factor);
  const totalRevenue = Math.round(182627 * factor),
    collected = Math.round(120698 * factor),
    outstanding = totalRevenue - collected;
  const leadsTrend = daily.reduce((s, d) => s + d.leads, 0) || 1;
  const exportCSV = () => {
    try {
      const rows = [
        ["Metric", "Value"],
        ["Period", period],
        ["Leads", totalLeads],
        ["Qualified leads", qualified],
        ["Converted leads", converted],
        ["Quotations", quoteCount],
        ["Deals", dealCount],
        ["Total revenue", totalRevenue],
        ["Collected revenue", collected],
        ["Outstanding revenue", outstanding],
        [],
        ["Service", "Quotations", "Quoted amount"],
        ...services.map((s) => [
          s.name,
          Math.round(s.count * factor),
          Math.round(s.value * factor),
        ]),
      ];
      const csv = rows
        .map((r) =>
          r
            .map((v) => '"' + String(v ?? "").replaceAll('"', '""') + '"')
            .join(","),
        )
        .join("\n");
      const objectUrl = URL.createObjectURL(
        new Blob([csv], { type: "text/csv;charset=utf-8" }),
      );
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download =
        "business-analytics-" +
        period.toLowerCase().replaceAll(" ", "-") +
        ".csv";
      link.click();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
      setFeedback({
        type: "success",
        message: "Your report has been exported.",
      });
    } catch (error) {
      console.error("Unable to export dashboard report:", error);
      setFeedback({
        type: "error",
        message: "The report could not be exported. Please try again.",
      });
    }
  };
  const kpis = [
    {
      title: "New Leads",
      value: totalLeads,
      change: "+57.2%",
      sub: "vs. previous period",
      icon: Users,
      color: "blue",
      detail: "All incoming leads",
      trend: 1,
    },
    {
      title: "Qualified Leads",
      value: qualified,
      change: "+34.4%",
      sub: "vs. previous period",
      icon: CheckCircle2,
      color: "green",
      detail: "Sales-qualified leads",
      ratio: "46.2%",
    },
    {
      title: "Converted Leads",
      value: converted,
      change: "+40.7%",
      sub: "vs. previous period",
      icon: Target,
      color: "purple",
      detail: "Converted to customers",
      ratio: "25.3%",
    },
    {
      title: "Unqualified Leads",
      value: unqualified,
      change: "+43%",
      sub: "vs. previous period",
      icon: CircleHelp,
      color: "red",
      detail: "Not currently qualified",
      ratio: "53.8%",
    },
    {
      title: "Conversion Rate",
      value: `${totalLeads ? ((converted / totalLeads) * 100).toFixed(1) : "0.0"}%`,
      change: "+61.7%",
      sub: "vs. previous period",
      icon: Filter,
      color: "cyan",
      detail: "Converted / total leads",
    },
    {
      title: "Quotations Created",
      value: quoteCount,
      change: "+127.7%",
      sub: "vs. previous period",
      icon: FileText,
      color: "teal",
      detail: "Quotes sent to leads",
    },
    {
      title: "Deals Created",
      value: dealCount,
      change: "+61.7%",
      sub: "vs. previous period",
      icon: BriefcaseBusiness,
      color: "violet",
      detail: "Deals created",
    },
    {
      title: "Invoices Generated",
      value: invoiceCount,
      change: "+19.7%",
      sub: "vs. previous period",
      icon: Receipt,
      color: "mint",
      detail: "Invoices issued",
    },
  ];
  const openDetail = (title, content) => setModal({ title, content });
  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileMenu ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark">B</div>
          <div>
            <b>BizMetrics</b>
            <span>ANALYTICS SUITE</span>
          </div>
          <button className="close-menu" onClick={() => setMobileMenu(false)}>
            <X size={18} />
          </button>
        </div>
        <div className="workspace">
          <div className="workspace-avatar">AC</div>
          <div>
            <b>Acme Consulting</b>
            <small>Business workspace</small>
          </div>
          <ChevronDown size={15} />
        </div>
        <div className="nav-label">WORKSPACE</div>
        <nav>
          {[
            ["Overview", Activity],
            ["Leads", Users],
            ["Quotations", FileText],
            ["Deals & Revenue", TrendingUp],
            ["Orders & Payments", CreditCard],
          ].map(([n, Icon]) => (
            <button
              key={n}
              className={`nav-item ${activeNav === n ? "nav-active" : ""}`}
              onClick={() => {
                setActiveNav(n);
                setMobileMenu(false);
                const paths = {
                  Overview: "/",
                  Leads: "/leads",
                  Quotations: "/quotations",
                  "Deals & Revenue": "/deals",
                  "Orders & Payments": "/orders",
                };
                navigate(paths[n] || "/");
              }}
            >
              <Icon size={17} />
              <span>{n}</span>
              {n === "Leads" && <span className="nav-count">91</span>}
            </button>
          ))}
        </nav>
        <div className="nav-label">MANAGEMENT</div>
        <nav>
          {[
            ["Team activity", Users],
            ["Reports", ClipboardList],
          ].map(([n, Icon]) => (
            <button
              key={n}
              className="nav-item"
              onClick={() => {
                setMobileMenu(false);
                navigate(n === "Team activity" ? "/team" : "/reports");
              }}
            >
              <Icon size={17} />
              <span>{n}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card">
            <div className="help-icon">
              <CircleHelp size={17} />
            </div>
            <b>Need a hand?</b>
            <p>Explore the dashboard and learn about your business.</p>
            <button
              onClick={() =>
                openDetail(
                  "Dashboard guide",
                  "Choose a date range to refresh all metrics, use search to filter service categories, click KPI cards or chart panels to drill into details, and use Export to download a CSV report.",
                )
              }
            >
              View guide <ArrowUpRight size={13} />
            </button>
          </div>
          <div className="profile">
            <div className="profile-avatar">RJ</div>
            <div>
              <b>Admin User</b>
              <small>Administrator</small>
            </div>
            <ChevronDown size={15} />
          </div>
        </div>
      </aside>
      <main className="main-area">
        <header className="topbar">
          <button className="hamburger" onClick={() => setMobileMenu(true)}>
            <Menu />
          </button>
          <div className="breadcrumb">
            Workspace <span>/</span> <b>{activeNav}</b>
          </div>
          <div className="top-actions">
            <button
              className="icon-btn"
              title="Refresh dashboard"
              onClick={() => setPeriod("Last 30 Days")}
            >
              <RefreshCw size={16} />
            </button>
            <button
              className="icon-btn notification"
              onClick={() =>
                openDetail(
                  "Notifications",
                  "You are all caught up. Recent lead, quotation and payment activity is shown in Recent CRM Activity.",
                )
              }
            >
              <Activity size={17} />
              <i />
            </button>
            <div className="top-avatar">RJ</div>
          </div>
        </header>
        <div className="page-content">
          <div className="page-heading">
            <div>
              <h1>Business Performance &amp; Revenue Analytics</h1>
              <p>
                Track your leads, conversions, quotations, deals, revenue and
                operations in real time.
              </p>
            </div>
            <div className="filters">
              <label className="date-select">
                <CalendarDays size={15} />
                <select
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  aria-label="Date range"
                >
                  <option>Today</option>
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Custom Range</option>
                </select>
                <ChevronDown size={13} />
              </label>
              {period === "Custom Range" && (
                <div className="custom-dates">
                  <input
                    type="date"
                    value={customFrom}
                    onChange={(e) => setCustomFrom(e.target.value)}
                  />
                  <span>to</span>
                  <input
                    type="date"
                    value={customTo}
                    onChange={(e) => setCustomTo(e.target.value)}
                  />
                </div>
              )}
              <label className="filter-select">
                <select value={user} onChange={(e) => setUser(e.target.value)}>
                  <option>All Users</option>
                  {salesTeam.map((x) => (
                    <option key={x.user}>{x.user}</option>
                  ))}
                </select>
                <ChevronDown size={13} />
              </label>
              <label className="filter-select">
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option>All Departments</option>
                  <option>Sales</option>
                  <option>Operations</option>
                  <option>Finance</option>
                </select>
                <ChevronDown size={13} />
              </label>
              <button className="export-btn" onClick={exportCSV}>
                <Download size={15} /> Export
              </button>
            </div>
          </div>
          {isUpdating && (
            <div className="dashboard-loading" role="status" aria-live="polite">
              <span className="loading-spinner" aria-hidden="true" />
              Updating dashboard…
            </div>
          )}
          {(user !== "All Users" || department !== "All Departments") && (
            <div className="filter-notice">
              <Filter size={14} /> Showing dashboard for <b>{user}</b> ·{" "}
              <b>{department}</b>
              <button
                onClick={() => {
                  setUser("All Users");
                  setDepartment("All Departments");
                }}
              >
                Clear filters <X size={12} />
              </button>
            </div>
          )}
          <div className="kpi-grid">
            {kpis.map((k, i) => {
              const Icon = k.icon;
              return (
                <button
                  className="kpi-card"
                  key={k.title}
                  onClick={() =>
                    openDetail(
                      k.title,
                      `${k.value} ${k.title.toLowerCase()} for ${period.toLowerCase()}. ${k.detail}. Change: ${k.change} ${k.sub}.`,
                    )
                  }
                >
                  <div className="kpi-top">
                    <span className={`kpi-icon ${k.color}`}>
                      <Icon size={16} />
                    </span>
                    <span className="kpi-title">{k.title}</span>
                    <span className="kpi-more">•••</span>
                  </div>
                  <div className="kpi-value-row">
                    <strong>{k.value}</strong>
                    {k.ratio && (
                      <span className="kpi-ratio">
                        {k.ratio}
                        <small>
                          {i === 1
                            ? "Qualified %"
                            : i === 2
                              ? "Conversion %"
                              : "Unqualified %"}
                        </small>
                      </span>
                    )}
                  </div>
                  <div className="kpi-footer">
                    <span className="positive">
                      <TrendingUp size={12} />
                      {k.change}
                    </span>
                    <span>{k.sub}</span>
                  </div>
                  <div className={`kpi-spark spark-${k.color}`}>
                    <svg viewBox="0 0 90 20" preserveAspectRatio="none">
                      <polyline
                        points={
                          i % 2
                            ? "0,16 12,13 24,15 36,7 48,10 60,4 72,8 90,2"
                            : "0,14 12,17 24,8 36,12 48,5 60,9 72,3 90,6"
                        }
                      />
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="grid-lead charts-row">
            <Panel
              title="Target Achievement"
              icon={Target}
              action={() =>
                openDetail(
                  "Target achievement",
                  "Monthly revenue target: ₹85,00,000. Achieved: ₹1,02,928 (1.2%). Remaining: ₹83,97,072 (98.8%).",
                )
              }
            >
              <div className="target-top">
                <span>Monthly Revenue Target</span>
                <span>Target vs Achieved (Revenue)</span>
              </div>
              <div className="target-value">₹85,00,000</div>
              <div className="target-body">
                <div className="target-stats">
                  <div>
                    <i className="legend-dot green-dot" /> <span>Achieved</span>
                    <b>{money(Math.round(102928 * factor))}</b>
                    <small>1.2%</small>
                  </div>
                  <div>
                    <i className="legend-dot gray-dot" />
                    <span>Remaining</span>
                    <b>{money(Math.round(8397072 * factor))}</b>
                    <small>98.8%</small>
                  </div>
                  <div className="target-progress">
                    <span style={{ width: `${Math.max(2, 1.2 * factor)}%` }} />
                  </div>
                </div>
                <div className="target-bars">
                  <div className="funnel-shape funnel-one" />
                  <div className="funnel-shape funnel-two" />
                  <div className="funnel-label">
                    Achieved
                    <br />
                    <b>1.2%</b>
                  </div>
                  <div className="funnel-label label-right">
                    Remaining
                    <br />
                    <b>98.8%</b>
                  </div>
                </div>
              </div>
            </Panel>
            <Panel
              title="Lead Funnel"
              icon={Filter}
              action={() =>
                openDetail(
                  "Lead funnel",
                  `New leads: ${totalLeads}. Qualified: ${qualified}. Converted: ${converted}. Unqualified: ${unqualified}.`,
                )
              }
            >
              <div className="lead-funnel">
                <div
                  className="funnel-stage stage-blue"
                  style={{ width: "100%" }}
                >
                  <b>New Leads</b>
                  <strong>{totalLeads}</strong>
                  <small>100%</small>
                </div>
                <div
                  className="funnel-stage stage-green"
                  style={{ width: "72%" }}
                >
                  <b>Qualified</b>
                  <strong>{qualified}</strong>
                  <small>
                    {totalLeads
                      ? Math.round((qualified / totalLeads) * 100)
                      : 0}
                    %
                  </small>
                </div>
                <div
                  className="funnel-stage stage-yellow"
                  style={{ width: "48%" }}
                >
                  <b>Converted</b>
                  <strong>{converted}</strong>
                  <small>
                    {totalLeads
                      ? Math.round((converted / totalLeads) * 100)
                      : 0}
                    %
                  </small>
                </div>
                <div className="funnel-unqualified">
                  <span>Unqualified</span>
                  <b>{unqualified}</b>
                  <small>
                    {totalLeads
                      ? Math.round((unqualified / totalLeads) * 100)
                      : 0}
                    %
                  </small>
                </div>
              </div>
            </Panel>
            <Panel
              title="Daily Lead Trend"
              icon={TrendingUp}
              action={() =>
                openDetail(
                  "Daily lead trend",
                  `Showing daily leads, qualified leads and conversions for ${period.toLowerCase()}. Total leads in visible trend: ${leadsTrend}.`,
                )
              }
            >
              <div className="chart-legend">
                <span>
                  <i className="blue-dot" />
                  New Leads
                </span>
                <span>
                  <i className="green-dot" />
                  Qualified
                </span>
                <span>
                  <i className="orange-dot" />
                  Converted
                </span>
              </div>
              <div className="chart-area">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={daily}
                    margin={{ top: 12, right: 5, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 4"
                      vertical={false}
                      stroke="#eaf0f7"
                    />
                    <XAxis
                      dataKey="day"
                      tick={{ fontSize: 9, fill: "#7c8ba3" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 9, fill: "#7c8ba3" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: 10,
                        border: "1px solid #e5ebf4",
                        fontSize: 11,
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="leads"
                      stroke="#2864f0"
                      strokeWidth={2.5}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="qualified"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="converted"
                      stroke="#f59e0b"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Panel>
            <Panel
              title="Lead Sources"
              icon={Users}
              action={() =>
                openDetail(
                  "Lead sources",
                  "Google Ads: 70 leads (76.9%). Website: 21 leads (23.1%). Other and Just Dial: 0 leads.",
                )
              }
            >
              <div className="sources-layout">
                <div className="donut-wrap">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Google Ads", value: 70 },
                          { name: "Website", value: 21 },
                          { name: "Other", value: 0 },
                          { name: "Just Dial", value: 0 },
                        ]}
                        dataKey="value"
                        innerRadius="62%"
                        outerRadius="83%"
                        paddingAngle={2}
                        stroke="none"
                      >
                        <Cell fill="#2864f0" />
                        <Cell fill="#10b981" />
                        <Cell fill="#f59e0b" />
                        <Cell fill="#8b5cf6" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="donut-center">
                    <b>{totalLeads}</b>
                    <span>LEADS</span>
                  </div>
                </div>
                <div className="source-list">
                  {[
                    ["Google Ads", 70, "#2864f0"],
                    ["Website", 21, "#10b981"],
                    ["Other", 0, "#f59e0b"],
                    ["Just Dial", 0, "#8b5cf6"],
                  ].map(([n, v, c]) => (
                    <div key={n}>
                      <span>
                        <i style={{ background: c }} />
                        {n}
                      </span>
                      <b>
                        {Math.round(v * factor)}{" "}
                        <small>
                          ({totalLeads ? ((v / 91) * 100).toFixed(1) : "0.0"}%)
                        </small>
                      </b>
                    </div>
                  ))}
                </div>
              </div>
            </Panel>
          </div>
          <div className="section-heading">
            <span>02</span>
            <h2>Quotation Analytics</h2>
            <div className="section-line" />
            <span className="section-note">
              Quotes, values &amp; conversion
            </span>
          </div>
          <div className="grid-quote charts-row">
            <Panel
              title="Quotations by Service / Order Category"
              icon={FileText}
              action={() =>
                openDetail(
                  "Quotations by service",
                  `${quoteCount} quotations across ${services.length} service types. Use the service table below to inspect values and statuses.`,
                )
              }
            >
              <div className="bar-labels">
                {services.slice(0, 6).map((s) => (
                  <b key={s.short}>{Math.round(s.count * factor)}</b>
                ))}
              </div>
              <div className="chart-area quote-bars">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={services.slice(0, 6).map((s) => ({
                      ...s,
                      count: Math.round(s.count * factor),
                    }))}
                    margin={{ top: 5, right: 0, left: -24, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 4"
                      vertical={false}
                      stroke="#edf1f7"
                    />
                    <XAxis
                      dataKey="short"
                      tick={{ fontSize: 8, fill: "#7c8ba3" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 8, fill: "#7c8ba3" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip />
                    <Bar
                      dataKey="count"
                      fill="#2864f0"
                      radius={[3, 3, 0, 0]}
                      maxBarSize={36}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Panel>
            <Panel
              title="Quotation Value by Service"
              icon={CircleDollarSign}
              action={() =>
                openDetail(
                  "Quotation value by service",
                  `Total quoted value: ${money(Math.round(940610 * factor))}. Private Limited Company contributes the largest share.`,
                )
              }
            >
              <div className="value-funnel">
                <div className="value-funnel-shapes">
                  {services.slice(0, 6).map((s, i) => (
                    <div
                      key={s.short}
                      style={{
                        width: `${100 - i * 12}%`,
                        background: COLORS[i],
                        height: 17,
                        clipPath: "polygon(0 0,100% 0,88% 100%,12% 100%)",
                      }}
                    />
                  ))}
                </div>
                <div className="value-legend">
                  {services.slice(0, 6).map((s, i) => (
                    <div key={s.short}>
                      <i style={{ background: COLORS[i] }} />
                      <span>{s.short}</span>
                      <b>{money(Math.round(s.value * factor))}</b>
                      <small>{Math.round((s.value / 940610) * 100)}%</small>
                    </div>
                  ))}
                </div>
              </div>
            </Panel>
            <Panel
              title="Service Wise Quotation Details"
              icon={ClipboardList}
              wide
              action={() =>
                openDetail(
                  "Quotation details",
                  "Each service record links to quotation history, lead information and current quote status. The data in this dashboard is illustrative.",
                )
              }
            >
              <div className="table-tools">
                <span>{filteredServices.length} services</span>
                <label>
                  <Search size={13} />
                  <input
                    placeholder="Search service..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </label>
              </div>
              <div className="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Service / Order</th>
                      <th>Quotations</th>
                      <th>Quoted Amount</th>
                      <th>Accepted</th>
                      <th>Pending</th>
                      <th>Rejected</th>
                      <th>Conv. Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredServices.map((s) => (
                      <tr
                        key={s.name}
                        onClick={() =>
                          openDetail(
                            s.name,
                            `${s.name}\nQuotations: ${Math.round(s.count * factor)}\nQuoted amount: ${money(Math.round(s.value * factor))}\nAccepted: ${s.accepted}\nPending: ${Math.round(s.pending * factor)}\nRejected: ${s.rejected}\nRelated leads and deal history are available in this demonstration drill-down.`,
                          )
                        }
                      >
                        <td>
                          <b>{s.name}</b>
                          <small>{s.category}</small>
                        </td>
                        <td>{Math.round(s.count * factor)}</td>
                        <td>{money(Math.round(s.value * factor))}</td>
                        <td>{s.accepted}</td>
                        <td>{Math.round(s.pending * factor)}</td>
                        <td>{s.rejected}</td>
                        <td>
                          <span className="rate-pill">0%</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredServices.length === 0 && (
                  <div className="empty-state">
                    No services match your search.
                  </div>
                )}
              </div>
            </Panel>
            <Panel
              title="Quote to Deal Conversion Rate"
              icon={Target}
              action={() =>
                openDetail(
                  "Quote to deal conversion",
                  `${dealCount} deals created from ${quoteCount} quotations. Conversion rate: ${quoteCount ? ((dealCount / quoteCount) * 100).toFixed(1) : 0}%.`,
                )
              }
            >
              <div className="conversion-gauge">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    innerRadius="75%"
                    outerRadius="100%"
                    data={[
                      { name: "Conversion", value: 21.5, fill: "#2864f0" },
                    ]}
                    startAngle={90}
                    endAngle={-270}
                    barSize={11}
                  >
                    <RadialBar
                      dataKey="value"
                      cornerRadius={8}
                      background={{ fill: "#edf2f8" }}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
                <div className="gauge-center">
                  <b>
                    {quoteCount
                      ? ((dealCount / quoteCount) * 100).toFixed(1)
                      : "0.0"}
                    %
                  </b>
                </div>
              </div>
              <div className="gauge-caption">
                <b>{dealCount} Deals</b>
                <span>/ {quoteCount} Quotations</span>
              </div>
              <div className="gauge-bottom">
                <span>Industry benchmark</span>
                <b>30%</b>
              </div>
            </Panel>
          </div>
          <div className="section-heading">
            <span>03</span>
            <h2>Deals &amp; Revenue</h2>
            <div className="section-line" />
            <span className="section-note">Financial performance</span>
          </div>
          <div className="grid-revenue charts-row">
            <Panel
              title="Deals Created vs Deal Revenue (by Service)"
              icon={TrendingUp}
              action={() =>
                openDetail(
                  "Deals and revenue by service",
                  "Compare the number of deals created with deal revenue for each service category.",
                )
              }
            >
              <div className="chart-legend">
                <span>
                  <i className="blue-dot" />
                  Deals Created
                </span>
                <span>
                  <i className="orange-dot" />
                  Deal Revenue (₹)
                </span>
              </div>
              <div className="chart-area">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={services.slice(0, 6).map((s, i) => ({
                      name: s.short.split(" ")[0],
                      deals: Math.max(
                        1,
                        Math.round([6, 5, 4, 3, 2, 2][i] * factor),
                      ),
                      revenue: Math.round((s.value / 1000) * factor),
                    }))}
                    margin={{ top: 10, right: -15, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 4"
                      vertical={false}
                      stroke="#edf1f7"
                    />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 8, fill: "#7c8ba3" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 8, fill: "#7c8ba3" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip />
                    <Bar dataKey="deals" fill="#2864f0" radius={[2, 2, 0, 0]} />
                    <Bar
                      dataKey="revenue"
                      fill="#f59e0b"
                      radius={[2, 2, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Panel>
            <Panel
              title="Revenue by Order / Service Category"
              icon={CircleDollarSign}
              action={() =>
                openDetail(
                  "Revenue by category",
                  "General Filing ₹29.7K (28.9%); Private Limited ₹26.3K (25.6%); FSSAI License ₹15.0K (14.6%); Annual Compliance ₹7.9K (7.7%).",
                )
              }
            >
              <div className="category-bars">
                {[
                  { n: "General Filing", v: 29.7, p: 28.9 },
                  { n: "Private Limited", v: 26.3, p: 25.6 },
                  { n: "FSSAI License", v: 15, p: 14.6 },
                  { n: "Annual Compliance", v: 7.9, p: 7.7 },
                  { n: "Website development", v: 6, p: 5.8 },
                  { n: "Other", v: 6, p: 5.8 },
                ].map((x, i) => (
                  <div key={x.n} className="category-row">
                    <span>{x.n}</span>
                    <div className="hbar">
                      <i
                        style={{
                          width: `${(x.p / 30) * 100}%`,
                          background: COLORS[i],
                        }}
                      />
                    </div>
                    <b>₹{(x.v * factor).toFixed(1)}K</b>
                    <small>({x.p}%)</small>
                  </div>
                ))}
              </div>
            </Panel>
            <Panel
              title="Priority Breakdown"
              icon={Target}
              action={() =>
                openDetail(
                  "Priority breakdown",
                  "High priority: 14 deals, ₹65,428 revenue (60.9%). Medium: 9 deals, ₹37,500 (39.1%). Low: 0 deals.",
                )
              }
            >
              <div className="priority-table">
                <div className="priority-head">
                  <span>Priority</span>
                  <span>Deals</span>
                  <span>Revenue</span>
                  <span>%</span>
                </div>
                {[
                  { p: "High", n: 14, v: 65428, percent: 60.9, c: "#ef4444" },
                  { p: "Medium", n: 9, v: 37500, percent: 39.1, c: "#f59e0b" },
                  { p: "Low", n: 0, v: 0, percent: 0, c: "#10b981" },
                ].map((x) => (
                  <div className="priority-row" key={x.p}>
                    <span>
                      <i style={{ background: x.c }} />
                      {x.p}
                    </span>
                    <b>{Math.round(x.n * factor)}</b>
                    <b>{money(Math.round(x.v * factor))}</b>
                    <strong>{x.percent}%</strong>
                  </div>
                ))}
              </div>
              <div className="priority-track">
                <i />
                <i />
                <i />
              </div>
            </Panel>
            <Panel
              title="Daily Revenue Trend"
              icon={Activity}
              action={() =>
                openDetail(
                  "Daily revenue trend",
                  `Total deal value: ${money(totalRevenue)}. Net collected revenue: ${money(collected)}. Trends update with the selected period.`,
                )
              }
            >
              <div className="chart-legend">
                <span>
                  <i className="blue-dot" />
                  Revenue
                </span>
                <span>
                  <i className="green-dot" />
                  Collected
                </span>
              </div>
              <div className="chart-area">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={daily}
                    margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 4"
                      vertical={false}
                      stroke="#edf1f7"
                    />
                    <XAxis
                      dataKey="day"
                      tick={{ fontSize: 8, fill: "#7c8ba3" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 8, fill: "#7c8ba3" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip formatter={(v) => money(v)} />
                    <Bar
                      dataKey="revenue"
                      fill="#2864f0"
                      radius={[2, 2, 0, 0]}
                    />
                    <Bar
                      dataKey="collected"
                      fill="#10b981"
                      radius={[2, 2, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Panel>
            <Panel
              title="Total vs Collected Revenue"
              icon={Wallet}
              action={() =>
                openDetail(
                  "Revenue collection",
                  `Total deal value: ${money(totalRevenue)}. Net collected revenue: ${money(collected)}. Outstanding revenue: ${money(outstanding)}.`,
                )
              }
            >
              <div className="revenue-summary">
                <div className="revenue-box total-box">
                  <span className="summary-icon">
                    <CircleDollarSign size={18} />
                  </span>
                  <div>
                    <small>Total Deal Value</small>
                    <b>{money(totalRevenue)}</b>
                  </div>
                  <span className="summary-change">+18.4%</span>
                </div>
                <div className="revenue-box collected-box">
                  <span className="summary-icon">
                    <CheckCircle2 size={18} />
                  </span>
                  <div>
                    <small>Net Collected Revenue</small>
                    <b>{money(collected)}</b>
                  </div>
                  <span className="summary-change">+12.8%</span>
                </div>
                <div className="revenue-box outstanding-box">
                  <span className="summary-icon">
                    <Wallet size={18} />
                  </span>
                  <div>
                    <small>Outstanding Revenue</small>
                    <b>{money(outstanding)}</b>
                  </div>
                </div>
                <div className="collection-progress">
                  <div>
                    <span>Collection rate</span>
                    <b>
                      {totalRevenue
                        ? Math.round((collected / totalRevenue) * 100)
                        : 0}
                      %
                    </b>
                  </div>
                  <div className="progress-track">
                    <i
                      style={{
                        width: `${totalRevenue ? (collected / totalRevenue) * 100 : 0}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </Panel>
          </div>
          <div className="section-heading section-heading-operations">
            <span>04</span>
            <h2>Orders, Payments &amp; Team Activity</h2>
            <div className="section-line" />
            <span className="section-note">
              Operations &amp; recent activity
            </span>
          </div>
          <div className="bottom-grid">
            <Panel
              title="Sales Team Activity"
              icon={Users}
              wide
              action={() =>
                openDetail(
                  "Sales team activity",
                  "Sales performance with lead handling, qualification, conversion, quotations, deals and revenue. Select a row to see the salesperson summary.",
                )
              }
            >
              <div className="table-scroll team-table">
                <table>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>
                        Leads
                        <br />
                        Handled
                      </th>
                      <th>Qualified</th>
                      <th>Converted</th>
                      <th>
                        Conversion
                        <br />%
                      </th>
                      <th>Quotations</th>
                      <th>Deals</th>
                      <th>Deal Value</th>
                      <th>Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesTeam
                      .filter((x) => user === "All Users" || x.user === user)
                      .map((x) => (
                        <tr
                          key={x.user}
                          onClick={() =>
                            openDetail(
                              x.user,
                              `${x.user}\nLeads handled: ${Math.round(x.leads * factor)}\nQualified: ${Math.round(x.qualified * factor)}\nConverted: ${Math.round(x.converted * factor)}\nQuotations: ${Math.round(x.quotes * factor)}\nDeals: ${Math.round(x.deals * factor)}\nRevenue: ${money(Math.round(x.revenue * factor))}`,
                            )
                          }
                        >
                          <td>
                            <div className="user-cell">
                              <i style={{ background: x.color }}>
                                {x.initials}
                              </i>
                              <b>{x.user}</b>
                            </div>
                          </td>
                          <td>{Math.round(x.leads * factor)}</td>
                          <td>{Math.round(x.qualified * factor)}</td>
                          <td>{Math.round(x.converted * factor)}</td>
                          <td>
                            <b>{x.rate}%</b>
                          </td>
                          <td>{Math.round(x.quotes * factor)}</td>
                          <td>{Math.round(x.deals * factor)}</td>
                          <td>{money(Math.round(x.value * factor))}</td>
                          <td>
                            <b>{money(Math.round(x.revenue * factor))}</b>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </Panel>
            <Panel
              title="Operations Team Activity"
              icon={ClipboardList}
              action={() =>
                openDetail(
                  "Operations team activity",
                  "Order updates, stage progress, pending stages and overdue orders by operations team member.",
                )
              }
            >
              <div className="table-scroll ops-table">
                <table>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>
                        Orders
                        <br />
                        Updated
                      </th>
                      <th>
                        Stages
                        <br />
                        Completed
                      </th>
                      <th>
                        Pending
                        <br />
                        Stages
                      </th>
                      <th>
                        Overdue
                        <br />
                        Orders
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {operations.map((x) => (
                      <tr
                        key={x.user}
                        onClick={() =>
                          openDetail(
                            x.user,
                            `${x.user}: ${x.orders} orders updated, ${x.stages} completed stages, ${x.pending} pending stages, ${x.overdue} overdue orders.`,
                          )
                        }
                      >
                        <td>
                          <div className="user-cell">
                            <i className="ops-avatar">{x.initials}</i>
                            <b>{x.user}</b>
                          </div>
                        </td>
                        <td>{Math.round(x.orders * factor)}</td>
                        <td>{Math.round(x.stages * factor)}</td>
                        <td>{Math.round(x.pending * factor)}</td>
                        <td>{x.overdue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Panel>
            <Panel
              title="Orders & Stage Progress"
              icon={Activity}
              action={() =>
                openDetail(
                  "Orders and stage progress",
                  "Track pending, in-progress, completed and on-hold stages for each service order.",
                )
              }
            >
              <div className="stage-legend">
                <span>
                  <i className="orange-dot" />
                  Pending
                </span>
                <span>
                  <i className="blue-dot" />
                  In progress
                </span>
                <span>
                  <i className="green-dot" />
                  Completed
                </span>
                <span>
                  <i className="red-dot" />
                  On hold
                </span>
              </div>
              <div className="stage-list">
                {[
                  {
                    n: "Private Limited...",
                    p: 8,
                    prog: 1,
                    done: 0,
                    hold: 0,
                    total: 9,
                  },
                  {
                    n: "ISO Certification",
                    p: 3,
                    prog: 0,
                    done: 1,
                    hold: 0,
                    total: 4,
                  },
                  {
                    n: "DSC & DIN Ser...",
                    p: 2,
                    prog: 1,
                    done: 0,
                    hold: 0,
                    total: 3,
                  },
                  { n: "Penalty", p: 2, prog: 0, done: 0, hold: 0, total: 2 },
                  {
                    n: "LLP Registration",
                    p: 2,
                    prog: 0,
                    done: 0,
                    hold: 0,
                    total: 2,
                  },
                ].map((x) => (
                  <div className="stage-row" key={x.n}>
                    <span>{x.n}</span>
                    <div className="stage-track">
                      <i
                        className="pending"
                        style={{ width: `${(x.p / x.total) * 100}%` }}
                      />
                      <i
                        className="in-progress"
                        style={{ width: `${(x.prog / x.total) * 100}%` }}
                      />
                      <i
                        className="completed"
                        style={{ width: `${(x.done / x.total) * 100}%` }}
                      />
                      <i
                        className="on-hold"
                        style={{ width: `${(x.hold / x.total) * 100}%` }}
                      />
                    </div>
                    <b>{x.total}</b>
                  </div>
                ))}
              </div>
              <div className="orders-footer">
                <span>
                  <CheckCircle2 size={13} />
                  Completed orders
                </span>
                <b>12</b>
                <span>·</span>
                <span>Pending payments</span>
                <b>{money(Math.round(outstanding))}</b>
              </div>
            </Panel>
            <Panel
              title="Recent CRM Activity"
              icon={Activity}
              action={() =>
                openDetail(
                  "CRM activity history",
                  "Recent lead, payment, order, deal and quotation changes. Each record has a reference ID for drill-down.",
                )
              }
            >
              <div className="activity-list">
                {activities.map((a, i) => (
                  <button
                    key={i}
                    className="activity-item"
                    onClick={() =>
                      openDetail(
                        `${a.type} ${a.record}`,
                        `${a.employee}\nAction: ${a.action}\nTimestamp: ${a.time}\nRecord: ${a.record}\nThis record is linked to its related lead, quotations, deals, orders and payments in the demo data model.`,
                      )
                    }
                  >
                    <span className="activity-time">{a.time}</span>
                    <span className={`activity-avatar av-${i % 4}`}>
                      {a.employee
                        .split(" ")
                        .map((x) => x[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                    <span className="activity-info">
                      <b>{a.employee}</b>
                      <small>{a.action}</small>
                    </span>
                    <span className="activity-record">{a.record}</span>
                  </button>
                ))}
              </div>
              <button
                className="view-all"
                onClick={() =>
                  openDetail(
                    "All CRM activity",
                    "Full activity timeline: leads created and updated, quotations generated, deals won, orders progressed, and payments recorded.",
                  )
                }
              >
                View all activity <ArrowUpRight size={13} />
              </button>
            </Panel>
          </div>
          <footer className="footer">
            <span>© 2026 BizMetrics Analytics</span>
            <span>
              <i className="live-dot" /> All systems operational
            </span>
            <span>Demo data · Last updated just now</span>
          </footer>
        </div>
      </main>
      {modal && (
        <div className="modal-backdrop" onClick={() => setModal(null)}>
          <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <div className="modal-symbol">
                <Eye size={18} />
              </div>
              <div>
                <small>ANALYTICS DRILL-DOWN</small>
                <h3>{modal.title}</h3>
              </div>
              <button onClick={() => setModal(null)} aria-label="Close">
                <X size={18} />
              </button>
            </div>
            <div className="modal-content">
              {modal.content.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <div className="modal-note">
                <CircleHelp size={15} /> Demo dashboard · Values are
                illustrative and change with the selected date range.
              </div>
            </div>
            <div className="modal-actions">
              <button className="secondary-btn" onClick={() => setModal(null)}>
                Close
              </button>
              <button
                className="primary-btn"
                onClick={() => {
                  setModal(null);
                  exportCSV();
                }}
              >
                <Download size={14} /> Export report
              </button>
            </div>
          </div>
        </div>
      )}
      {feedback && (
        <div
          className={`dashboard-toast toast-${feedback.type}`}
          role={feedback.type === "error" ? "alert" : "status"}
          aria-live={feedback.type === "error" ? "assertive" : "polite"}
        >
          {feedback.type === "success" ? (
            <CheckCircle2 size={16} aria-hidden="true" />
          ) : (
            <CircleHelp size={16} aria-hidden="true" />
          )}
          {feedback.message}
          <button onClick={() => setFeedback(null)} aria-label="Dismiss message">
            <X size={14} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Dashboard rendering error:", error, info);
  }
  render() {
    if (this.state.hasError)
      return (
        <main className="section-page">
          <section className="section-page-card" style={{ padding: 28 }}>
            <h1>Something went wrong</h1>
            <p>
              Refresh the page to try again. Your demo data is stored locally in
              the application.
            </p>
            <button
              className="primary-btn"
              onClick={() => window.location.reload()}
            >
              Reload dashboard
            </button>
          </section>
        </main>
      );
    return this.props.children;
  }
}

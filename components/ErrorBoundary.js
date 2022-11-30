import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo });
    console.log(`componentDidCatch ${(error, errorInfo)}`);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallbackComponent) {
        return this.props.fallbackComponent;
      }

      return (
        <div>
          <h2>Error occured!</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
          </details>
          <br />
          {this.state.errorInfo && this.state.errorInfo.componentStack}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

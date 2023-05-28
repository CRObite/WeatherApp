import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo });
    console.error(error);
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    if (hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{error && error.toString()}</p>
          <p>Component Stack Error Details:</p>
          <pre>{errorInfo && errorInfo.componentStack}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
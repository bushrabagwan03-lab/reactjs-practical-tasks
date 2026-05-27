import React from 'react';

class AdvancedErrorBoundary extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {

    return {
      hasError: true
    };
  }

  componentDidCatch(error, errorInfo) {

    console.log("Error:", error);

    console.log("Error Info:", errorInfo);
  }

  handleRetry = () => {

    this.setState({
      hasError: false
    });
  };

  render() {

    if(this.state.hasError) {

      return (

        <div
          style={{
            textAlign: 'center',
            marginTop: '100px'
          }}
        >

          <h1>
            Something Went Wrong
          </h1>

          <button
            onClick={this.handleRetry}
          >
            Retry
          </button>

        </div>
      );
    }

    return this.props.children;
  }
}

export default AdvancedErrorBoundary;
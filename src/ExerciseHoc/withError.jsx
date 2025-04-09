import React from "react";

export default function withError(WrappedComp, compName, renderError, onError) {
  console.log("renderError", renderError);
  return class NewComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, errorMessage: "" };
    }

    componentDidCatch(error, errorInfo) {
      console.log(error);
      //   console.log(errorInfo);
      this.setState({ hasError: true, errorMessage: error.toString() });

      if (onError) {
        onError(error);
      }
    }

    render() {
      console.log(typeof this.state.errorMessage);
      //
      if (this.state.hasError) {
        if (renderError) {
          return renderError(this.state.errorMessage);
        }
        return <p>Something wrong with {compName}</p>;
      }
      return <WrappedComp {...this.props} compName={compName} />;
    }
  };
}

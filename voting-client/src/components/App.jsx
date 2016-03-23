import React from 'react';

export default React.createClass({
  render: function() {
    return <div>
        <span>
            <a href="#/">Home</a>
            {"  "}
            <a href="#/results">Results</a>
        </span>
        {this.props.children}
    </div>;
  }
});
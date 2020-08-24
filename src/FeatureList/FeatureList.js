import React, {Component} from 'react';
import Feature from '../Feature/Feature';

class FeatureList extends Component {
  render() {
    const features = Object.keys(this.props.features)
      .map(key => {
        return (
          <Feature
              keyName={key} 
              features={this.props.features}
              selected={this.props.selected}
              handleUpdateFeature={this.props.handleUpdateFeature}
          />
        ) 
      }
    );
    return (
      <section className="main__form">
        <h3>Custimize your laptop</h3>
        {features}
      </section>
    );
  }
}

FeatureList.defaultProps = {
    features: {}
  }

export default FeatureList
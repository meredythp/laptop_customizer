import React, {Component} from 'react';
import Option from '../Option/Option'

class Feature extends Component {
  render() {
    const options = this.props.features[this.props.keyName].map((item, index) => {
      return (
        <Option
            key={index}
            feature={this.props.keyName}
            option={item}
            selected={this.props.selected}
            handleUpdateFeature={this.props.handleUpdateFeature}
        />
      )
    });
    return (
      <div className="feature" key={this.props.keyName}>
          <div className="feature__name">{this.props.keyName}</div>
          <ul className="feature__list">
              {options}
          </ul>
      </div>
    )
  }
}
export default Feature
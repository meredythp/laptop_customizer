import React, {Component} from 'react';

class Total extends Component {
  render() {
    const total = Object.keys(this.props.selected)
      .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);        

    return (
      <section className="total__summary">
        <div className="summary__total">
          <div className="summary__total__label">Total:</div>
          <div className="summary__total__value">
            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(total) }
          </div>
        </div>
      </section>
    )
  }
}

export default Total
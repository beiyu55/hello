import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styles from './grid.module.scss';

class Grid extends Component {
  static porpTypes={
    container: PropTypes.bool,
    spacing: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      spacing: this.props.spacing
    }
  }

  colHtml() {
    let colStr;
    const child = this.props.children;
    const spacing = this.state.spacing;
    const allCol = 24;
    if(!Array.isArray(child)){
      const xs = child.props.xs || allCol;
      const _spacing = child.props.spacing || spacing | 0;
      colStr = (
        <div className={styles['wei-grid-item'] +' '+ styles['wei-grid-item-'+xs]}
          style={{paddingLeft: _spacing, paddingRight: _spacing}}>
          {child.props.children}
        </div>
      )
    }else{
      colStr = [];
      child.map((item, key) => {
        const xs = item.props.xs || 1;
        const _spacing = item.props.spacing || spacing | 0;
        return colStr.push(
          <div key={key}
            style={{paddingLeft: _spacing, paddingRight: _spacing}}
            className={styles['wei-grid-item'] +' '+ styles['wei-grid-item-'+xs]}>
            {item.props.children}
          </div>
        )
      })
    }
    return colStr;
  }
  render() {
    return (
      <div className={styles['wei-grid']}>
        {this.colHtml()}
      </div>
    );
  }
}

Grid.defaultProps = {
  container: true,
  spacing: 0
};

export default Grid;

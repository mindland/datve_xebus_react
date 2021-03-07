import React, { Component } from "react";

class GheItem extends Component {
  chonGhe = () => { 
    this.props.chonGhe(this.props.data); 
  }

  render() {
    return (
      <button
        type="button"
        className={`btn ${ this.props.data.TrangThai  ? 'btn-success' : 'btn-secondary'}`}
        style={{ width: "40px" }}
        onClick={this.chonGhe}
      >
        {this.props.data.SoGhe}
      </button>
    );
  }
}

export default GheItem;

import React, { Component } from "react";
import classNames from "classnames";

class GheItem extends Component {
  state = {
    isBooking: false,
  };

  chonGhe = () => {
    this.props.chonGhe(this.props.data);

    this.setState({
      isBooking: !this.state.isBooking
    })
  };

  render() {
    const ClassNameButton = [
      "btn",
      { "btn-success": this.state.isBooking },
      { "btn-secondary": !this.state.isBooking },
      { "btn-danger": this.props.data.TrangThai }
      ,
    ];

    return (
      <button
        
        type="button"
        className={classNames(ClassNameButton)}
        // className={`btn ${ this.props.data.TrangThai  ? 'btn-success' : 'btn-secondary'}`} 

        style={{ width: "40px" }}
        onClick={this.chonGhe}

        disabled={this.props.data.TrangThai}
      >
        {this.props.data.SoGhe} 
      </button> 
    );
  }
}

export default GheItem;

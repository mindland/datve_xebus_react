import React, { Component } from "react";
import GheItem from "./gheItem";

class DanhSachGhe extends Component {
  renderDanhSachGhe = () => {
    return this.props.data.map( (item) => {
      return (
        <div className="col-3 text-center py-1" key={item.SoGhe}>
            <GheItem data={item} chonGhe={this.props.chonGhe}/>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="row bg-light h5 py-2 d-flex justify-content-center rounded">
          Tài xế
        </div>
        <div className="row h5">
            {this.renderDanhSachGhe()}
        </div>
      </div>
    );
  }
}

export default DanhSachGhe;

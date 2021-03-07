import React, { Component } from "react";

class DanhSachGheDangDat extends Component {

  xoaGheDaDat = (item) => () => {
    this.props.chonGhe(item)
  }

  renderGheDaDat = () => {
    return this.props.data.map((item) => {
      return (
        <p className="h5 pb-2">
          Ghế: {item.TenGhe} ${item.Gia}{" "}
          <button type="button" class="btn btn-outline-danger btn-sm" onClick={this.xoaGheDaDat(item)}>
            Hủy
          </button>
        </p>
      );
    });
  };

  render() {
    return (
      <div>
        <p className="text-center h5 pb-2" style={{ color: "#D0B916" }}>
          Danh sách ghế đã đặt ({this.props.data.length})
        </p>

        {this.renderGheDaDat()}
      </div>
    );
  }
}

export default DanhSachGheDangDat;

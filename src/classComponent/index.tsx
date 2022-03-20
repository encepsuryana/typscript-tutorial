import React, { Component } from "react";

interface State {
  counter: number;
}

interface Props {
  title: string;
  namaHalaman?: string;
}

export default class classComponent extends Component<Props, State> {
  //counter: 0
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
    };
    // this._addCount = this._addCount.bind(this);
  }

  //function add count
  _addCount(param: number): void {
    this.setState({
      counter: param + 1,
    });
  }

  //fucntion remove count
  _removeCount(param: number): void {
    this.setState({
      counter: param - 1,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>
          <button onClick={() => this._removeCount(this.state.counter)}>
            Kurangi
          </button>
        </div>
        {this.state.counter}
        <div>
          <button onClick={this._addCount.bind(this, this.state.counter)}>
            Tambah
          </button>
        </div>
      </div>
    );
  }
}

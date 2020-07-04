//setStateはstateオブジェクトを更新させる関数の事

//引数にオブジェクトを渡して値を変更させるパターン

handleAdd = () => {
  this.setState({
    number: this.state.number + 1,
  });
};

//引数に関数を渡して値を変更させるパターン & returnを省けるパターン

handleAdd2 = () => {
  this.setState((prevState) => {
    return { number: prevState.number + 1 };
  });
};

handleAdd3 = () => {
  this.setState((prevState) => ({
    number: prevState.number + 1,
  }));
};

//短いと一行で纏めることも可能
handleDelete = () => {
  this.setState(() => ({ number: [] }));
};

//イベント処理の時に使う関数パターン もしくは引数を渡したい時に使用する

<button onClick={() => this.handleClick()}>Click me</button>;
<button onClick={this.handleClick}>Click me</button>;

//引数をとる関数パターン

<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>;
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>;

//pushで行う場合
//間接参照しているからpushでも変更できているのか？
// const { items } = this.state;
// items.push(data);
// this.setState({ items: items });

//concatで行う場合
// const newData = this.state.items.concat([data]);
// this.setState({ items: newData });

//spreadで行う場合
// const { items } = this.state;
// const newData = [...items, data];
// this.setState({ items: newData });

class Test {
  component;
  constructor(component) {
    this.component = component;
  }

  image(text) {
    return this.component.getByAltText(text);
  }

  button(text) {
    return this.component.getByRole('button', { name: text });
  }

  text(text) {
    return this.component.getByText(text);
  }

  placeHolder(placeHolder) {
    return this.component.getByPlaceholderText(placeHolder);
  }

  toBeNull(text) {
    expect(this.component.queryByText(text)).toBeNull();
  }
}

export default Test;

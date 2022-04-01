class Text {
  private text: string;

  constructor(
      text: string,
  ) {
      this.updateText(text);
  }

  protected getText(): string {
      return this.text;
  }

  protected updateText(text: string): void {
      this.text = text;
  }
}

export default Text
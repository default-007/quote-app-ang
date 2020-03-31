export class Quote {
  showDescription: boolean;
  constructor(
    public id: number,
    public name: string,
    public author: string,
    public postDate: Date
  ) {
    this.showDescription = false;
  }
}

export class Quote {
  showDescription: boolean;
  constructor(
    public name: string,
    public author: string,
    public user: string,
    public postDate: Date = new Date()
  ) {
    this.showDescription = false;
  }
}

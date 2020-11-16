class Banner {
  constructor(
    name = "No name provided",
    src = "https://image.shutterstock.com/image-vector/no-image-available-sign-absence-260nw-373243873.jpg",
    link = ""
  ) {
    this.name = name;
    this.src = src;
    this.link = link;
  }

  render() {
    return $(`<div id="banner" style="background-image: url('${this.src}')">`)
      .append(`
        <h2 id="hotelLogo">${this.name}</h2>
        <div id="colorDiv"> 
          <div id="borderDiv">
        <a href="${this.link}" target="_blank">Book Now</a>
      </div>
    </div>
        `);
  }
}

export default Banner;

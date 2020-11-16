function googleSearch() {
  let searchBtn = $("#button");

  searchBtn.on("click", function () {
    let searchInput = $("#searchInput").val();
    let url = `https://www.google.com/search?q=${searchInput}`;
    console.log(searchInput);
    window.open(url, "_blank");
  });
}
googleSearch();

export default googleSearch;

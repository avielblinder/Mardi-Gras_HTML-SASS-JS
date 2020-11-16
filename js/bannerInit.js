import data from "./images_arr.js";
import Banner from "./banner.class.js";

const $bannerContainer = $("#bannerContainer");
const $bannerContainer2 = $("#bannerContainer2");
const banners = [];

function initBanners(data = []) {
    return data.forEach((item) =>
        banners.push(new Banner(item.name, item.imgSource, item.link))
    );
};

function renderNewBanner() {
    const selectedBanner = getRandomBanner(banners);
    const selectedBanner2 = getRandomBanner(banners);
    $bannerContainer.empty();
    $bannerContainer.append(selectedBanner.render());
    $bannerContainer2.append(selectedBanner2.render());
};


function getRandomBanner(data = []) {
    if (data.length > 0) {
        return data[Math.floor(Math.random() * data.length)];
    }

    return [];
};

function init() {
    initBanners(data);
    renderNewBanner();


};
init();

export default init;
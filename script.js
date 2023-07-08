"use strict";

const body = document.querySelector("#Body");
const contrast = document.querySelector("#Contrast");

function body_add(asset) {
  if (body.firstChild) {
    body.firstChild.remove();
  }
  const img = document.createElement("img");
  img.src = `${asset}`;
  img.style.zIndex = "3";
  body.append(img);
}

function orange_body_func() {
  body_add("assets/Body-701.png");
}
function yellow_body_strong_func() {
  body_add("assets/Body-700.png");
}
function yellow_body_func() {
  body_add("assets/Body-702.png");
}
function white_body_func() {
  body_add("assets/Body-703.png");
}
function gray_body_func() {
  body_add("assets/Body-704.png");
}

// contrast
function contrast_add(asset) {
    if (contrast.firstChild) {
        contrast.firstChild.remove();
    }
    const img = document.createElement("img");
    img.src = `${asset}`;
    img.style.zIndex = "3";
    contrast.append(img);
}

function dark_gray_contrast_func() {
    contrast_add("assets/Contrast-704.png")
}
function yellow_contrast_strong_func() {
    contrast_add("assets/Contrast-700.png")
}
function yellow_contrast_func() {
    contrast_add("assets/Contrast-702.png")
}
function gray_contrast_func() {
    contrast_add("assets/Contrast-703.png")
}

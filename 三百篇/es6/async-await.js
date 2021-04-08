// // 使用 generator
// var fetch = require("node-fetch");
// var co = require("co");
// function* gen() {
//   var r1 = yield fetch("https://api.github.com/users/github");
//   var json1 = yield r1.json();
//   console.log(json1.bio);
// }
// co(gen);

// // 使用 async
// var fetch = require('node-fetch');
// var fetchData = async function () {
//     var r1 = await fetch('https://api.github.com/users/github');
//     var json1 = await r1.json();
//     console.log(json1.bio);
// };
// fetchData();

// 继发与并发
// 给定一个 URL 数组，如何实现接口的继发和并发？
import fetch from "node-fetch";
const url1 = "https://api.github.com/users/github";
const url2 = "https://api.github.com/users/github/followers";
const url3 = "https://api.github.com/users/github/repos";
const urls = [url1, url2, url3];
// 继发1
// async function loadData() {
//   const r1 = await fetch(url1);
//   const r2 = await fetch(url2);
//   const r3 = await fetch(url3);
//   console.log("done");
// }
// 继发2
// async function loadData() {
//   for (let url of urls) {
//     const res = await fetch(url);
//   }
// }
// loadData();
// 并发1
// async function loadData() {
//   const p1 = fetch(url1);
//   const p2 = fetch(url2);
//   const p3 = fetch(url3);
//   const r1 = await p1;
//   const r2 = await p2;
//   const r3 = await p3;
//   console.log("done");
// }
// loadData();
// 并发2
// async function loadData() {
//   const res = await Promise.all([fetch(url1), fetch(url2), fetch(url3)]);
//   console.log(res);
// }
// async function loadData(urls) {
//   // 并发读取 url
//   const textPromises = urls.map(async (url, index) => {
//     const response = await fetch(url);
//     return response.text();
//   });
//   // 按次序输出
//   for (const textPromise of textPromises) {
//     // console.log(await textPromise);
//   }
// }
// loadData(urls);

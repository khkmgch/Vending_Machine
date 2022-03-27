//飲み物のリスト
class Photo{
    constructor(photoId, title, place, year, favoritePart, url){
        this.photoId = photoId;
        this.title = title;
        this.place = place;
        this.year = year;
        this.favoritePart = favoritePart;
        this.url = url;
    }
}
let photoList = [new Photo(0,"Kunsthal Rotterdam", "Rotterdam / Nederland", 2017, "Diagonal structure", "https://github.com/khkmgch/Vending_Machine/blob/main/images/194f41e5c91e21dfd4648ab1564e3d19.jpg?raw=true"), new Photo(1,"30 St Mary Axe", "London / UK", 2017, "The design that reduce an environmental load related to wind and heat", "https://github.com/khkmgch/Vending_Machine/blob/main/images/20733331a6690d3b0de6e47f683441af.jpg?raw=true"), new Photo(2,"Église Notre-Dame du Raincy", "Le Raincy / France", 2017, "Thin concrete pillars and beautiful stained glass made of concrete lattice", "https://github.com/khkmgch/Vending_Machine/blob/main/images/35e0fd2e300e19b2466273bc51edc4fb.jpg?raw=true"), new Photo(3,"La tour Eiffel", "Paris / France", 2017, "The structure of the lower part", "https://github.com/khkmgch/Vending_Machine/blob/main/images/27cc90982f267ac246ec4ac4b944032d.jpg?raw=true"), new Photo(4,"Wiggle Side chair", "the United States", 2017, "Interesting shape made of cardboard", "https://github.com/khkmgch/Vending_Machine/blob/main/images/294c1acbdd63b22b38dc52c7d0b5da2f.jpg?raw=true"), new Photo(5,"Zig-Zag Chair", "Nederland", 2017, "a minimalistic design without legs", "https://github.com/khkmgch/Vending_Machine/blob/main/images/2a8b0d8f3c3b30dda2b84fae11d37041.jpg?raw=true"), new Photo(6,"Foundation Louis Vuitton", "Paris / France", 2017, "Innovative design that combines steel, wood and glass", "https://github.com/khkmgch/Vending_Machine/blob/main/images/2cfdfc4cc23a2de921fb1d3f8358ebcf.jpg?raw=true"), new Photo(7,"Big Ben", "London / UK", 2017, "Artistic facade of Neo-gothic style", "https://github.com/khkmgch/Vending_Machine/blob/main/images/319c158029be4fa39631bfac55c03060.jpg?raw=true"), new Photo(8,"Cité de Refuge", "Paris / France", 2017, "Characteristic facade with brise-soleil", "https://github.com/khkmgch/Vending_Machine/blob/main/images/35d81209a3c1c5890a93208b5ced9fd0.jpg?raw=true"), new Photo(9,"London Metropolitan University", "London / UK", 2017, "The constructive shapes that excite visitors, steel panels and geometric windows", "https://github.com/khkmgch/Vending_Machine/blob/main/images/3c7c9c947850dc5e0e3b7c76c09447bd.jpg?raw=true"), new Photo(10,"Elbphilharmonie", "Hamburg / Germany", 2017, "The facade like an iceberg and the design of the concert hall with algorithms", "https://github.com/khkmgch/Vending_Machine/blob/main/images/3e1dbbf6aaba13959030eb1a0bca7dc1.jpg?raw=true"), new Photo(11,"Paddington station", "London / UK", 2017, "A bright and large space with  glass roofs", "https://github.com/khkmgch/Vending_Machine/blob/main/images/47f82dd362ded2261ca7a3e26da9fc18.jpg?raw=true"), new Photo(12,"Tate Modern", "London / UK", 2017, "The bricks arranged in a mosaic pattern and twisted shape", "https://github.com/khkmgch/Vending_Machine/blob/main/images/4b49d9a74d7ec947dc607adfcab4f314.jpg?raw=true"), new Photo(13,"Maison du Bresil", "Paris / France", 2017, "The exciting entrance with low ceiling and colorful grasses", "https://github.com/khkmgch/Vending_Machine/blob/main/images/4f528af4ab8774a6c320b9e39624ffa9.jpg?raw=true"), new Photo(14,"Landscape in Hamburg", "Hamburg / Germany", 2017, "Brick warehouse district not seen in Japan", "https://github.com/khkmgch/Vending_Machine/blob/main/images/513acd7eccdb05962905c877b3385372.jpg?raw=true"), new Photo(15,"Cube house", "Rotterdam / Nederland", 2017, "Unique shape of houses to gather and live", "https://github.com/khkmgch/Vending_Machine/blob/main/images/5c5e023e9fe46005692f2cc88068f5c2.jpg?raw=true"), new Photo(16,"Cathédrale Notre-Dame de Paris", "Paris / France", 2017, "Beautiful facade consists of three-layer in gothic style", "https://github.com/khkmgch/Vending_Machine/blob/main/images/5d45cf4ad045be9945ae46c517a31284.jpg?raw=true"), new Photo(17,"The Interlace", "Singapore", 2016, "Breaking away from the typical tower design with irregularly stacked blocks to enrich the living environment", "https://github.com/khkmgch/Vending_Machine/blob/main/images/615ac0bba711cf4365038cb7a49c3ab8.jpg?raw=true"), new Photo(18,"Maison de Victor Horta", "Brussels / Kingdom of Belgium", 2017, "Complex and beautiful decoration in Art Nouveau style", "https://github.com/khkmgch/Vending_Machine/blob/main/images/62d2802e745d0c2a30b61105c1edfafc.jpg?raw=true"), new Photo(19,"25 Rue Franklin", "Paris / France", 2017, "The facade that represents the plan to provide a rich living environment", "https://github.com/khkmgch/Vending_Machine/blob/main/images/6361e8e9d0e0dcb789cc1a183c11e318.jpg?raw=true"), new Photo(20,"Centre Pompidou", "Paris / France", 2017, "The facade that consists of exposed equipment pipe", "https://github.com/khkmgch/Vending_Machine/blob/main/images/df34d6a69db08fb2754100b9033020ff.jpg?raw=true"), new Photo(21,"Het Nieuwe Instituutu", "Rotterdam / Nederland", 2017, "Appearance composed of volumes of various materials", "https://github.com/khkmgch/Vending_Machine/blob/main/images/7c82e701b80b0619eb2a7c68d4737463.jpg?raw=true"), new Photo(22,"Villa Savoye", "Poissy / France", 2017, "Appearance as if the living space is floating and bright interior space with horizontal windows", "https://github.com/khkmgch/Vending_Machine/blob/main/images/7eaa9a03fd08906e2ed8f0f4f63507dd.jpg?raw=true"), new Photo(23,"Station Antwerpen-Centraal", "Antwerpen / Kingdom of Belgium", 2017, "Anyway, the appearance is too beautiful...", "https://github.com/khkmgch/Vending_Machine/blob/main/images/a7b706c495607d6574cc10cf5faf294a.jpg?raw=true"), new Photo(24,"Sainte-Geneviève Library", "Paris / France", 2017, "Open reading space with steel arch", "https://github.com/khkmgch/Vending_Machine/blob/main/images/8ce4e697fd471c5fbce9812bd295ae1f.jpg?raw=true"), new Photo(25,"Tower Bridge", "London / UK", 2017, "Gorgeous tower like castle and a double rainbow!!", "https://github.com/khkmgch/Vending_Machine/blob/main/images/93515a0ea802468382d6dde51143b28e.jpg?raw=true"), new Photo(26,"Lloyd's building", "London / UK", 2017, "Apprearance with elevators, stairs, and equipment pipe installed outside", "https://github.com/khkmgch/Vending_Machine/blob/main/images/9a3b66e1827e83ddebd18dabea22dd79.jpg?raw=true"), new Photo(27,"Regent Street", "London / UK", 2017, "Many people walking along the arc", "https://github.com/khkmgch/Vending_Machine/blob/main/images/a0d2521783d95d2f383d79091a155152.jpg?raw=true"), new Photo(28,"Fondation Cartier pour l'art contemporain", "Paris / France", 2017, "Contrast between glass façade and plants", "https://github.com/khkmgch/Vending_Machine/blob/main/images/af97df7e5925f7b342606e3ad5e88469.jpg?raw=true"), new Photo(29,"The Hive", "Singapore", 2016, "Interesting design not found in traditional university facilities", "https://github.com/khkmgch/Vending_Machine/blob/main/images/bb97e35a316749143550115aecfde679.jpg?raw=true"), new Photo(30,"Galeries Royales Saint-Hubert", "Brussels / Kingdom of Belgium", 2017, "Bright and beautiful arcade", "https://github.com/khkmgch/Vending_Machine/blob/main/images/bdf7a6d9f7931d1febde501f44212d6e.jpg?raw=true"), new Photo(31,"Institut du monde arabe", "Paris / France", 2017, "Facade featuring aluminum panels that adjusts the light", "https://github.com/khkmgch/Vending_Machine/blob/main/images/c56d8d3242c19cbfd327fc1d05bded4c.jpg?raw=true"), new Photo(32,"Saint Paul's Cathedral", "Paris / France", 2017, "Beautiful ceiling", "https://github.com/khkmgch/Vending_Machine/blob/main/images/c9ce2e9d03b7d0a4dd37126e73bb1a58.jpg?raw=true"), new Photo(33,"D'leedon", "Singapore", 2017, "New high-rise building design", "https://github.com/khkmgch/Vending_Machine/blob/main/images/cc2f3d1847de9adb46421eebf2f25e41.jpg?raw=true"), new Photo(34,"Westminster Abbey", "London / UK", 2017, "Spectacular and beautiful space in gothic style", "https://github.com/khkmgch/Vending_Machine/blob/main/images/d668a060c9d2734a541121e34c337647.jpg?raw=true"), new Photo(35,"Markthal", "Rotterdam / Nederland", 2017, "Huge market space surrounded by apartment houses", "https://github.com/khkmgch/Vending_Machine/blob/main/images/e540c104573845020da33d51d705950c.jpg?raw=true"), new Photo(36,"Maison Schröder de Rietveld", "Utrecht / Nederland", 2017, "Appearance constructed like an abstract painting in De Stijl", "https://github.com/khkmgch/Vending_Machine/blob/main/images/e5cd79988b8aef584fbcdcb7397b3815.jpg?raw=true"), new Photo(37,"Landscape of London", "London / UK", 2017, "A combination of a slowly moving Ferris wheel and the flow of a river", "https://github.com/khkmgch/Vending_Machine/blob/main/images/e752ed288d47241101a42ed60dd0a8b2.jpg?raw=true"), new Photo(38,"Landscape of Jiufen", "Jiufen / Taiwan", 2015, "Retro cityscape", "https://github.com/khkmgch/Vending_Machine/blob/main/images/f095f52ac867cb19e6e1d545cc216e3e.jpg?raw=true"), new Photo(39,"Port Authority Building", "Antwerp / Kingdom of Belgium", 2017, "Appearance like a shining diamond reflects sunlight", "https://github.com/khkmgch/Vending_Machine/blob/main/images/f1933cb0b47dbf2f76a5ce68eb17d869.jpg?raw=true"), new Photo(40,"The Magazine", "London / UK", 2017, "Coexistence of traditional brick construction and futuristic design", "https://github.com/khkmgch/Vending_Machine/blob/main/images/fd436ab57a8ed4ec58d0c4f4f6c26c51.jpg?raw=true"), new Photo(41,"Tokyo National Museum", "Tokyo / Japan", 2018, "Beautiful space that is quiet and dignified", "https://github.com/khkmgch/Vending_Machine/blob/main/images/IMG_4066.jpg?raw=true"), new Photo(42,"St. Mary's Cathedral, Tokyo", "Tokyo / Japan", 2018, "Magnificent space created by curved concrete surfaces and sunlight", "https://github.com/khkmgch/Vending_Machine/blob/main/images/IMG_4460.jpg?raw=true")];

//ランダムモード
//777を入力するとランダムモードになる。
class HelperFunction{
    static randomNum(min, max){
        return Math.floor(Math.random() * (max - min - 1) + min);        
    }
}
//
let target = document.getElementById("target");
target.classList.add("bgcolor-dark", "d-flex", "flex-column", "align-items-center");

//ホーム画面
let home = document.createElement("div");
home.classList.add("vh-100", "m-5", "d-flex", "flex-column", "justify-content-center", "align-items-center");
home.innerHTML = `
<div class="line">
    <div class="title-disappear"></div>
    <h2 class="text-center text-light font-kaushan title-appear">Memories Of My Journey: <br>Architecture and Landscape</h2>
    <div class="line-animation "></div>
</div>
<div class="mt-5">
    <div class="link-disappear "></div>
    <div class="link-appear ">
        <a href="#VendingMachine" class="text-light bg-secondary font-kaushan">>>Jump to Vending Photo Machine</a>
    </div>
</div>
`;
target.append(home);

//メインのVendingMachine部分
let machine = document.createElement("div");
machine.id = "VendingMachine";
machine.classList.add("m-5", "d-flex", "justify-content-center", "align-items-center");
target.append(machine);

let borderDiv = document.createElement("div");
borderDiv.classList.add("border", "border-lightgrey", "col-12", "col-md-11", "d-flex", "flex-column", "align-items-center", "my-5", "pt-3");
machine.append(borderDiv);

let heading = document.createElement("h3");
heading.classList.add("text-light", "font-kaushan", "text-center");
heading.innerHTML = "Which photo do you like?";
borderDiv.append(heading);

let flexDiv = document.createElement("div");
flexDiv.classList.add("d-flex", "flex-wrap", "justify-content-around", "p-2");
borderDiv.append(flexDiv);
//画像を表示するslider
let slider = document.createElement("div");
slider.id = "slider";
slider.classList.add("col-12", "col-md-5", "d-flex", "justify-content-center", "align-items-center", "mx-2", "p-4", "p-md-0");
//sliderにアニメーションで表示するmainと、消すextraを用意
let main = document.createElement("div");
main.classList.add("img-appear");
let extra = document.createElement("div");
extra.classList.add("img-disappear");

flexDiv.append(slider);

let display_calculator = document.createElement("div");
display_calculator.classList.add("col-12", "col-md-5", "mt-4", "mt-md-0", "mb-3");
flexDiv.append(display_calculator);

let display = document.createElement("div");
display.classList.add("border", "border-lightgrey", "bgcolor-grey","pt-3");

display.innerHTML = `
    <div class="d-flex ">
        <p class="col-6 font-kaushan text-light">Id: </p>
        <input type="text" id="photoId" style="background-color: transparent; border:none; " class="col-6 font-kaushan text-light h-50" disabled>
    </div>
    <div class="d-flex ">
        <p class="col-6 font-kaushan text-light">Title: </p>
        <p id="titleDisplay" class="col-6 font-kaushan text-light"></p>
    </div>
    <div class="d-flex ">
        <p class="col-6 font-kaushan text-light">Place: </p>
        <p id="placeDisplay" class="col-6 font-kaushan text-light"></p>
    </div>
    <div class="d-flex ">
        <p class="col-6 font-kaushan text-light">Year: </p>
        <p id="yearDisplay" class="col-6 font-kaushan text-light"></p>
    </div>
    <div class="d-flex ">
        <p class="col-6 font-kaushan text-light">Favorite part: </p>
        <p id="favoriteDisplay" class="col-6 font-kaushan text-light"></p>
    </div>
`;
display_calculator.append(display);

let calculator = document.createElement("div");
calculator.classList.add("col-12", "d-flex", "justify-content-center", "ps-3", "py-3", "bgcolor-grey", "border", "border-lightgrey", "mt-3");
let buttons = document.createElement("div");
buttons.classList.add("col-11", "d-flex", "flex-wrap");
for(let i = 0; i <= 9; i++){
    let currBtn = document.createElement("button");
    currBtn.type = "button";
    currBtn.classList.add("btn", "btn-light", "border", "border-darkgrey", "m-2", "btn-width", "font-kaushan", "text-darkgrey");
    currBtn.innerHTML = `${i.toString()}`;
    currBtn.addEventListener("click", function(){
        let idInput = document.getElementById("photoId");
        idInput.value += i.toString();
    });
    buttons.append(currBtn);
}
let btnC = document.createElement("button");
btnC.type = "button";
btnC.classList.add("btn", "btn-light", "border", "border-darkgrey", "m-2", "btn-width", "font-kaushan", "text-darkgrey");

let btnE = btnC.cloneNode(true);

btnC.innerHTML = "C";
btnC.addEventListener("click",function(){
    let idInput = document.getElementById("photoId");
    idInput.value = "";
});

btnE.innerHTML = "E";
btnE.addEventListener("click", function(){
    let id = enteredId();
    if(id == 777){
        let interval = setInterval(function(){
            let newId = HelperFunction.randomNum(0, photoList.length-1);
            displayInfo(newId);
            reflectPhoto(newId);
        },5000);
        let body = document.getElementsByTagName("body").item(0);
        body.addEventListener("keydown", function(){
            clearInterval(interval);
        });
    }else if(id >= photoList.length){
        alert(`
        Please enter a number from 0 to ${(photoList.length-1).toString()}.
        If you want to play in random mode, please enter 777!!`);
    }else{
        displayInfo(id);
        reflectPhoto(id);
    }
});
buttons.append(btnC);
buttons.append(btnE);
calculator.append(buttons);

display_calculator.append(calculator);

function enteredId(){
    let idInput = document.getElementById("photoId");
    let id = parseInt(idInput.value);
    return id;
}
function displayInfo(id){
    let currPhoto = photoList[id];

    document.getElementById("photoId").value = id;
    document.getElementById("titleDisplay").innerHTML = currPhoto.title;
    document.getElementById("placeDisplay").innerHTML = currPhoto.place;
    document.getElementById("yearDisplay").innerHTML = currPhoto.year;
    document.getElementById("favoriteDisplay").innerHTML = currPhoto.favoritePart;
}
function reflectPhoto(nextId){
    let currId = main.getAttribute("data-index") === undefined ? 0 : parseInt(main.getAttribute("data-index"));
    let nextPhoto = photoList[nextId];

    extra.innerHTML = main.innerHTML;
    main.innerHTML = "";
    main.innerHTML = `
    <img src="${nextPhoto.url}" class="img-fluid">
    `;
    main.setAttribute("data-index",`${nextId.toString()}`);
    if(nextId >= currId){
        slider.innerHTML = "";
        slider.append(extra);
        slider.append(main);
    }else{
        slider.innerHTML = "";
        slider.append(main);
        slider.append(extra);
    }
}
let body = document.getElementsByTagName("body").item(0);
body.addEventListener("keydown", function(event){
    let key = event.key;
    let keyNum = parseInt(key);
    let idInput = document.getElementById("photoId");
    if(0 <= keyNum && keyNum <= 9){
        idInput.value += keyNum.toString();   
    }
    if(key == "Enter"){
        btnE.dispatchEvent(new Event("click"));
    }
    if(key == "c"){
        btnC.dispatchEvent(new Event("click"));
    }
    if(key == "Backspace"){
        let idString = idInput.value;
        idInput.value = idString.substring(0, idString.length-1);
    }
});

$('a[href^="#"]').click(function() {
  // スクロールの速度
  let speed = 1200; // ミリ秒で記述
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? 'html' : href);
  let position = target.offset().top;
  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
});


//下書き

// <div id="target" class="bgcolor-dark d-flex flex-column  align-items-center">
//     <div id="home" class="vh-100 m-5 d-flex flex-column justify-content-center align-items-center ">
//         <div class="line">
//             <div class="title-disappear"></div>
//             <h2 class="text-center text-light font-kaushan title-appear">Memories Of My Journey: <br>Architecture and Landscape</h2>
//             <div class="line-animation "></div>
//         </div>
//         <div class="mt-5">
//             <div class="link-disappear "></div>
//             <div class="link-appear ">
//                 <a href="#VendingMachine" class="text-light bg-secondary font-kaushan">>>Jump to Vending Photo Machine</a>
//             </div>
//         </div>
//     </div>
//     <div id="VendingMachine" class="m-5 d-flex justify-content-center align-items-center">
//         <div  class=" border border-lightgrey col-12 col-md-11  d-flex flex-column align-items-center my-5 pt-3">
//             <h3 class="text-light font-kaushan text-center ">Which photo do you like?</h3>

//             <div class="d-flex flex-wrap justify-content-around p-2">

//                 <div id="slider" class="col-12 col-md-5 d-flex justify-content-center align-items-center mx-2 p-4 p-md-0 ">
//                     <div class="main img-appear">
//                         <img src="https://github.com/khkmgch/khkmgch.github.io/blob/main/e540c104573845020da33d51d705950c.jpg?raw=true" class="img-fluid ">
//                     </div>
//                     <div class="extra img-disappear">
//                         <img src="https://www.suntory.co.jp/products/pimg/FEZ5C_R1_20211210.jpg?_x=254&_y=659" class="img-fluid">
//                     </div>
//                 </div>
                
//                 <div id="display&calculator" class="col-12 col-md-5 mt-4 mt-md-0 mb-3 ">
//                     <div id="display" class="border border-lightgrey bgcolor-grey d-flex justify-content-center pt-3">
//                         <div class="col-12">
//                             <div class="d-flex ">
//                                 <p class="col-6 font-kaushan text-light">Id: </p>
//                                 <input type="text" id="photoId" style="background-color: transparent; border:none; " class="col-6 font-kaushan text-light h-50" disabled value="">
//                             </div>
//                             <div class="d-flex ">
//                                 <p class="col-6 font-kaushan text-light">Title: </p>
//                                 <p class="col-6 font-kaushan text-light">~~</p>
//                             </div>
//                             <div class="d-flex ">
//                                 <p class="col-6 font-kaushan text-light">Place: </p>
//                                 <p class="col-6 font-kaushan text-light">Paris / France</p>
//                             </div>
//                             <div class="d-flex ">
//                                 <p class="col-6 font-kaushan text-light">Year: </p>
//                                 <p class="col-6 font-kaushan text-light">2017</p>
//                             </div>
//                             <div class="d-flex ">
//                                 <p class="col-6 font-kaushan text-light">Favorite part: </p>
//                                 <p class="col-6 font-kaushan text-light">Round Shape</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div id="calculator" class="col-12 d-flex justify-content-center ps-3 py-3 bgcolor-grey border border-lightgrey mt-3">
//                         <div class="col-11 d-flex flex-wrap">
//                             <button type="button" id="key0" class="btn btn-light border border-darkgrey m-2 btn-width font-kaushan text-darkgrey" value="0">0</button>
//                             <button type="button" class="btn btn-light border border-darkgrey m-2 btn-width font-kaushan text-darkgrey" id="key1" value="1">1</button>
//                             <button type="button" class="btn btn-light border border-darkgrey m-2 btn-width font-kaushan text-darkgrey" value="2">2</button>
//                             <button type="button" class="btn btn-light border border-darkgrey m-2 btn-width font-kaushan text-darkgrey" value="3">3</button>
//                             <button type="button" class="btn btn-light border border-darkgrey m-2 btn-width font-kaushan text-darkgrey" value="4">4</button>
//                             <button type="button" class="btn btn-light border border-darkgrey m-2 btn-width font-kaushan text-darkgrey" value="5">5</button>
//                             <button type="button" class="btn btn-light border border-darkgrey m-2 btn-width font-kaushan text-darkgrey" value="6">6</button>
//                             <button type="button" class="btn btn-light border border-darkgrey m-2 btn-width font-kaushan text-darkgrey" value="7">7</button>
//                             <button type="button" class="btn btn-light border border-darkgrey m-2 btn-width font-kaushan text-darkgrey" value="8">8</button>
//                             <button type="button" class="btn btn-light border border-darkgrey m-2 btn-width font-kaushan text-darkgrey" value="9">9</button>
//                             <button type="button" class="btn btn-light border border-darkgrey m-2 btn-width font-kaushan text-darkgrey">C</button>
//                             <button type="button" class="btn btn-light border border-darkgrey m-2 btn-width font-kaushan text-darkgrey">E</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>

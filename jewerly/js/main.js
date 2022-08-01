const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}



const tabsBtn = document.querySelectorAll(".tabs_nav-btn ");
const tabsItems = document.querySelectorAll(".tabs_item");

  tabsBtn.forEach(function(item) {
  item.addEventListener("click",function(){
    let currentBtn = item;
    let tabId =currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    tabsBtn.forEach(function(item) {
      item.classList.remove('active');

    });

        tabsItems.forEach(function(item) {
          item.classList.remove('active');

        });


    currentBtn.classList.add('active');
    currentTab.classList.add('active');
  });

});

let intervalId;
document.querySelectorAll('.dropbtn').forEach(e => {
  e.addEventListener('click',e =>{
    const menu =e.currentTarget.dataset.path;
      document.querySelectorAll('.dropdown-content').forEach(e =>{

        if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')){
          e.classList.remove('active');
            e.classList.remove('open');
          document.querySelector(`[data-target=${menu}]`).classList.add('active');
        intervalId=  setTimeout(() => {
            document.querySelector(`[data-target=${menu}]`).classList.add('open')

          },0);
        }
        if(document.querySelector(`[data-target=${menu}]`).classList.contains('open')){
          clearTimeout(intervalId);
          document.querySelector(`[data-target=${menu}]`).classList.remove('active')
          intervalId=  setTimeout(() => {
              document.querySelector(`[data-target=${menu}]`).classList.remove('open')

            },0);
        }



      });
  });
});

let moreInfo;
document.querySelectorAll('.more_info').forEach(e => {
  e.addEventListener('click',e =>{
    const menu =e.currentTarget.dataset.path;
      document.querySelectorAll('.catalog_more_content').forEach(e =>{

        if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')){
          e.classList.remove('active');
            e.classList.remove('open');
          document.querySelector(`[data-target=${menu}]`).classList.add('active');
        moreInfo=  setTimeout(() => {
            document.querySelector(`[data-target=${menu}]`).classList.add('open')

          },0);
        }
        if(document.querySelector(`[data-target=${menu}]`).classList.contains('open')){
          clearTimeout(moreInfo);
          document.querySelector(`[data-target=${menu}]`).classList.remove('active')
            moreInfo=  setTimeout(() => {
              document.querySelector(`[data-target=${menu}]`).classList.remove('open')

            },0);
        }



      });
  });
});

var readMoreBtn = document.querySelector(".more_info"),
    readMoreContent = document.querySelector(".more_info_txt");

readMoreBtn.addEventListener("click", function(event) {
    event.preventDefault();
    readMoreContent.classList.toggle("more_info_txts");
    this.textContent = this.textContent === 'Скрыть' ? 'покажите еще' : 'Скрыть';
});




function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Читать полностю";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Читать меньше";
    moreText.style.display = "inline";
  }
}
// Слайдер
var sw = document.getElementById("sliderWindow"); // большая картинка
var mi = document.getElementsByClassName("miniImg"); //маленькие картинки

var arrOfImg=[
	'https://picsum.photos/id/237/200/300',
	'https://picsum.photos/id/247/200/300',
	'https://picsum.photos/id/227/200/300'
]; //массив с картинками

function startImg(){ //фукнция для вставки начальных картинок в маленькие окошечки (т.е. маленькие картинки)
    for(var i=0; i<mi.length; i++){
        mi[i].style.backgroundImage="url(" + arrOfImg[i] + ")"
    }
};

startImg()

for(var k=0; k<mi.length; k++){ //а вот собственно висяк, никак не приходит в голову, как можно присвоить при клике значение backgroundImage маленькой картинкИ В большую картинку
  mi[k].onclick=function(e){
  	sw.style.backgroundImage = e.target.style.backgroundImage
  } // (*)
};

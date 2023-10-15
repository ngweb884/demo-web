const menu = [
  {
    id: 1,
    title: "slider",
    category: "shop",
    img: "1slider.png",
    url:"https://ngweb884.github.io/js-app-1/",    
    desc: `Javascript slider`,
  },
  {
    id: 2,
    title: "Tic Tac Toc",
    category: "game",
    img: "images/3tictactoe.PNG",
    url:"https://ngweb884.github.io/js-game-tic-tac-toe/", 
    desc: `Javascript ,Html, Css game`,
  },
  {
    id: 3,
    title: "shopping list",
    category: "shop",
    img: "images/2shop.png",
    url:"https://ngweb884.github.io/js-app-2/", 
    desc: `web shopping , category filter`,
  },
  {
    id: 4,
    title: "Todo List",
    category: "javascript",
    img: "4todo.PNG",
    url:"https://ngweb884.github.io/js-app-3", 
    desc: `javascript ,html`,
  },
  {
    id: 5,
    title: "Css scroll pics",
    category: "css",
    img: "5css-pics.PNG",
    url:"https://ngweb884.github.io/css-app-pics-scroll", 
    desc: `css scroll animation`,
  },
  {
    id: 6,
    title: "css scroll animation",
    category: "css",
    img: "./images/6css-scroll.PNG",
    url:"https://ngweb884.github.io/css-app-scroll-2", 
    desc: `css scroll animation`,
  },
  {
    id: 7,
    title: "css scroll",
    category: "css",    
    img: "7css-scroll.png",
    url:"https://ngweb884.github.io/css-app-scroll", 
    desc: `css,html`,
  },
  
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
           <a href="${item.url}">  <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}

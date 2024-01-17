const backdrop = document.querySelector(".backdrop-sorting");
const sortBtnOpen = document.querySelector(".sort-btn-open");
const nameSort = document.getElementById("name-sort");

const toggleSort = () => backdrop.classList.toggle("is-hidden");

sortBtnOpen.addEventListener("click", () => {
    toggleSort();
    setTimeout(() => {
        document.querySelectorAll(".mobile-sorting__name-sort").forEach((elem) => {
            if (elem.textContent == nameSort.textContent) {
                elem.style.color = "#FF9F0E";
            } else {
                elem.style.color = "#181817";
            }
        });
    }, 50);
});

backdrop.addEventListener("click", (event) => {
    if (event.target.className === "backdrop-sorting") {
        toggleSort();
    }

    if (event.target.className === "mobile-sorting__name-sort") {
        nameSort.textContent = event.target.textContent;
        toggleSort();
    }
});



/**
 * Add products from fake API store
 */
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error.message);
    }
}

function createCardHTML(id, image, price, title) {
    return `
        <li class="nutrition-section__item">
        <article class="nutrition-card">
            <img class="nutrition-card__image" src="${image}" alt="item">
                <div class="nutrition-card__code-rating-box">
                    <p class="nutrition-card__code-box">Vendor code: <span class="nutrition-card__id">${id}</span></p>
                    <ul class="nutrition-card__box-rating">
                        <li class="nutrition-card__item-rating">
                            <svg width="16px" height="16px">
                                <use href="./images/icons.svg#icon-star"></use>
                            </svg>
                        </li>
                        <li class="nutrition-card__item-rating">
                            <svg width="16px" height="16px">
                                <use href="./images/icons.svg#icon-star"></use>
                            </svg>
                        </li>
                        <li class="nutrition-card__item-rating">
                            <svg width="16px" height="16px">
                                <use href="./images/icons.svg#icon-star"></use>
                            </svg>
                        </li>
                        <li class="nutrition-card__item-rating">
                            <svg width="16px" height="16px">
                                <use href="./images/icons.svg#icon-star"></use>
                            </svg>
                        </li>
                        <li class="nutrition-card__item-rating">
                            <svg width="16px" height="16px">
                                <use href="./images/icons.svg#icon-star"></use>
                            </svg>
                        </li>
                    </ul>
                </div>
                <p class="nutrition-card__description">
                    ${title}
                </p>
                <div class="nutrition-card__price-box">
                    <p class="nutrition-card__price-with-discount"><span>${price}</span>$</p>
                    <p class="nutrition-card__price-standart"><span>${price}</span>$</p>
                </div>
                <button class="nutrition-card__button button" type="button">Buy</button>
        </article>
    </li>
    `
}

const listCards = document.querySelector(".nutrition-section__list");

async function main() {
    const products = await fetchData("https://fakestoreapi.com/products");
    console.log(products);

    products.forEach((elem) => {
        let card = createCardHTML(elem.id, elem.image, elem.price, elem.title);
        listCards.insertAdjacentHTML('beforeend', card);
    });

}

main();
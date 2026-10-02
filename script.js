const form = document.querySelector("#shopping-form");

const productInput = document.querySelector("#product");
const quantityInput = document.querySelector("#quantity");
const priceInput = document.querySelector("#price");

const message = document.querySelector("#message");

const showListButton = document.querySelector("#show-list");
const checkAgainButton = document.querySelector("#check-again");

const tableSection = document.querySelector("#table-section");
const shoppingList = document.querySelector("#shopping-list");

const totalElement = document.querySelector("#total");
const systemWarning = document.querySelector("#system-warning");

const clue = document.querySelector("#clue");
const mysteryTimerElement = document.querySelector("#mystery-timer");

let items = [];

let showAttempts = 0;
let mysteryStarted = false;
let listRecovered = false;

let mysterySeconds = 0;
let mysteryTimer = null;

let selectedMystery = null;


form.addEventListener("submit", function (event) {
  event.preventDefault();

  const product = productInput.value.trim();
  const quantity = Number(quantityInput.value);
  const price = Number(priceInput.value);

  const newItem = {
    id: Date.now(),
    product,
    quantity,
    price
  };

  items.push(newItem);

  renderItems();

  form.reset();
  quantityInput.value = 1;

  tableSection.classList.add("hidden");
  systemWarning.classList.add("hidden");

  message.textContent = "Item adicionado com sucesso. 🌷";

  if (items.length >= 3) {
    showListButton.classList.remove("hidden");
  }
});

function renderItems() {
  shoppingList.innerHTML = "";

  items.forEach(function (item) {
    const subtotal = item.quantity * item.price;

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.product}</td>
      <td>${item.quantity}</td>
      <td>${formatMoney(item.price)}</td>
      <td>${formatMoney(subtotal)}</td>
      <td>
        <button
          class="action-button remove-button"
          onclick="removeItem(${item.id})"
        >
          Remover
        </button>
      </td>
    `;

    shoppingList.appendChild(row);
  });

  calculateTotal();
}

function removeItem(id) {
  items = items.filter(function (item) {
    return item.id !== id;
  });

  renderItems();

  tableSection.classList.add("hidden");

  message.textContent = "Item removido.";
}

function calculateTotal() {
  const total = items.reduce(function (sum, item) {
    return sum + item.quantity * item.price;
  }, 0);

  totalElement.textContent = formatMoney(total);
}

function formatMoney(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}


showListButton.addEventListener("click", function () {
  showAttempts++;

  if (showAttempts === 1) {
    message.textContent =
      "Aqui está sua lista. 😊";

    return;
  }

  if (showAttempts === 2) {
    message.textContent =
      "Hum... ela estava aqui agora mesmo. 😳";

    message.classList.add("strange");

    return;
  }

  if (showAttempts >= 3) {
    message.textContent =
      "Talvez esteja faltando alguma coisinha... 🤔";

    showListButton.classList.add("hidden");

    checkAgainButton.classList.remove("hidden");

    startMystery();
  }
});

checkAgainButton.addEventListener("click", function () {
  if (listRecovered) {
    return;
  }

  message.textContent =
    "Ainda não parece completa... 👀";
});

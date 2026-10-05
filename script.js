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
let editingId = null;

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
        <div class="item-actions">
          <button
            type="button"
            class="action-button edit-button"
            onclick="startEdit(${item.id})"
          >
            Editar
          </button>

          <button
            type="button"
            class="action-button remove-button"
            onclick="removeItem(${item.id})"
          >
            Remover
          </button>
        </div>
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

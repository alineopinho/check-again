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

const mysteries = [
  {
    item: "sal",
    clues: [
      "Pista: talvez esteja faltando algo simples... algo que quase toda cozinha tem.",
      "Segunda pista: uma pequena quantidade já muda bastante o sabor."
    ]
  },
  {
    item: "leite",
    clues: [
      "Pista: talvez esteja faltando algo que costuma ficar refrigerado.",
      "Segunda pista: aparece bastante no café da manhã."
    ]
  },
  {
    item: "arroz",
    clues: [
      "Pista: talvez esteja faltando algo muito comum no almoço.",
      "Segunda pista: costuma acompanhar feijão."
    ]
  },
  {
    item: "café",
    clues: [
      "Pista: talvez esteja faltando algo que muita gente procura logo cedo.",
      "Segunda pista: seu cheiro costuma entregar a resposta."
    ]
  },
  {
    item: "açúcar",
    clues: [
      "Pista: talvez esteja faltando algo comum em receitas e bebidas.",
      "Segunda pista: costuma deixar as coisas mais doces."
    ]
  }
];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const product = productInput.value.trim();
  const quantity = Number(quantityInput.value);
  const price = Number(priceInput.value);

  if (editingId !== null) {
    items = items.map(function (item) {
      if (item.id === editingId) {
        return {
          ...item,
          product,
          quantity,
          price
        };
      }

      return item;
    });

    editingId = null;

    message.textContent =
      "Item atualizado com sucesso. ✨";
  } else {
    const newItem = {
      id: Date.now(),
      product,
      quantity,
      price
    };

    items.push(newItem);

    message.textContent =
      "Item adicionado com sucesso. 🌷";
  }

  renderItems();

  form.reset();
  quantityInput.value = 1;

  if (!mysteryStarted && items.length >= 3) {
    showListButton.classList.remove("hidden");
  }
});

function startEdit(id) {
  const item = items.find(function (item) {
    return item.id === id;
  });

  if (!item) {
    return;
  }

  productInput.value = item.product;
  quantityInput.value = item.quantity;
  priceInput.value = item.price;

  editingId = id;

  message.textContent =
    "Edite os dados e confirme novamente. ✏️";
}

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

showListButton.addEventListener("click", function () {
  showAttempts++;

  if (showAttempts === 1) {
    message.textContent = "Aqui está sua lista. 😊";
    tableSection.classList.add("hidden");
  }

  if (showAttempts === 2) {
    message.textContent =
      "Hum... ela estava aqui agora mesmo. 😳";

    message.classList.add("strange");
    tableSection.classList.add("hidden");
  }

  if (showAttempts === 3) {
    message.textContent =
      "Talvez esteja faltando alguma coisinha... 🤔";

    message.classList.add("strange");

    showListButton.classList.add("hidden");
    checkAgainButton.classList.remove("hidden");

    startMystery();
  }
});

checkAgainButton.addEventListener("click", function () {
  message.textContent =
    "Ainda parece estar faltando alguma coisa... 👀";

  message.classList.add("strange");

  tableSection.classList.add("hidden");
});

function startMystery() {
  if (mysteryStarted) {
    return;
  }

  mysteryStarted = true;

  tableSection.classList.add("hidden");
  mysteryTimerElement.classList.remove("hidden");

  chooseMystery();
  startMysteryTimer();
}

function chooseMystery() {
  const existingProducts = items.map(function (item) {
    return normalizeText(item.product);
  });

  const availableMysteries = mysteries.filter(function (mystery) {
    return !existingProducts.includes(
      normalizeText(mystery.item)
    );
  });

  if (availableMysteries.length === 0) {
    selectedMystery = mysteries[
      Math.floor(Math.random() * mysteries.length)
    ];

    return;
  }

  selectedMystery =
    availableMysteries[
      Math.floor(Math.random() * availableMysteries.length)
    ];
}

function startMysteryTimer() {
  mysterySeconds = 0;

  mysteryTimerElement.textContent = "00:00";

  mysteryTimer = setInterval(function () {
    mysterySeconds++;

    updateMysteryTimer();

    if (mysterySeconds === 45) {
      clue.textContent = selectedMystery.clues[0];
      clue.classList.remove("hidden");
    }

    if (mysterySeconds === 75) {
      clue.textContent = selectedMystery.clues[1];
    }
  }, 1000);
}

function updateMysteryTimer() {
  const minutes = Math.floor(mysterySeconds / 60);
  const seconds = mysterySeconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  mysteryTimerElement.textContent =
    `${formattedMinutes}:${formattedSeconds}`;
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

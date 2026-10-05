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

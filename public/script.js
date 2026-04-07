const PAYPAL_CONFIG = {
  business: "replace-with-your-paypal-email@example.com",
  currency: "EUR"
};

const paypalButtons = document.querySelectorAll(".paypal-button");
const paypalStatus = document.querySelector("#paypal-status");
const paypalHelp = document.querySelector("#paypal-help");

const hasLivePaypal =
  PAYPAL_CONFIG.business &&
  !PAYPAL_CONFIG.business.includes("replace-with-your-paypal-email");

if (hasLivePaypal) {
  paypalStatus.textContent = "Live checkout enabled";
  paypalHelp.textContent =
    "PayPal buttons are active. Buyers can open a direct checkout page for the selected kit.";
}

paypalButtons.forEach((button) => {
  const itemName = button.dataset.item;
  const price = button.dataset.price;

  if (!hasLivePaypal) {
    button.setAttribute("aria-disabled", "true");
    button.textContent = "Set PayPal email first";
    return;
  }

  const paypalUrl = new URL("https://www.paypal.com/cgi-bin/webscr");
  paypalUrl.searchParams.set("cmd", "_xclick");
  paypalUrl.searchParams.set("business", PAYPAL_CONFIG.business);
  paypalUrl.searchParams.set("item_name", itemName);
  paypalUrl.searchParams.set("amount", price);
  paypalUrl.searchParams.set("currency_code", PAYPAL_CONFIG.currency);

  button.href = paypalUrl.toString();
  button.target = "_blank";
  button.rel = "noreferrer";
});

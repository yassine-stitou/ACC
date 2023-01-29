let first_res_price = document.querySelector("#first-res-price")
let second_res_price = document.querySelector("#second-res-price")
let artefact_price = document.querySelector("#artefact-price")
let sell_price = document.querySelector("#sell-price")
let return_rate = document.querySelector("#return-rate")

let btn_calc = document.querySelector("#button-3")
let btn_reset = document.querySelector("#button-24")

let craft_price_no_return = document.querySelector("#craft-price")
let craft_price_return = document.querySelector("#craft-price-return")
let returned_res = document.querySelector("#ammount-returned")
let profit = document.querySelector("#profit-ui")

let div_sell_info = document.querySelector("#sell-info")

btn_reset.addEventListener("click", () => {
  first_res_price.value = ""
  second_res_price.value = ""
  artefact_price.value = ""
  sell_price.value = ""
  return_rate.value = ""
  craft_price_no_return.textContent = ""
  craft_price_return.textContent = ""
  returned_res.textContent = ""
  profit.textContent = ""
  div_sell_info.style.backgroundColor = ""
})

btn_calc.addEventListener("click", () => {
  craft_price_no_return.textContent = Number(first_res_price.value) + Number(second_res_price.value) + Number(artefact_price.value)
  returned_res.textContent = Number(craft_price_no_return.textContent) * Number(return_rate.value) / 100
  craft_price_return.textContent = Number(craft_price_no_return.textContent) - Number(returned_res.textContent)
  profit.textContent = Number(sell_price.value) - Number(craft_price_return.textContent)
  if (Number(profit.textContent) > 0) {
    div_sell_info.style.backgroundColor = "#134A18"
  } else if (Number(profit.textContent) < 0) {
    div_sell_info.style.backgroundColor = "#661111"
  } else {
    div_sell_info.style.backgroundColor = "#661111"
  }
})


const RATES = {
usd: 0.0108,
eur: 0.0101,
};

const convert = ({rub, currency}) => {
if (!RATES[currency]) {
return 'Курс данной валюты неизвестен'
}

return rub * RATES[currency]
}
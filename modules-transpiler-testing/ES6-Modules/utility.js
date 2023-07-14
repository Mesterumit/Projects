export const  loadTitle =(el, text)=>{
    const title = document.createElement(el)
    title.textContent = text
    title.style.textAlign = 'center'

    const main = document.getElementsById('main')
    main.appendChild(title)


}

// export default loadTitle
// export function capitalize(word){

//     return word[0].toUpperCase() + word.slice(1);
// }

// export function roundToDecimalPlace(number, decimalPlaces = 2){

//     const round = 10 ** decimalPlaces;

//     return Math.round(number*round) / round ;
// }
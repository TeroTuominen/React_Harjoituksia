// Alustetaan tila, joka sisältää count-ominaisuuden, jonka arvo on 0
const initialState = {
    count: 0
}

// Määritellään countReducer-funktio, joka ottaa vastaan state- ja action-parametrit
const countReducer = (state = initialState, action) => {
    console.log('countReducer', state, action) // Tulostetaan state ja action konsoliin
    switch(action.type) { // Tarkistetaan action-tyyppi
        case 'INCREMENT': // Jos action-tyyppi on INCREMENT
            return {
                count: state.count + 1 // Lisätään count-ominaisuuden arvoa yhdellä
            }
        case 'DECREMENT': // Jos action-tyyppi on DECREMENT
            return {
                count: state.count - 1 // Vähennetään count-ominaisuuden arvoa yhdellä
            }
        default: // Jos action-tyyppi ei ole INCREMENT tai DECREMENT
            return state; // Palautetaan alkuperäinen tila
    }
}

export default countReducer; // Viedään countReducer-funktio oletuksena käytettäväksi muissa tiedostoissa
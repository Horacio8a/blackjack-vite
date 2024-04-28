import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCartas Ejemplo: ['C', 'H', 'D', 'S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A', 'J', 'K', 'Q']
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if(!tiposDeCartas || tiposDeCartas.length === 0 )  
        throw 'tiposDeCartas es requerido como un arreglo de string';
    if(!tiposEspeciales || tiposEspeciales.length === 0 )  
        throw 'tiposEspeciales es requerido como un arreglo de string';

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }
    
    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
};
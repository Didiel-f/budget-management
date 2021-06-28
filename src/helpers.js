export const checkBudget = ( budget, wallet ) => {
    let clase;

    if ( (budget / 4 ) > wallet ) {
        clase = 'alert alert-danger';
    } else if ( (budget / 2 ) > wallet ) {
        clase = 'alert alert-warning';
    } else {
        clase = 'alert alert-success';
    }

    return clase;
}
document.addEventListener('DOMContentLoaded', () => {
    rollBtn = document.querySelector('#rollBtn');

    rollBtn.addEventListener('click', () => {
        let diceValuePlaceholder = document.querySelector('#dice-result');
        fetch()
            .then(response => response.json())
            .then(dice => {
                diceValue = dice.value;
            })
            .catch(err => console.error('error: ' + err));
        diceValuePlaceholder.textContent = diceValue;
    });

});
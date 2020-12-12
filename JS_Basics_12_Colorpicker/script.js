document.addEventListener("DOMContentLoaded", function () {
    let hoverButton = document.getElementById('hoverbutton');
    let sideMenu = document.getElementById('sidemenu');
    let radios = document.getElementById('colorform');
    let container = document.getElementById('container');
    let colorExpression = document.getElementById('colorexpression');

    hoverButton.addEventListener('click', function () {
        sideMenu.className = 'visible';
    });

    radios.addEventListener('click', function () {
        let colors = document.getElementsByName('color');
        let selectedColor;
        for (i = 0; i < colors.length; i++) {
            if (colors[i].checked) {
                selectedColor = colors[i].value;
                container.className = selectedColor;
                sideMenu.className = 'hidden';
                colorExpression.textContent = selectedColor;
            }
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === '1') {
            container.className = 'green';
        }
        if (event.key === '2') {
            container.className = 'red';
        }
        if (event.key === '3') {
            container.className = 'yellow';
        }
    });
});

$(document).ready(function () {

    $("#carousel").carouFredSel({
        items: 3,
        direction: "left",
        scroll: {
            items: 3,
            easing: "elastic",
            duration: 3,
            responsive: true,
            pauseOnHover: true
        }
    })

    let columnButton = document.querySelector("#columnButton")

    columnButton.addEventListener('click', (e) => {

        columns = document.querySelectorAll(".row > .column")

        columns.forEach(myCallBack)

    });

    // première manière de définir une callback
    function myCallBack(column, i) {

        column.classList.add("full")

    }

    let squareButton = document.querySelector("#squareButton")

    squareButton.addEventListener('click', (e) => {

        columnsFull = document.querySelectorAll(".row > .column")

        columnsFull.forEach(

            // seconde manière de définir une callback
            function (column, i) {

                column.classList.remove("full")

            });

    })
})


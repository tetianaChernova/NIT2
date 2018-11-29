import $ from "jquery";

$(document).ready(function () {
    generateItems();
});

function generateItems() {
    let array = JSON.parse(sessionStorage.getItem("myProducts"));
    // alert(array);
    if (array === null) return;
    for (let i = 0; i < array.length; i++) {
        $.ajax({
            type: "GET",
            url: `http://nit.tron.net.ua/api/product/${array[i]}`,
            success: function (data) {
                $('.tanya').append(
                    `<div class="col-md-3 text-center">
        <img src=${data.image_url} width="150px" height="150px">
        <br>
        <strong>${data.price}</strong>
        <br>
        <p href="#" class="btn btn-info">${data.name}</p>
    </div>`);
            },
            error: function (jqXHR, exception) {
                alert("Error");
            }
        });
    }
}
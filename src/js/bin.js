// import $ from "jquery";
//
// let array;
// $(document).ready(function () {
//
//     generateItems();
// });
//
// function generateItems() {
//     array = JSON.parse(sessionStorage.getItem("myProducts"));
//     // alert(array);
//     if (array === null) return;
//     for (let i = 0; i < array.length; i++) {
//         $.ajax({
//             type: "GET",
//             url: `https://nit.tron.net.ua/api/product/${array[i]}`,
//             success: function (data) {
//                 $('.tanya').append(
//                     '<div class="col-12 col-sm-12 col-md-2 text-center">\
//                         <img class="img-responsive" src="' + data.image_url + '" alt="prewiew" width="120" height="80">\
//                     </div>\
//                     <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">\
//                     <h4 class="product-name"><strong>' + data.name + '</strong></h4>\
//                 </div>\
//                 <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">\
//                     <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">\
//                     <h6><strong>' + data.price + '<span class="text-muted"></span></strong></h6>\
//                 </div>\
//                 <div class="col-4 col-sm-4 col-md-4">\
//                     <div class="quantity">\
//                     <input id="increment'+getIdNumber(array[i])+'" type="button" value="+" class="plus">\
//                     <input id ='+ getIdNumber(array[i])+' type="number" step="1" max="99" min="1" value="1" title="Qty" class="qty" size="4">\
//                     <input id="decrement'+getIdNumber(array[i])+'" type="button" value="-" class="minus">\
//                     </div>\
//                     </div>\
//                     <div class="col-2 col-sm-2 col-md-2 text-right">\
//                     <button type="button" class="btn btn-outline-danger btn-xs">\
//                     <i class="fa fa-trash" aria-hidden="true"></i>\
//                     </button>\
//                     </div>\
//                     </div>'
//                 )
//             },
//             error: function (jqXHR, exception) {
//                 alert("Error");
//             }
//         });
//     }
// }
//
// function getIdNumber(id) {
//     return "number_" + id;
// }
//
//
// $("#order").click(function () {
//     //check if not empty
//
//     if (array.length > 0) {
//
//         var name = $('#inputName')[0].value;
//         var phone = $('#inputPhone')[0].value;
//         var token = 'UBkvep2raPWUQyD_AhRs';
//         var email = $('#inputEmail')[0].value;
//         console.log(name);
//
//         var data = "token=" + token + "&name=" + name + "&phone=" + phone + "&email=" + email;
//         for (var i = 0; i < array.length; i++) {
//             data += "&products[" + array[i].id + "]=1";
//         }
//
//
//         $.ajax({
//             method: "POST",
//             url: "https://nit.tron.net.ua/api/order/add",
//             data: data,
//             success: function (json) {
//                 console.log(json.status);
//                 alert("Your order was successfully created!");
//             },
//             dataType: 'json'
//         });
//
//     }
//
//
// });


import $ from "jquery";

let array;

$(document).ready(function () {
    generateItems();
});

function generateItems() {
    array = JSON.parse(sessionStorage.getItem("myProducts"));
    // alert(array);
    if (array === null) return;
    for (let i = 0; i < array.length; i++) {
        $.ajax({
            type: "GET",
            url: `https://nit.tron.net.ua/api/product/${array[i]}`,
            success: function (data) {
                console.log(array[i]);
                $('.tanya').append(
                    '<div class="col-12 col-sm-12 col-md-2 text-center">\
                        <img class="img-responsive" src="' + data.image_url + '" alt="prewiew" width="120" height="80">\
                    </div>\
                    <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">\
                    <h4 class="product-name"><strong>' + data.name + '</strong></h4>\
                </div>\
                <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">\
                    <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">\
                    <h6><strong id="price' + getIdNumber(array[i]) + '">' + data.price + '<span class="text-muted"></span></strong></h6>\
                </div>\
                <div class="col-4 col-sm-4 col-md-4">\
                    <div class="quantity">\
                    <input type="button" value="+" class="plus">\
                    <input id =' + getIdNumber(array[i]) + ' type="number" step="1" max="99" min="1" value="1" title="Qty" class="qty" size="4">\
                    <input type="button" value="-" class="minus">\
                    </div>\
                    </div>\
                    <div class="col-2 col-sm-2 col-md-2 text-right">\
                    <button type="button" class="btn btn-outline-danger btn-xs">\
                    <i class="fa fa-trash" aria-hidden="true"></i>\
                    </button>\
                    </div>\
                    </div>'
                    //                  <script>  $(getIdNumber(array[i])).change(function(e){
                    //     var counter = document.getElementById("getIdNumber(array[i])").value;
                    //     var price = Number(document.getElementById("price'+getIdNumber(array[i])+'").innerHTML);
                    //     price = price*counter;
                    //     document.getElementById("price'+getIdNumber(array[i])+'").innerHTML = price;
                    // });</script>
                )
            },
            error: function (jqXHR, exception) {
                alert("Error");
            }
        });
    }
    // for (var i = 0; i < array.length; i++) {
    //     console.log(array[i].id);
    // }

}

function getIdNumber(id) {
    return "number_" + id;
}

$("#order").click(function () {
    //check if not empty

    if (array.length > 0) {

        var name = $('#inputName')[0].value;
        var phone = $('#inputPhone')[0].value;
        var token = 'UBkvep2raPWUQyD_AhRs';
        var email = $('#inputEmail')[0].value;
        console.log(name);
        console.log(phone);
        console.log(email);


        var data = "token=" + token + "&name=" + name + "&phone=" + phone + "&email=" + email;
        for (var i = 0; i < array.length; i++) {
            data += "&products[" + array[i] + "]=1";
        }

        console.log(data);
        $.ajax({
            method: "POST",
            url: "https://nit.tron.net.ua/api/order/add",
            data: data,
            success: function (json) {
                console.log(json);
                alert("Your order was successfully created!");
            },
            dataType: 'json'
        });

    }


});
// import $ from 'jquery';
//
// $.ajax({
//     type: "GET",
//     url: "http://nit.tron.net.ua/api/product/list",
//     success: function (data) {
//         console.dir(data);
//     },
//     error: function (jqXHR, exception) {
//         var msg = '';
//         if (jqXHR.status === 0) {
//             msg = 'Not connect.\n Verify Network.';
//         } else if (jqXHR.status == 404) {
//             msg = 'Requested page not found. [404]';
//         } else if (jqXHR.status == 500) {
//             msg = 'Internal Server Error [500].';
//         } else if (exception === 'parsererror') {
//             msg = 'Requested JSON parse failed.';
//         } else if (exception === 'timeout') {
//             msg = 'Time out error.';
//         } else if (exception === 'abort') {
//             msg = 'Ajax request aborted.';
//         } else {
//             msg = 'Uncaught Error.\n' + jqXHR.responseText;
//         }
//         $('#post').html(`<div style='font-size: 32px; font-weight: 600; text-align: center;'>${msg}</div><div style='font-size: 28px; font-weight: 600; text-align: center'>Try again later</div>`);
//     }
// }).done(function () {
//     console.log("done");
//     showPopUp('.js-product-open', '.js-close');
// });
//
//

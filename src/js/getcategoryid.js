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
//     showCategory('.js-category-open');
// });
//
//
// function showCategory (openEl) {
//     $(openEl).on('click', function(e) {
//         e.preventDefault();
//         //$('#productModal').addClass('isActive');
//         let id = $(this).parents('.js-card').attr('data-product-id');
//         getProduct(id);
//     });
// }
//
// function getProduct (id) {
//     debugger;
//     $.ajax({
//         type: "GET",
//         url: `http://nit.tron.net.ua/api/product/${id}`,
//         success: function (data) {
//             console.dir(data);
//             // buildCategory(data);
//             $('.js-modal-body').html(
//                 `<div class="modal-content">
//                 <div class="modal-header">
//                     <a href="#" data-dismiss="modal" class="class pull-right"><span class="glyphicon glyphicon-remove"></span></a>
//                     <h3 class="modal-title">${data.name}</h3>
//                 </div>
//                 <div class="modal-body">
//                     <div class="row">
//                         <div class="col-md-6 product_img">
//                             <img src="${data.image_url}" class="img-responsive" style='width:100%'>
//                         </div>
//                         <div class="col-md-6 product_content">
//                             <p>${data.description}</p>
//
//                             <h3 class="cost">
//                                 <span class="glyphicon glyphicon-usd ${data.special_price ? 'showCost' : 'hideCost'}"></span>
//                                 ${data.special_price}
//                                 <small class="pre-cost">
//                                     <span class="glyphicon glyphicon-usd"></span>
//                                     ${data.price}
//                                 </small>
//                             </h3>
//                             <div class="btn-ground">
//                                 <button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-shopping-cart"></span> Add To Cart</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//                 `
//             )
//         },
//         error: function (jqXHR, exception) {
//             var msg = '';
//             if (jqXHR.status === 0) {
//                 msg = 'Not connect.\n Verify Network.';
//             } else if (jqXHR.status == 404) {
//                 msg = 'Requested page not found. [404]';
//             } else if (jqXHR.status == 500) {
//                 msg = 'Internal Server Error [500].';
//             } else if (exception === 'parsererror') {
//                 msg = 'Requested JSON parse failed.';
//             } else if (exception === 'timeout') {
//                 msg = 'Time out error.';
//             } else if (exception === 'abort') {
//                 msg = 'Ajax request aborted.';
//             } else {
//                 msg = 'Uncaught Error.\n' + jqXHR.responseText;
//             }
//             $('#post').html(`<div style='font-size: 32px; font-weight: 600; text-align: center;'>${msg}</div><div style='font-size: 28px; font-weight: 600; text-align: center'>Try again later</div>`);
//         }
//     })
// }

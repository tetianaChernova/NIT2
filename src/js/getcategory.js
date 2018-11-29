import $ from 'jquery';

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://nit.tron.net.ua/api/category/list",
        success: function (data) {
            buildCategoryList(data);
        },
        error: function (jqXHR, exception) {
            let msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            $('#post').html(`<div style='font-size: 32px; font-weight: 600; text-align: center;'>${msg}</div><div style='font-size: 28px; font-weight: 600; text-align: center'>Try again later</div>`);
        }
    }).done(function () {
        console.log("done")
        buildCategory('.js-category-open');
    });
    getCategory(1);

    function buildCategoryList(arr) {
        let temp = [];
        let workArray = arr;
        for (let i = 0; i < workArray.length; i++) {
            temp.push(`<div class="list-group-item" data-category-number=${workArray[i]['id']}>
<a class="js-category-open" href="#">${workArray[i].name}
</div>`);

        }
        $('#categories').html(temp.join(""));
    }

    function buildCategory(openElement) {
        $(openElement).on('click', function (e) {
            e.preventDefault();
            let id = $(this).parents('.list-group-item').attr('data-category-number');
            getCategory(id);
        });
    }

    function getCategory(id) {
        $.ajax({
            type: "GET",
            url: `http://nit.tron.net.ua/api/product/list/category/${id}`,
            success: function (data) {
                buildProducts(data);
            },
            error: function (jqXHR, exception) {
                let msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                $('#post').html(`<div style='font-size: 32px; font-weight: 600; text-align: center;'>${msg}</div><div style='font-size: 28px; font-weight: 600; text-align: center'>Try again later</div>`);
            }
        }).done(function () {
            console.log("done")
            showPopUp('.js-product-open', '.js-close');
        });
    }

    function showPopUp(openEl, closeEl) {
        $(openEl).on('click', function (e) {
            e.preventDefault();
            $('#productModal').addClass('isActive');
            let id = $(this).parents('.js-card').attr('data-product-id');
            getProduct(id);
        });
        $(closeEl).on('click', function (e) {
            e.preventDefault();
            $('#productModal').removeClass('isActive');
        })
    }

    function getProduct(id) {

        $.ajax({
            type: "GET",
            url: `http://nit.tron.net.ua/api/product/${id}`,
            success: function (data) {
                console.dir(data);
                // buildCategory(data);
                $('.js-modal-body').html(
                    `<div class="modal-content">
                <div class="modal-header">
                    <a href="#" data-dismiss="modal" class="class pull-right"><span class="glyphicon glyphicon-remove"></span></a>
                    <h3 class="modal-title">${data.name}</h3>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 product_img">
                            <img src="${data.image_url}" class="img-responsive" style='width:100%'>
                        </div>
                        <div class="col-md-6 product_content">
                        <div>
                            <p class="over">${data.description}</p>       
                            </div>
                            <h3 class="cost">
                                <span class="glyphicon glyphicon-usd ${data.special_price ? 'showCost' : 'hideCost'}"></span> 
                                ${data.special_price}
                                <small class="pre-cost">
                                    <span class="glyphicon glyphicon-usd"></span> 
                                    ${data.price}
                                </small>
                            </h3>
                            <div class="btn-ground button_container">
                                <button data-product-id =${id} type="button" class="addToBasketBtn btn btn-primary"><span class="glyphicon glyphicon-shopping-cart"></span> Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`)
            },
            error: function (jqXHR, exception) {
                let msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                $('#post').html(`<div style='font-size: 32px; font-weight: 600; text-align: center;'>${msg}</div><div style='font-size: 28px; font-weight: 600; text-align: center'>Try again later</div>`);
            }
        }).done(function () {
            addToBasketClick();
        });
    }

    function addToBasketClick() {
        $(".addToBasketBtn").on('click', function (e) {
            let array = JSON.parse(sessionStorage.getItem("myProducts"));
            array = array == null ? [] : array;
            // alert(array);
            let id = $(this).attr("data-product-id");
            console.log(id);
            if (isExist(array, id)) return;
            array.push(id);
            sessionStorage.setItem("myProducts", JSON.stringify(array));
            e.preventDefault();
        });
    }

    function isExist(array, id) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === id) return true;
        }
        return false;
    }

    function buildProducts(arr) {
        let temp = [];
        let workArray = arr;
        for (let i = 0; i < workArray.length; i++) {

            temp.push(`<div class="col-lg-4 col-md-6 mb-4">
            <div class="card js-card h-100" data-product-id=${workArray[i]['id']}>
                <a href="#" class="js-product-open" data-toggle="modal" data-target="#exampleModal"><img class="card-img-top" src="${workArray[i]['image_url']}" alt=""></a>
                <div class="card-body">
                    <h4 class="card-title">
                    <a href="#" class="js-product-open" data-toggle="modal" data-target="#exampleModal">${workArray[i]['name']}</a>
                    </h4>
                    <h5>${workArray[i]['price']}</h5>
                    <p class="card-text" style=" max-height: 500px; overflow-y: scroll">${workArray[i]['description']}</p>
                </div>
            </div>
        </div>`);
        }
        $('#all-products').html(temp.join(""));
    }

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
})


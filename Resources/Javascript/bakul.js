$(document).ready(function () {
    $(".searchText").focus(function () {
        if ($(this).val() == "Search Bakul..") {
            $(this).val("");
            $(this).css("color", "#000000");
        }
    });

    $(".searchText").focusout(function () {
        if ($(this).val() == "") {
            $(this).val("Search Bakul..");
            $(this).css("color", "#777777");
        }
    });


});
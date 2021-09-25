$(document).ready(function () {
    $(".accordion-title").click(function (e) {
        var accordionitem = $(this).attr("data-tab");
        $("#" + accordionitem)
            .slideToggle()
            .parent()
            .siblings()
            .find(".accordion-content")
            .slideUp();

        $(this).toggleClass("active-title");
        $("#" + accordionitem)
            .parent()
            .siblings()
            .find(".accordion-title")
            .removeClass("active-title");

        $("i.fa-chevron-down", this).toggleClass("chevron-top");
        $("#" + accordionitem)
            .parent()
            .siblings()
            .find(".accordion-title i.fa-chevron-down")
            .removeClass("chevron-top")
    });
});
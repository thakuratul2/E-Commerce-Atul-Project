function Br_ResendCode() {
    var e = $("#confirm-user-id").val(),
        n = $("#phone-num").val(); $("#re-send").hide(),
            Br_SetTimer(),
            $.post(Br_Ajax_Requests_File() + "?f=resned_code",
                { user_id: e, phone_number: n },
                function (e) { 200 == e.status || alert(e.errors) })
}

function Br_SetTimer() {
    $("#hideMsg h2 span").text("60"),
        $("#hideMsg").fadeIn("fast");
    var e = $("#hideMsg h2 span").text(),
        n = setInterval(function () {
            $("#hideMsg h2 span").text(--e),
                0 == e && $("#hideMsg").fadeOut("fast", function () { clearInterval(n), $("#re-send").fadeIn("fast") })
        }, 1e3)
}
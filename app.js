function showDiv() {
    document.getElementById('input3').style.display = "none";
    document.getElementById('loadingGif').style.display = "block";
    setTimeout(function () {
        document.getElementById('loadingGif').style.display = "none";
        document.getElementById('showme').style.display = "block";
    }, 2000);

}
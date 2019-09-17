var zoomIn = function () {

    var zoomItem = document.querySelectorAll(".zoomIn");

    function addPreview(e) {
        var preview = document.createElement("div");
        preview.classList = "zoomIn-preview-area";
        preview.setAttribute("style", "position:absolute; box-shadow: 2px 2px 7px 2px rgba(130,130,130,.7),-2px -2px 7px 2px rgba(130,130,130,1); width:350px; height: 350px; background-repeat: no-repeat; visibility:hidden;")
        document.body.appendChild(preview);
    }

    function zoomInImage(e) {
        zoomItem.forEach(function (item) {
            var img = item.querySelector("IMG");
            img.addEventListener("mousemove", function (e) {
                var rect = item.getBoundingClientRect();

                img.style.filter = "sepia(5%)";
                img.style.cursor = "crosshair";

                // var _left = Math.floor(rect.left),
                    _top = Math.floor(rect.top);
                var preview = document.querySelector(".zoomIn-preview-area");
                preview.style.left = item.scrollWidth + "px";
                preview.style.top = _top + "px";
                preview.style.visibility = "visible";
                preview.style.background = "#fff url('" + img.src + "') no-repeat";
                var posX = e.offsetX,
                    posY = e.offsetY;
                preview.style.backgroundPosition = (-posX * 2.4) + "px " + (-posY * 1.9) + "px";
            });

            img.addEventListener("mouseout", function (e) {
                var preview = document.querySelector(".zoomIn-preview-area");
                preview.style.visibility = "hidden";
                img.removeAttribute("style");
            })
        })
    }


    function init() {
        if (zoomItem.length) {
            addPreview();
        }
        if (zoomItem.length) {
            zoomInImage();
        }
    }

    return {
        init: init
    }

}();


zoomIn.init();
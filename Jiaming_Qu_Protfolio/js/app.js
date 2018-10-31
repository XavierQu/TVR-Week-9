(() => {

    const topEl = document.querySelector("#beer1");

    function runAnimation(parent, elements) {
        //should run on a waypoint or user interaction
        console.log("run animation here");
    }

    topEl.addEventListener("mouseover", function() {
        debugger;
        runAnimation(this.querySelector('.svg-graphic'),["lStar", "rStar"]);
    });
})();
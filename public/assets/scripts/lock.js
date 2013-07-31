var Lock = function () {

    return {
        //main function to initiate the module
        init: function () {

             $.backstretch([
		        "assets/img/bg/background_01.png",
		        "assets/img/bg/background_02.png",
		        "assets/img/bg/background_03.png",
		        "assets/img/bg/background_04.png",
		        "assets/img/bg/background_05.png"
		        ], {
		          fade: 1000,
		          duration: 8000
		      });
        }

    };

}();
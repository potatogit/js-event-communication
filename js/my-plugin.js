(function ($) {

    var MyInput = function (ele, opt) {
        this.$input_ = $(ele);
        this.bindEvents_();
    };

    MyInput.prototype.EventType = {
        MY_CHANGE: "my-change"
    };

    MyInput.prototype.bindEvents_ = function () {
        this.$input_.on("keydown", null, this.EventType.MY_CHANGE, this.fireEvent_.bind(this));
    };
    
    MyInput.prototype.fireEvent_ = function (e) {
        console.log(this.$input_.val());
        $(document).trigger(e.data, [this.$input_.val()]);
    };

    var options = {
        arg1: "hi",
        arg2: "da shuai bi"
    };

    var myInput = new MyInput(".my-input", options);


    var MyDisplay = function (ele, opt) {
        this.$display_ = $(ele);
        this.bindEvents_();
    };

    MyDisplay.prototype.EventType = {
        MY_CHANGE: "my-change"
    };

    MyDisplay.prototype.bindEvents_ = function () {
        $(document).on(this.EventType.MY_CHANGE, this.myChangeListener_.bind(this));
    };

    MyDisplay.prototype.myChangeListener_ = function (event, data) {
        console.log(event);
        console.log(data);
        this.$display_.text(data);
    };

    var myDisplay = new MyDisplay(".my-display", options);

    // TODO: fix bug that input and display are not synchronised

})(jQuery);
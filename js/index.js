$(function(){
  var submitBtn = $("#submit-btn");
  var result = $("#result");
  
  submitBtn.on("click", function(){
    addItem.getItems();
  });
  
  result.on("click", "li", function(){
  	var that = $(this);
    that.remove();
  })
});

//新增list
var addItem = addItem || {};
addItem = (function(){
  function todoInputTrim(){     //判斷瀏覽器是否支援
    var todoInput = $("#todo-input").val();
    if (!String.prototype.trim) {
      String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
      };
    }else{
      return todoInput.trim();
    }
  };

  function items(){ //增加list
    var result = $("#result");
    var todoInput = $("#todo-input").val();

    if(todoInputTrim() !== ""){
      result.append('<li>' + todoInputTrim() + ' <button id="del-btn">X</button></li> ');
      $("#todo-input").val("");
      $("p").remove();
    }else{
      result.before('<p>請輸入文字!!</p>');
    }
  }

  function getItems(){
    items();
  }

  return {
    getItems: getItems
  }
}());
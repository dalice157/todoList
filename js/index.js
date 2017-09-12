
$(function(){
	var inputTodo = $("input[name=todo]");
	var addBtn = $("#addBtn");
	var delBtn = $("#result");
	addBtn.on("click", function(){
		listItem.getItems();
	});

	delBtn.on("click", "#delBtn", function(){
		var that = $(this);
		listItem.delItems(that);
	})

})

var listItem = listItem || {};
listItem = (function(){
	var inputTodo = $("input[name=todo]");
	var result = $("#result");

	function regTrim(){ //判斷瀏覽器是否支援 remove 空白
		var todoVal = inputTodo.val();
    if (!String.prototype.trim) {
      String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
      };
    }else{
      return todoVal.trim();
    }
	}

	function getItems(){ //add List
		var items = '';
		var todoVal = inputTodo.val();
		var addBtn = $("#addBtn");
		var errorHtml = '<p class="error">請輸入文字！！</p>';
		var error = $(".error");

		console.log("todoVal:", todoVal);
		if(todoVal !== ''){
			items += '<li>' + regTrim() + ' <button type="button" id="delBtn">刪除</button></li>';
			result.append(items);
			inputTodo.val('');
			error.remove();
		}else{
			addBtn.after(errorHtml);
		}
	}

	function delItems(that){ //del List
		that.parent("li").remove();
	}

	return {
		getItems: getItems,
		delItems: delItems
	}
}());

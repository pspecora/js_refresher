// Check off specific todos by clicking

$("ul").on("click", "li",(function(){
	$(this).toggleClass("completed");

}));

// Click on X to delete to do 

$("ul").on("click", "span",(function(event){
	// on click, remove the li 
	$(this).parent().fadeOut(500,function(){
		$(this).remove();

	});
	event.stopPropagation();
}));

$("input").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		var deletebox = "<span> <i class='fas fa-trash-alt'></i> </span> ";

		//create new li and add to ul
		$("ul").append("<li>" + deletebox + todoText + "</li>")

	}
})


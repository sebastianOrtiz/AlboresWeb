$('#btnLogeo').click(function() {
	if($('#emailLogeo').val() != "" && $('#passLogeo').val()!= ""){
		alert("redireccionando");
		window.location.href = '../../backend/pages/user.html';
	}
	
});
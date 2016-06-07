$('#btnLogeo').click(function() {
	if($('#emailLogeo').val() != "" && $('#passLogeo').val()!= ""){
		window.location.href = '../../backend/pages/user.html';
	}
	
});
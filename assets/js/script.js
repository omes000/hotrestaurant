$("#submit").on('click', function() {
	e.preventDefault();

	var data = {
		name: $('#name').val().trim(),
		phoneNumber: $('#phoneNumber').val().trim(),
		email: $('email').val().trim(),
		uniqueID: $('uniqueID').val().trim()
	}


	$.ajax({
		type: 'POST',
		data: JSON.stringify(data),
	    contentType: 'application/json',
	    url: '/api/new',						
	    success: function(data) {
	        console.log('success');
	        console.log(JSON.stringify(data));
	    }
    })

})
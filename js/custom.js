$(function () {
	$("#tabs").tabs();

	$('#bookingForm').on('submit', function (event) {
		event.preventDefault(); // Prevent the default form submission

		// Retrieve form data
		var userName = $('#userName').val();
		var userEmail = $('#userEmail').val();
		var serviceSelected = $('#serviceSelect').val();
		var serviceDate = $('#serviceDate').val();
		var specialRequest = $('#specialRequest').val();

		// Store data in local storage
		localStorage.setItem('userName', userName);
		localStorage.setItem('userEmail', userEmail);
		localStorage.setItem('serviceSelected', serviceSelected);
		localStorage.setItem('serviceDate', serviceDate);
		localStorage.setItem('specialRequest', specialRequest);

		// Display the data in an alert
		alert('Name: ' + localStorage.getItem('userName') +
			'\nEmail: ' + localStorage.getItem('userEmail') +
			'\nService: ' + localStorage.getItem('serviceSelected') +
			'\nDate: ' + localStorage.getItem('serviceDate') +
			'\nSpecial Request: ' + localStorage.getItem('specialRequest'));
	});
});
function validateEmail() {
	var emailField = $('#email');
	var emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Simple regex for email validation

	if (!emailPattern.test(emailField.val())) {
		alert('Please enter a valid email address.');
		return false;
	}
	return true;
}






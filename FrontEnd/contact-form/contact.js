/**
 *
 */

function sendMail() {
	const serviceID = 'service_47254dr'; //contact_service
	const templateID = 'template_3adzo5r'; //contact_form

	var params = {
		name: $('#name').val(),
		email: $('#email').val(),
		message: $('#message').val(),
	};

	emailjs
		.send(serviceID, templateID, params)
		.then((res) => {
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
			console.log('msg sent successfully', { res, params });
			alert('Your message sent successfully');
		})
		.catch((err) => console.log(err));
}

									var localstorage = {
										set: function (key, value) {
												window.localStorage.setItem( key, JSON.stringify(value) );
												},
										get: function (key) {
											try {
												return JSON.parse( window.localStorage.getItem(key) );
												} catch (e) {
											return null;
												}
											}
										};
						
									var harvestValue = function(id){
											var x = document.getElementById(id).value;
											return x;
											
										};
								
									var  displayMessage2 = function(){
										alert('PPS Number'+(harvestValue('PPS')) );	
										alert('First Name'+(harvestValue('firstname')) );
										alert('Surname'+( harvestValue('surname')) );
										alert('Birth Surname'+ (harvestValue('myBirthName')) );
										alert('Gender'+ (checkGender()) );
										alert('Number'+(JSON.parse(harvestValue('number')) ));	
																		
										};

									var checkGender = function(){
										if(document.getElementById('male').checked) {
										  return 'male'
										}else if(document.getElementById('female').checked) {
										  return 'female'
										};
										};
									var  displayMessage1 = function(){
										alert('Gender'+ (checkGender()) );
										};
								

									
									
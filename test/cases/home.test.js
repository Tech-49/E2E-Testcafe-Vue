import selectors from '../model/selectors.js';

fixture(`Home Page!`)
  .page('http://localhost:8080');

test('Check view button on home page is clickable or not. ', async tc => {  
	await tc
		.click(selectors.viewButton)
		.click(selectors.goHomeButton);
});
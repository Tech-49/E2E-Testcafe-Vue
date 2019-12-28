import selectors from '../model/selectors.js';

fixture(`Contact Page!`)
  .page('http://localhost:8080');

test('Check the heading is exist on contact us page ', async tc => {  
	  await tc
		  .click(selectors.contactMenu)
		  .expect(selectors.heading.innerText).eql("Contact Us");
});
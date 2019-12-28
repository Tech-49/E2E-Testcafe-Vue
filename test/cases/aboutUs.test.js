import selectors from '../model/selectors.js';

fixture(`About us Page`)
  .page('http://localhost:8080');

test('Check heading is exist on about us page! ', async tc => {  
	  await tc
		  .click(selectors.aboutMenu)
		  .expect(selectors.heading.innerText).eql("About Us")
});
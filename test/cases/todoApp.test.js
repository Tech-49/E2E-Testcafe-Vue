import selectors from '../model/selectors.js';

fixture(`Todo Page!`)
  .page('http://localhost:8080');

test('Check add, edit and delete feature of the todo application ', async tc => {  
	  await tc
		  .click(selectors.todosMenu)
		  .expect(selectors.heading.innerText).eql("ToDo App")
		  .wait(1000) 
		  .typeText(selectors.titleInput,"Check emails", {replace:true})
		  .click(selectors.addButton)
		  .expect(selectors.tablerow.count).eql(3)
		  .click(selectors.editButton)
		  .typeText(selectors.titleInput,"Check emails again!", {replace:true})
		  .click(selectors.updateButton)
		  .wait(2000)
		  .setNativeDialogHandler(() => true)
		  .click(selectors.deleteButton) 
		  .wait(2000)
		  .expect(selectors.tablerow.count).eql(2)
});
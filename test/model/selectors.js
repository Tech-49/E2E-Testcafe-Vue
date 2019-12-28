import { Selector } from 'testcafe';

class Page {
    constructor () {
        this.aboutMenu            = Selector('li').withText('About');;       
        this.heading              = Selector('h1');       
        this.button               = Selector('button');       
        this.counterResult        = Selector('.result');       
        this.contactMenu          = Selector('li').withText('Contact');       
        this.homeMenu             = Selector('li').withText('Home');       
        this.viewButton           = Selector('a').withText('View');       
        this.goHomeButton         = Selector('button').withText('Go Home');
        this.todosMenu             = Selector('li').withText('Todos');       
        this.titleInput             = Selector('#title');
        this.addButton         = Selector('button').withText('Add');
        this.tablerow         = Selector('tbody tr');
        this.editButton         = Selector('button').withText('Edit');
        this.updateButton         = Selector('button').withText('Update');
        this.deleteButton         = Selector('button').withText('Delete');
    }
}

export default new Page();
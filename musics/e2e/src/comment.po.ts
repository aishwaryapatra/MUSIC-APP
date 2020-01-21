import { browser, by, element, ElementFinder, promise } from 'protractor';

export class Comment
{
    navigateToComment()
    {
       return browser.get('/comment');
    }
    getCommentBox():ElementFinder
     {
        return element(by.className('comment'));
     }
     isSubmitButtonPresent()
      {
          return element(by.className('submit'));
      }

      getCommentInputBoxesDefaultValues(): any {
        let inputComment;
        inputComment = this.getCommentBox().getAttribute('value');
        return Promise.all([inputComment]).then( (values) => {
          return values;
        });
    }
}
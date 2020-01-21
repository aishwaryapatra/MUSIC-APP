import { Comment } from './comment.po';

describe('comment', () => {
    let page: Comment;
  
    beforeEach(() => {
      page = new Comment();
    });

    it('should get comment input box', () => {
        page.navigateToComment();
        expect(page.getCommentBox())
        .toBeTruthy(`<input type="text" class="comment" formControlName="comment" placeholder="Make A Comment" name="comment" class="comment"> should exist in login.component.html`);
      });


      it('should get submit button', () => {
        page.navigateToComment();
        expect(page.isSubmitButtonPresent()).toBeTruthy(`<button onclick="submit" class="submit">Post</button> should
          exist in login.component.html`);
      });

      it('default value of comment box should be empty', () => {
        const emptyCommentValues = [''];
        page.navigateToComment();
        expect(page.getCommentInputBoxesDefaultValues()).toEqual(emptyCommentValues, 'Default value of comment box should be empty');
      });
})
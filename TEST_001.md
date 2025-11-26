# TEST 001 — Small bugfix: Post detail loads without error + back link

Summary
-------

The Post detail page is currently erroring when opened.

- Make the individual post page load without throwing an error.
- Ensure there is a visible link (or button) on the individual post page that navigates back to the posts index/list page.

Notes for the candidate
-----------------------

- The bug is minor and the goal is not to redesign the page. 

Acceptance criteria
-------------------

1. Opening an individual post page (PostDetail) does not produce any runtime errors in the browser console.
2. There is a clear link or button on the post detail page that returns the user to the posts index/list page.



# TEST 002 — Pagination for Posts list

Summary
-------

Add pagination controls to the posts list page so users can navigate through posts easily. The posts API supports limit and skip query parameters; for example:

https://dummyjson.com/posts?limit=10&skip=10

Requirements
------------

- Provide UI controls for basic pagination: a previous/back control and a next/forward control.
- The previous/back control must not be shown (or must be disabled) on the first page.
- The next/forward control must not be shown (or must be disabled) on the last page.
- Show the current page number in the UI.
- Allow the user to select how many items are shown per page: 10, 20 or 30.
- Use the API’s limit and skip query params to fetch the current page of posts.

Acceptance criteria (ticket-style)
---------------------------------

1. User can switch between pages using previous/back and next/forward controls.
2. The previous/back control is not active on the first page.
3. The next/forward control is not active on the last page.
4. The current page number is clearly displayed.
5. The user can select 10, 20 or 30 items per page and the list updates accordingly.
6. Each page change fetches posts using the appropriate limit and skip values.

Notes for implementers
----------------------

- The exact pagination UI is entirely up to you - however, don't feel a need to make it pretty.


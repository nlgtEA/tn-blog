---
title: 'Using BrowserRouter in test'
date: '2022-12-26'
---

It's totally ok to use `BrowserRouter` in tests instead of creating `MemoryRouter` with the `createMemoryHistory` function from the `history` package.
Because If `BrowserRouter` works well in testing environment, we should just use it, this will help the tests be closer to what our real app is.

To use it in test, simply use `window.history.pushState` and then render the component normally. See

```jsx
test('It should render successfully', () => {
  window.history.pushState({}, 'Test page', '/');

  render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
});
```

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
  ans:-
  **getElementById()** this method returns a reference to the element which has the specified ID. Because the IDs are unique in a document so this method returns a single element or null if no element is found by the specified ID name.

  **getElementsByClassName()** this method returns a live html collection of all the elements those have the specified class name

  **querySelector()** this method returns only the first element in the document that matches the specified css selectors. It can select id,class,tag name

  **querySelectorAll()** this method returns all the elements in a document that matches the specified group of id,class and tag name in a static NodeList[]( array like object).

2. How do you **create and insert a new element into the DOM**?
  ans:-
  step-1: create a new element
          const newElement = document.createElement('h1');
  step-2: after creating a element set a text for that specified element
          const newText = document.createTextNode('hello this is juhaer ahnaf jihan');
  step-3: add the text into the newly created element in my case h1
          newElement = appendChild(newText);
  step-4: add the newly created element and it's text into the DOM
          const newDiv = document .getElementById("your preferred div id i use the heading-div");
          document.body.insertBefore(newElement , newDiv)

3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?


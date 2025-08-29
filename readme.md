                    <!-- Answer the following questions clearly: -->

    1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    Ans: getElementById: Selects a single element by it's unique ID and only returns a single element. Easy to access Quickly.

    _getElementsByClassName: Selects elements by class name. Returns a HTML Collection that's why easy to work with multiple elements in one time.

    _quarySelector: Select a first Css element. Accessing is complicated. Its a complex selector.Returns first matching element or null.

    _quarySelectorAll: Select any CSS selector. Returns a nodeList of all. It is faster than HTML Collection.



    2.What is Event Bubbling and how does it work?

    Ans: Event bubbling is a mechanism like click on a child element but propagation upward through element from the target up to the DOM root.

    -Three types of event bubbling phase is using in JavaScript and that is-
            *Capturing Phase
            *Target Phase
            *Bubbling Phase


    3.How do you create and insert a new element into the DOM?

    Ans:    const para = document.createElement("p");
            para.innerHTML = "Hello Teacher!.";
            const container = document.getElementById("container");
                                container.appendChild(para);


    4.What is Event Delegation in JavaScript? Why is it useful?

    Ans:    Event Delegation is a strategy where i can attach a single event listener to a parent element, instead of individual listeners to each child element. That one listener exploits event bubbling.


    5.What is the difference between preventDefault() and stopPropagation() methods?

    Ans:    event.preventDefault():   This method prevents the browser’s default action associated with a particular event.

            event.stopPropagation():  This method stops an event from bubbling up (or capturing down) the DOM tree. Once called, parent (or ancestor) elements won’t receive or react to the event.

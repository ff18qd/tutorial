# Brief Introduction to Atomic Design

Atomic Design is a design system and methodology created by Brad Frost. Unlike other design systems that might deal only with the specifics of what a site looks like or what the general tone or attitude might be Atomic Design focuses instead on componentized interfaces. This makes it perfectly suited for the [React way of thinking](https://reactjs.org/docs/thinking-in-react.html), modular UIs, and can help guide you to create more flexible and reusable UI components.

Taking inspiration from chemistry Frost determined that since all things in our physical reality can be broken down into atoms our UI could similarly be broken down into fundamental building blocks that when combined can create more complex UIs.

While there are 5 distinct categories in Atomic Design for this tutorial we'll only be focusing on the first three. **Atoms**, **Molecules**, and **Organisms**.

The last two, **Templates** and **Pages**, are perhaps the easiest to wrap one's head around. A *Template* is a collection of the discrete abstract page elements we've created into a layout and a *Page* is simply a specific instance of a given Template.

We'll be diving deeper into Atoms, Molecules, and Organisms in the following tutorial sections, but if you'd like a more detailed overview check out [Brad Frost's blog post on the topic](http://bradfrost.com/blog/post/atomic-web-design/).

## Setting Up Our Folder Hierarchy

For this project we'll be using a specific folder hierarchy for creating and editing our different React components. When working on the Wobbly App you'll see this hierarchy is already in place, but for the purpose of this exercise we're going to recreate it so we can follow this convention in our example project.

**Steps:**

 - Head into the `/src/workspace` directory of your cloned/forked version of this repo and add a new folder named `/components`.
 - Within that folder create 5 subdirectories named **atoms**, **molecules**, **organisms**, **templates**, and **pages**.

Once your done your workspace should look something like this:

```
├── workspace
|   ├── MyComponent.js
|   └── components
|   	├── atoms
|   	├── molecules
|   	├── organisms
|   	├── templates
|   	└── pages
```

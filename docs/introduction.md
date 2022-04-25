---
slug: /
title: "Introduction"
sidebar_position: 1
---

# Introduction

PiNC is a template language, which inverses the flow of your data. Instead of you needing to provide all data for your template beforehand,
PiNC is asking for new data only when its needed.  <br />
It's a bit like the difference between REST and GraphQL.

PiNC also provides the integrating application (for example the CMS) with all information it needs to render a template. <br />
So in priniple it is possible to write content management systems or other applications, which do not need any kind of configuration files anymore.

## Your first Component

To create your first component, you first have to create a file with the `.pi` extention.

:::info
PiNC files neither need to be in a specific folder structure, nor specify how many components you declare inside of them. In theory, you could write your whole application inside of a single file.
:::

Let's create a button as our first component:

```pi title="Button.pi"
component Button {
    <button class="Button">
        <span class="Button-icon Button-icon--arrowRight">
        <span class="Button-text">Click me!</span>
    </button>
}
```

As you can see, every component needs to start with the `component` keyword, and has to be given an uppercase identifier as a name (in our case `Button`).

The body of your component contains the logic needed to render your template. In our Button component, the template is completely static and cannot be passed any options to change its appearance.

**Let's change that:**

```pi title="Button.pi"
component Button {
    let text = #String(key: "text");
    let icon = #String(key: "icon");

    <button class="Button">
        <span class="Button-icon Button-icon--{| icon |}">
        <span class="Button-text">{text}</span>
    </button>
}
```

We now added two variables to our Button component: `text` and `icon`. <br />
Both have a so called `Tag` assigned as their value, more specifically a String-Tag.

Tags are the way for you to ask the compiler to do something. <br />
In the case of a `#String` the compiler searches for the closest value with the provided key it can find and validates it to be a string value. <br />
The value may either be the render call of the parent component or the implementing application (CMS), if there is no parent component. You can read more about tags [here](Language%20Features/tags).

In our template, we can render variables by wrapping them in curly braces (`{}`) as seen with the `text` variable. <br />
With the `icon`, we use a string template, to append its value to the class attribute.

:::tip
If the name of the let-declaration and the key are the same, you can remove the `key` attribute from the tag. <br />
So these two tags do the same:
```
let text = #String(key: "text");
let text = #String;
```
:::

## Rendering our Button component

In another component we are now able to render our `Button` and change its text and icon value:

```pi title="Header.pi"
component Header {
    <header class="Header">
        <img class="Header-logo" src="/path/to/logo.svg" />

        <div class="Header-actions">
            <Button icon="login" text="Login" />
        </div>
    </header>
}
```

Components are rendered by using it's uppercase identifier as a html tag name. <br />
All uppercase html tags are assumed to be components and are searched for in your application. <br />
If they cannot be found, PiNC fails compiling.

:::info
As you can see, we don't have to import our component anywhere. <br />
PiNC resolves all components automatically by its name, which means that every component needs to have a unique name.
:::

## Using Slots

In the current implementation of our Header, we have to statically add all Buttons for our actions inside the template. <br />
If we assume, that the Buttons are more dynamic and can change based on some criteria, it would make more sense for them to be provided from outside of our Header.

Thats what slots are used for. They are similar to the ones found in Vue or Web-Components, but there are some key differences you have to look out for.

Let's define our slot and render it where our buttons should appear:

```pi title="Header.pi"
component Header {
    let actions = #Slot(name: "actions");

    <header class="Header">
        <img class="Header-logo" src="/path/to/logo.svg" />

        <div class="Header-actions">
            {actions}
        </div>
    </header>
}
```

A `#Slot` is just another tag, which instructs the compiler to look for provided Template-Nodes in the parent component. <br />
In our `App` component, we are now able to provide the button from outside our Header:

```pi title="App.pi"
component App {
    <>
        <Header>
            <Button slot="actions" icon="login" text="Login" />
        </Header>
        <Main />
        <Footer />
    </>
}
```

To put a Template-Node inside a slot, you place it between the opening and closing tag of the component and (optionally) add the `slot` attribute with the same name as the declared `#Slot`. <br />

:::tip
You may also add a `default`-Slot, by not adding a name to the `#Slot`-Tag. The default slots get all nodes passed in, which do not have a slot attribute.
```pi
let default_slot = #Slot;
```
:::

### Restricting our Slot

With the current implementation of our Header, you are able to place everything inside the slot. <br />
Let's add a restriction, so you are only able to place `Button` components inside it:

```pi title="Header.pi"
component Header {
    let actions = #Slot(name: "actions", instanceOf: [Button]);

    // ...
}
```

We now added an `instanceOf` attribute to our `#Slot`, with which we may declare a set of restrictions for this slot. <br />
You are able to allow a set of components by adding them to the instance array. As soon as you do that, all other components and html-tags are automatically disallowed. <br />
If you want to disallow a set of components and allow everything else, you have to prefix the component name with a `!`. <br />

**For example:**

```pi
// allow only Button and Link components:
let allow = #Slot(instanceOf: [Button, Link]);

// allow everything but Button and Link components:
let disallow = #Slot(instanceOf: [!Button, !Link]);
```

With that change, our Header is only able to recieve `Button` components and fails compiling, when you try to put some other component inside it's actions slot.

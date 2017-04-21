# Social News App Tutorial

This repo contains a social news app (similar to [Reddit](https://www.reddit.com/) or [Product Hunt](https://www.producthunt.com/)) that allows users to:

 - Register, log in, and logout
 - Post links and vote on posts 
 - Assign categories and tags to posts
 - Comment on posts and vote on comments
 - Add new categories
 - Search for links users 
 - Different privileges based on account type (ex. standard user vs. admin user)
 - View links ranked by an algorithm (based on number of votes)
 - Receive personalized newsletters
 - Internationalization

I built a simple "social news"-style website in December 2016 using PHP and MySQL ([link to repo](https://github.com/julienlapointe/course-links)). Here is a video demo.
<iframe width="560" height="315" src="https://www.youtube.com/embed/Bhli3L8BpnQ" frameborder="0" allowfullscreen></iframe> 


----------


This time around, I wanted to dive into modern JavaScript frameworks, like [React](https://facebook.github.io/react/) and [Meteor](https://www.meteor.com/). I discovered [Telescope](http://www.telescopeapp.org/), an open-source platform specifically designed for building social news sites and made some customizations. The platform has many GitHub branches and I selected the [Nova Classic branch](https://github.com/VulcanJS/Vulcan/tree/nova-classic), which was built on the following technology stack:

 - React as the front-end framework
 - Meteor as the back-end framework
 - [MongoDB](https://www.mongodb.com/) as the database


----------


## Prerequisite Knowledge

Working with these technologies requires at least intermediate JavaScript skills and some familiarity with ES6 syntax is recommended. If you want to brush up on ES6, I highly recommend [Stephen Grider's ES6 course on Udemy](https://www.udemy.com/javascript-es6-tutorial/learn/v4/overview). He also instructs some of the most popular [React courses on Udemy](https://www.udemy.com/user/sgslo/). By watching his online courses, I built two React + Meteor + MongoDB applications: 

 1. [URL Shortener](https://github.com/julienlapointe/url-shortener-app)
 2. [Imgur API Feed](https://github.com/julienlapointe/imgur-api-app)

This diagram depicts how these technologies integrate in Nova.

![](https://photos-5.dropbox.com/t/2/AAAMU2VN7fQvCHwZJd5WDT6qwY7avkGQOrExPQHYSJx2EQ/12/40717563/png/32x32/3/1492822800/0/2/Picture1.png/EODFih8Y__21BiAHKAc/GE3FO5nH_SxqjfKxXv_8oLVVDujnNBBQNTOoWJk-8bU?dl=0&size=2048x1536&size_mode=3)
Credit: Stephen Grider

Elaborating on that diagram, React is the front-end JavaScript framework that receives data from MeteorJS and renders it to the DOM. This rendering process is more efficient than AJAX because React only re-renders the individual components that have new data to display. The rest of the components remain untouched, which saves resources and reduces loading speed. 

Meteor is a full-stack JavaScript framework, but it is mostly used on the back-end for Nova. Meteor provides real-time data synchronization between the server and the client, as well as a hot reloading for development.

MongoDB is the NoSQL database that stores data as JSON objects. Instead of using “tables” like MySQL, MongoDB uses “collections” and instead of using “records” or “rows”, it uses “documents”. Essentially, NoSQL databases provide more flexibility as a database schema does not need to be pre-defined. 


----------


## Installation

Watch this video by the creator of Nova, [Sacha Greif](https://twitter.com/SachaGreif), or follow the steps below.
<iframe width="560" height="315" src="https://www.youtube.com/embed/awJR4dh5LlE" frameborder="0" allowfullscreen></iframe>

#### Steps:
Install the latest version of Node and NPM.

[Install Meteor](https://www.meteor.com/install):

```sh
curl https://install.meteor.com/ | sh
```

Clone this repository locally:

```sh
git clone https://github.com/julienlapointe/telescope-nova-social-news.git
```

Install the necessary NPM packages:

```sh
npm install
```

Then start the app in Terminal with the following command:

```sh
meteor
```

You'll then be able to access it on [http://localhost:3000](http://localhost:3000) as shown below.

![enter image description here](https://photos-1.dropbox.com/t/2/AABEEW1l5VDSIVEv1qVBC5R0pka5J2birO1XUklnJ0b9Ww/12/40717563/png/32x32/3/1492822800/0/2/Screen%20Shot%202017-04-21%20at%204.12.32%20PM.png/EODFih8Y9f21BiAHKAc/I6jqVQty8ofRPp8sQk5z_vBMjWHOtgBJoffNxdtscIY?dl=0&size=2048x1536&size_mode=3)

*Note: The first account you create (via Log In > Register) will automatically be given admin rights.*


----------


## Building Custom Packages

I started my custom package using the `my-custom-package` folder in `.meteor/packages`. Keep in mind that Nova uses both [NPM modules](https://www.npmjs.com/) and [Meteor packages](https://atmospherejs.com/i/publishing), however it is recommended to extend Nova using the Meteor packages. 

For more information on customizing Nova, refer to specific sections in the [documentation](https://github.com/VulcanJS/Vulcan/tree/nova-classic) or watch the YouTube video playlist below. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLIzovtR9BnvG9fdxdr8LPhXiYV5W_U-fc" frameborder="0" allowfullscreen></iframe>
*Note: You should **never customize Nova's core files directly** (files in `nova-*` packages). Instead, either extend the object you want to customize from your own package, or disable the initial package, clone it, and modify your own copy.*

The packages listed below are commonly used for extending or overriding your app's layout, design, and functionality. But remember, do not modify the  `nova-*`  packages directly. 

| Name | Description |
| --- | --- |
| `nova:base-components` | The default components that make up the Nova front-end. |
| `nova:base-styles` | Default styles (includes Bootstrap).|
| `nova:base-routes` | Default routes.|
| `nova:email-templates` | Email templates.|
| `nova:i18n-en-us` | Contains English language strings.|


Almost all React components in Nova live inside the `nova:base-components` package. There are two main ways of customizing them.

### React Component Customization Method #1: Override

If you only need to modify a single component, you can simply override it with a new one without having to touch the `nova:base-components` package.

For example, if you wanted to use your own `CustomLogo` component you would do:

```js
const CustomLogo = (props) => {
  return (
    <div>/* custom component code */</div>
  )
}
Telescope.components.Logo = CustomLogo;
```

Or, if `Logo` is defined as an ES6 class:

```js
class CustomLogo extends Telescope.components.Logo{
  render() {
    return (
      <div>/* custom component code */</div>
    )
  }
}
Telescope.components.Logo = CustomLogo;
```

*Note: Components are generally defined as functional stateless components, unless they contain extra logic (lifecycle methods, event handlers, etc.) in which case they'll be defined as ES6 classes.*

### React Component Customization Method #2: Clone & Modify

For more in-depth customizations, you can also clone the entire `nova:base-components` package and then make your modification directly there. However, keeping your `components` package up-to-date with future `nova:base-components` updates will be more challenging.

### Other Customizations: Form Fields

Out of the box, Nova has three main collections: `Posts`, `Users`, and `Comments`. Each of them has a pre-set schema, but that schema can also be extended with custom fields.

For example, this is how the `nova:newsletter` package extends the `Posts` schema with a `scheduledAt` property that keeps track of when a post was sent out as part of an email newsletter:

```js
Posts.addField({
  fieldName: 'scheduledAt',
  fieldSchema: {
    type: Date,
    optional: true
  }
});
```

The `collection.addField()` function accepts either a field object or an array of fields. Each field has a `fieldName` property and a `fieldSchema` property.

You can also remove a field by calling `collection.removeField(fieldName)`. For example:

```js
Posts.removeField('scheduledAt');
```

That should get you started! Feel free to [contact me on Twitter](https://twitter.com/JulienLaPointe) if you have any questions. Happy customizing :)

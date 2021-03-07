# AG Tech - Frontity theme

A starter theme for Frontity with support for common Gutenberg WordPress editor blocks. You could use the theme package as a starting point to build your next corporate website or blog.

## Table of contents

<!-- toc -->

- [Quick install](#quick-install)
- [Advanced usage](#advanced-usage)
- [Gutenberg](#gutenberg)
- [Bootstrap](#bootstrap)
- [Credits](#credits)


<!-- tocstop -->

## Quick install

 - Create a Frontity project named `agtech-project` with **AG Tech - Frontity theme**
 
```sh
npx frontity create --theme @aamodtgroup/agtech agtech-project
```
 -  The CLI will run its part and once completed, run the project and have fun! 🎉
```sh
cd agtech-project && npx frontity dev
```

## Advanced usage

```sh
npm i @aamodtgroup/agtech
```

Once installed it should be included in your `frontity.settings.js`.
The theme options can be specified in the `state.theme` property.

```javascript
{
  name: "@aamodtgroup/agtech",
  state: {
    theme: {
      menu: [],
      featured: {
        showOnList: true,
        showOnPost: false
      }
    }
  }
},
```
## Gutenberg

By default, these theme includes all the default styles of Gutenberg blocks, which is taken from  

      wp-includes\css\dist\block-library\style.css
      wp-includes\css\dist\block-library\theme.css

In addition we have included certain theme specific styles to the page and post templates.

In order to add custom styles to your Gutenberg blocks you first need to add the blocks inside a "Group" block and assign a CSS class(es) to it. Thus you could use this CSS class(es) to style the entire block along with all sub blocks inside the group block. 

## Bootstrap

We have included a bare-minimum bootstrap css which combines following Bootstrap css/scss files: functions, variables, mixins, root, [reboot](https://getbootstrap.com/docs/4.0/content/reboot/), type, [grid](https://getbootstrap.com/docs/4.0/layout/grid/), forms and [utilities](https://getbootstrap.com/docs/4.0/utilities/borders/).

This essentially provides a base to common layout/grid and  [responsive breakpoints](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints).

_No bootstrap JS included_

## Credits
- Frontity Team [ [1](https://frontity.org/blog/how-to-create-a-react-theme-in-30-minutes/), [2](https://docs.frontity.org/guides/understanding-mars-theme-1) ]
- [frontity-contact-form-7](https://github.com/imranhsayed/frontity-contact-form-7) package by Imran Sayed
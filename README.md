## About This package
This package allows you to transform the props you get from Inertia before getting them in your Vue Component. It's a good replacement for the old Interia `transformProps` which has been removed.

## How to Install?
`npm install inertiajs-transform-props`

## How to use it
You can add this package to the app's entrepoint file ex `app.ts` or `app.js`, It will be just a replacement for the default `h` function provided by the vue core.

```javascript
import { createApp } from 'vue';
import { h } from 'inertiajs-transform-props';
import { createInertiaApp } from '@inertiajs/inertia-vue3'

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})
```

Then in your page component you can just add the `transform` properity to your props object.
```javascript
props: {
      article: {
          type: Object,
          required: true,
          transform: (originalValue) => { 
              originalValue.isPublished = true;
              return originalValue;
          }
      },
      comment: {
          type: String,
          required: true,
          transform: 'Anything'
      }
  }
```

You can also use it to convert the prop to a typescript model, just by passing the class or construct it inside a function:

```javascript
props: {
      article: {
          type: Object as PropType<Article>,
          required: true,
          transform: Article
      },
      comment: {
          type: String,
          required: true,
          transform: (comment) => new Comment(comment)
      },
      replies: {
          type: Array as PropType<Reply[]>,
          required: true,
          transform: (replies) => replies.map(reply => new Reply(comment))
      },
  }
```

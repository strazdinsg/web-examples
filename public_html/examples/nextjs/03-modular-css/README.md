# Modular CSS

Next.JS allows you to create component-specific CSS classes where the class
names will be made sure to NOT collide. To do that:

1. Create a CSS file. The fine must be named `something.module.css`. You can
   replace the `something` with whatever you want, but the `.module.css` part
   must be constant.
2. Place your styles there. Let's say you have defined CSS class `container`
   there.
3. Inside your component's `.js` file import the CSS and give it a name with the
   following import
   command: `import styles from 'path/to/something.module.css'`.
4. To apply the `container` class to an element inside your container, use the
   `className` attribute for the element in the JSX, add the
   prefix `styles.`: `className={styles.container}`.

See `src/components/Card.js` as an example.

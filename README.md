# e-commerce creado desde 0, usando React Remix Run, un framework hibrido y muy bien optimizado.
El sitio consta de 5 rutas principales: Inicio, Nosotros, Blog, Tienda y el Carrito de compras. En las primeras 4 se muestra texto e imagenes traidas desde una API, la misma fue creada con Strapi y hosteada en RENDER, donde tambien esta almacenada la base de datos PostgreeSQL a la que esta conectada Strapi y en donde se guarda la información que luego se recupera consultando la API. El sitio cuenta con routing dinamico a la hora de visitar cada producto por separado. Y un carrito de compras que se guarda en Local Storage para no perder la información tan rapidamente.

--------------------------------------------------------------------------------------------------------------------------------

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```

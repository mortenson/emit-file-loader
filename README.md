# emit-file-loader

A Webpack loader that emits a file during the loader chain.

This is useful when distributing CSS or template files for others to use.

To use this loader, add it to an existing chain like so:

```
{
  test: /\.scss$/,
  use: [
    { loader: 'css-loader' },
    { loader: 'emit-raw-loader?output=dist/styles/[name].css' },
    { loader: 'sass-loader' }
  ],
}
```

The `output` query parameter uses [name interpolation](https://github.com/webpack/loader-utils#interpolatename)
to determine where the raw content will be saved by the loader.

# Installation

```
npm install --save-dev emit-file-loader
```

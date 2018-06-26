
// module.exports = {
//     entry: ['./src/web_app.js'],
//     output: {
//         filename: './public/bundle.js'
//     },
//     module: {
//         loaders: [
//             {
//                 loader: 'babel-loader',
//                 test: /\.jsx?$/,
//                 exclude: /node_modules/
//             }
//         ]
//     },
//     devtool: 'cheap-source-map' //cho biet loi o dau (neu ko co se bao loi o bundle)
// };

module.exports = {
    // …
    entry: './src/web_app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },
    module: {
      rules: [
        {
          test: /\.js$/i,
          exclude: [/node_modules/],
          use: [{
            loader: 'babel-loader',
            options: { presets: ['latest'] },
          }],
        },
      
        // Loaders for other file types can go here
      ],
    },
    devtool: 'cheap-source-map' //cho biet loi o dau (neu ko co se bao loi o bundle)
    // …
  };
  
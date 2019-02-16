const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // eslint-disable-line prefer-destructuring
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const DartSass = require('dart-sass');
const Fibers = require('fibers');
const config = require('config');

const useEntryWithCssModule = (cssModule) => {
  const cssLoaderOptions = {
    modules: cssModule,
  };

  if (cssModule) {
    cssLoaderOptions.localIdentName = '[name]__[local]--[hash:base64:8]';
  }

  const entry = [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: cssLoaderOptions,
    },
    'postcss-loader',
  ];
  return entry;
};

const webpackConfig = {
  mode: config.get('webpack.mode'),
  entry: path.resolve(__dirname, 'src/App/index.jsx'),
  output: {
    path: path.resolve(__dirname, config.get('webpack.output.path')),
    filename: `${config.get('webpack.output.scripts')}/[name].[hash:8].js`,
    chunkFilename: `${config.get('webpack.output.scripts')}/[name].[chunkhash:8].js`,
    publicPath: config.get('webpack.publicPath'),
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
            options: {
              emitWarning: config.get('webpack.eslintEmitWarning'),
              cache: config.get('webpack.eslintCache'),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [...useEntryWithCssModule(true)],
          },
          {
            use: [...useEntryWithCssModule(false)],
          },
        ],
      },
      {
        test: /\.scss$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              ...useEntryWithCssModule(true),
              {
                loader: 'sass-loader',
                options: {
                  implementation: DartSass, fiber: Fibers,
                },
              },
            ],
          },
          {
            use: [
              ...useEntryWithCssModule(false),
              {
                loader: 'sass-loader',
                options: {
                  implementation: DartSass, fiber: Fibers,
                },
              },
            ],
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash:base64:4].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    (config.get('webpack.mode') === 'production') ? new CleanWebpackPlugin([
      config.get('webpack.output.path'),
    ]) : () => {},
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: `${config.get('webpack.output.styles')}/[name].[chunkhash:8].css`,
      chunkFilename: `${config.get('webpack.output.styles')}/[name].[chunkhash:8].css`,
    }),
    new CaseSensitivePathsPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.BA_MODE ? process.env.BA_MODE : 'disabled',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          minSize: 0,
          name: config.get('webpack.vendorsCodeSplitting') ? (module) => {
            const re = /[\\/]node_modules[\\/](.*?)([\\/]|$)/;
            const packageName = module.context.match(re)[1];
            return `vendors/pkg.${packageName.replace('@', '')}`;
          } : 'venders',
          priority: -10,
        },
      },
    },
    minimizer: [
      (config.get('webpack.uglify')) ? new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: !!config.get('webpack.sourcemap'),
      }) : () => {},
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: [
            'default', {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        },
      }),
    ],
  },
  devtool: config.get('webpack.sourcemap'),
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    publicPath: config.get('webpack.publicPath'),
    open: config.get('webpack.open'),
    overlay: true,
  },
};

module.exports = webpackConfig;

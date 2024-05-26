import { BuildOptions } from "./types/config";
import webpack from 'webpack';
import { buildPulgins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name][contenthash].js",
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(options)
          },
        resolve: buildResolve(),
        devtool: isDev ? 'inline-source-map' : undefined,
        plugins: buildPulgins(options),
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}
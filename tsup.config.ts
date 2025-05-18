import { type Options } from 'tsup';

export default (): Options => {
  const baseConfig: Options = {
    entry: ['src/index.ts'],
    clean: false,
    dts: true,
    external: ['vite'],
  };

  const devConfig: Options = {
    watch: true,
    format: ['esm'],
    sourcemap: true,
    ...baseConfig,
  };

  const prodConfig: Options = {
    minify: true,
    format: ['cjs', 'esm'],
    ...baseConfig,
  };

  return process.env.NODE_ENV === 'development' ? devConfig : prodConfig;
};

module.exports = {
  presets: [
    'next/babel',
    [
      '@babel/preset-react',
      {
        development: process.env.BABEL_ENV === 'development',
        runtime: 'automatic',
        importSource: '@emotion/react',
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '^@/public': './public',
          '^@/(.+)': './\\1',
        },
        cwd: 'packagejson',
        extensions: ['.js', '.jsx', '.d.ts', '.ts', '.tsx'],
        root: ['./src'],
      },
    ],
    '@emotion/babel-plugin',
  ],
};

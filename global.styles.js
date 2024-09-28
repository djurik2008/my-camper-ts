const variablesStyles = '@import "shared/styles/_variables.scss"';
const fontsStyles = '@import "shared/styles/_fonts.scss"';
const colorsStyles = '@import "shared/styles/_colors.scss"';
const mixinsStyles = '@import "shared/styles/_mixins.scss"';
const baseStyles = '@import "shared/styles/_base.scss"';

const styles = [
  variablesStyles,
  fontsStyles,
  colorsStyles,
  mixinsStyles,
  baseStyles,
];

export const globalStylesOptions = styles.reduce((acc, i) => acc + i + ';', '');

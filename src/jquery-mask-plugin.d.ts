import "jquery";
// informando ao typescript sobre a função mask do jquery
declare global {
  interface JQuery {
    mask(maskPattern: string): JQuery;
  }
}

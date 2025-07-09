export { viteFinal } from '../packages/@storybook/astro/src/preset';
export { render, renderToCanvas } from '../packages/@storybook/astro-renderer/src/render';

export function prepareForInline(storyFn: () => any) {
  const element = storyFn();
  if (typeof element === 'string') return element;
  if (element instanceof HTMLElement) return element.outerHTML;
  return '';
}

if (typeof window !== 'undefined') {
  (window as any).STORYBOOK_ENV = 'astro';
}

export const STORYBOOK_ENV = 'astro';

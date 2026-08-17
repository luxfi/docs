/**
 * Registers @hanzo/gui's config with the type system, so the shorthand style
 * props this app is written in — `bg` `p` `px` `mb` `items` `justify` `gap`
 * `rounded` — and the tokens they take resolve to concrete types.
 *
 * Derived from `defaultConfig` rather than from `@hanzo/ui/gui-config`: that
 * module imports @hanzo/gui, whose types read this augmentation, and pointing at
 * it closes a cycle that collapses every style prop to `any`. The one thing
 * gui-config adds and this needs is `fonts.mono`, declared on the type here.
 *
 * Ambient and type-only; nothing is emitted.
 */
import type { createGui } from '@hanzo/gui';
import type { defaultConfig } from '@hanzogui/config/v5';

type Base = ReturnType<typeof createGui<typeof defaultConfig>>;

type Conf = Omit<Base, 'fonts'> & {
  fonts: Base['fonts'] & { mono: Base['fonts']['body'] };
};

/* eslint-disable @typescript-eslint/no-empty-object-type --
   the empty body IS the augmentation: `extends Conf` is what merges the config
   into the interface gui declares, and an interface is the only construct
   module augmentation can merge into. */

declare module '@hanzogui/web' {
  interface GuiCustomConfig extends Conf {}
}

declare module '@hanzogui/core' {
  interface GuiCustomConfig extends Conf {}
}

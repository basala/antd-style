import { ThemeConfig } from 'antd';
import { MappingAlgorithm } from 'antd/es/config-provider/context';
import { AliasToken } from 'antd/es/theme/interface';

import { BrowserPrefers, ThemeAppearance, ThemeMode } from './appearance';

/**
 * @title 主题上下文状态
 */
export interface ThemeContextState {
  /**
   * @title 外观
   */
  appearance: ThemeAppearance;
  /**
   * @title 主题模式
   * @enum ["light", "dark"]
   * @enumNames ["亮色模式", "暗色模式"]
   * @default "light"
   */
  themeMode: ThemeMode;
  /**
   * @title 是否为暗色模式
   */
  isDarkMode: boolean;
  /**
   * @title 浏览器偏好的外观
   */
  browserPrefers: BrowserPrefers;
}

export type AppearanceState = Omit<ThemeContextState, 'themeMode' | 'browserPrefers'>;

export type AntdToken = AliasToken;

/**
 * 一组统一封装好的 antd 标准样式
 */
export interface AntdStylish {
  buttonDefaultHover: string;
}

/**
 * @title 获取 Antd 主题的函数
 * @param appearance - 主题外观
 * @returns Antd 主题配置对象或 undefined
 */
export interface GetAntdTheme {
  (appearance: ThemeAppearance): ThemeConfig | undefined;
}

export type { MappingAlgorithm };

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CustomToken {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CustomStylish {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CustomTheme extends CustomStylish, CustomToken {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FullStylish extends AntdStylish, CustomStylish {}

export interface AntdTheme extends AntdToken {
  stylish: AntdStylish;
}

export interface FullToken extends AntdToken, CustomToken {}

export interface Theme extends FullToken, ThemeContextState {
  stylish: FullStylish;
  /**
   * antd 组件的 prefixCls
   */
  prefixCls: string;
}

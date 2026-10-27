import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "owopxiaoy's Blog",
	subtitle: "学习记录 & 随笔",
	lang: "zh_CN", // 语言代码，例如 'en'、'zh_CN'、'ja' 等
	themeColor: {
		hue: 250, // 主题色默认色相，范围 0 ~ 360。例如：红色 0，蓝绿色 200，青色 250，粉色 345
		fixed: false, // 是否隐藏访客的主题色选择器
	},
	banner: {
		enable: true, // 是否在首页显示横幅图片
		src: "assets/images/banner3.jpg", // 相对 src 目录；以 / 开头则相对 public 目录
		position: "center", // 等同于 object-position，仅支持 'top'、'center'、'bottom'，默认 center
		credit: {
			enable: false, // 是否展示横幅图片的来源署名
			text: "", // 要展示的署名文字
			url: "", // （可选）原图或作者页面链接
		},
	},
	toc: {
		enable: true, // 是否在文章右侧显示目录
		depth: 2, // 目录最多抓取的标题层级，范围 1 ~ 3
	},
	favicon: [
		// 留空数组则使用默认图标
		// {
		//   src: '/favicon/icon.png',    // 图标路径，相对 /public 目录
		//   theme: 'light',              // （可选）light / dark，仅在明暗模式图标不同时配置
		//   sizes: '32x32',              // （可选）图标尺寸，不同尺寸图标才需要配置
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/saicaca/fuwari", // 站内链接不要带上 base 路径，框架会自动拼接
			external: true, // 显示外部链接图标，在新标签打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.jpg", // 相对 src 目录；以 / 开头则相对 public 目录
	name: "owopxiaoy",
	bio: "持续学习，不断向上.",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // 图标编码查询：https://icones.js.org/
			// 如果图标集未内置，需要手动安装
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/owopxiaoy",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：部分样式（例如背景色）会被覆盖，详见 astro.config.mjs
	// 请选择深色主题，当前博客主题只适配深色背景
	theme: "github-dark",
};

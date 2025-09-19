// subsets: ["latin"] 配置的作用是告诉 Next.js 只加载字体的拉丁字符子集，而不是完整的字体文件。

//   原因和好处：

//   1. 性能优化

//   - 减小文件大小：完整的字体文件包含所有字符（拉丁文、西里尔文、希腊文等），可能有几MB
//   - 只加载需要的字符：["latin"] 只包含英文字母、数字和常用符号
//   - 更快加载速度：文件更小，下载更快

//   2. 字符覆盖

//   // 不同的子集选项
//   subsets: ["latin"]           // 基础拉丁字符 A-Z, a-z, 0-9
//   subsets: ["latin-ext"]       // 扩展拉丁字符，包含重音符号
//   subsets: ["cyrillic"]        // 西里尔字母（俄文等）
//   subsets: ["greek"]           // 希腊字母

//   3. 实际影响

//   对于你的项目（英文内容），["latin"] 子集完全够用，包含：
//   - 所有英文字母
//   - 数字 0-9
//   - 常用标点符号
//   - 基础特殊字符

//   4. 如果不指定会怎样

//   - Next.js 会加载字体的所有子集
//   - 文件更大，加载更慢
//   - 对于纯英文网站是不必要的

//   这是 Next.js 字体优化的最佳实践，确保只加载必要的字符集来提升性能。

import { Inter, Lusitana, Noto_Sans_SC } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"], // Noto Sans SC 只支持 latin subset
  weight: ["300", "400", "500", "700"],
});

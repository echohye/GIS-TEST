// 统一代码格式风格  参考 https://prettier.io/docs/en/configuration.html
// 1.设定编辑器默认代码格式化（美化）的插件为 Prettier
// 2.设置 Prettier 插件保存时自动格式化代码，搜索设置项 editor.formatOnSave 启动
module.exports = {
  printWidth: 100, // 每行代码长度（默认80）
  tabWidth: 2, // 每个tab相当于多少个空格（默认2）ab进行缩进（默认false）
  useTabs: false, // 是否使用tab
  semi: true, // 声明结尾使用分号(默认true)
  vueIndentScriptAndStyle: false, // false: 在 Vue 文件中，是否缩进 <script> 和 <style> 标签的内容
  singleQuote: false, // 使用单引号（默认false）
  quoteProps: "as-needed", // 对象属性的引号规则，'as-needed' 表示只在需要的时候使用
  bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）
  trailingComma: "none", // 多行使用拖尾逗号（默认none）
  jsxSingleQuote: false, // 在 JSX 中是否使用单引号
  arrowParens: "always", // 箭头函数参数括号的规则，'always' 表示总是使用括号，avoid 能省略括号的时候就省略
  insertPragma: false, // 是否在文件顶部插入一个特定的注释以标记文件已被格式化
  requirePragma: false, // 是否要求在文件顶部包含一个特定的注释，以标记文件已被格式化
  proseWrap: "never", // 是否在 Markdown 文件中对文本进行换行处理
  htmlWhitespaceSensitivity: "strict", // HTML 文件中空格的敏感度
  endOfLine: "auto", // 换行符的类型，'auto' 表示根据当前环境自动选择
  rangeStart: 0 // 从文件的哪一行开始格式化
};

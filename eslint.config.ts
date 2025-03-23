import globals from 'globals'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  {
    ignores: [
      'node_modules',
      'dist',
      '.gitignore',
      'package.json',
      'package-lock.json',
      'dist-ssr',
      '*.local',
      '.npmrc',
      '.DS_Store',
      'dev-dist',
      'dist_electron',
      '*.d.ts',
      'src/assets/**'
    ]
  },
  /** js推荐配置 */
  eslint.configs.recommended,
  /** vue推荐配置 */
  ...eslintPluginVue.configs['flat/recommended'],
  /** prettier 配置 */
  eslintPluginPrettierRecommended,

  //javascript 规则
  {
    files: ['**/*.{js,mjs,cjs,vue,ts}'],
    rules: {
      // 对象结尾逗号
      'comma-dangle': 'off',

      // 关闭未定义变量
      'no-undef': 'off',

      // 确保 Prettier 的行为不会被 ESLint 覆盖
      quotes: ['error', 'single', { allowTemplateLiterals: true }],

      // 关闭对未定义变量的警告
      'no-undefined': 'off',

      //不使用的变量不报错
      'no-unused-vars': 'off',

      // 禁止使用不规范的空格
      'no-irregular-whitespace': 'off',

      // 函数括号前的空格
      'space-before-function-paren': 0,

      // 箭头函数的空格
      'arrow-spacing': [
        2,
        {
          before: true,
          after: true
        }
      ],

      // 代码块的空格
      'block-spacing': [2, 'always'],

      // 大括号风格
      'brace-style': [
        2,
        '1tbs',
        {
          allowSingleLine: true
        }
      ],

      // 对象属性换行
      'object-property-newline': 'off',

      // JSX 引号风格
      'jsx-quotes': [2, 'prefer-single'],

      // 对象键值对之间的空格
      'key-spacing': [
        2,
        {
          beforeColon: false,
          afterColon: true
        }
      ],

      // 关键字之间的空格
      'keyword-spacing': [
        2,
        {
          before: true,
          after: true
        }
      ],

      // 构造函数首字母大写
      'new-cap': [
        2,
        {
          newIsCap: true,
          capIsNew: false
        }
      ],

      // new 操作符使用时需要括号
      'new-parens': 2,

      // 禁止使用 Array 构造函数
      'no-array-constructor': 2,

      // 禁止调用 caller 和 callee
      'no-caller': 2,

      // 禁止重新分配类名
      'no-class-assign': 2,

      // 禁止条件中的赋值操作
      'no-cond-assign': 2,

      // 禁止 const 重新分配
      'no-const-assign': 2,

      // 正则表达式中的控制字符
      'no-control-regex': 0,

      // 禁止删除变量
      'no-delete-var': 2,

      // 禁止在函数参数中使用重复名称
      'no-dupe-args': 2,

      // 禁止在类中使用重复名称的成员
      'no-dupe-class-members': 2,

      // 禁止在对象字面量中使用重复的键
      'no-dupe-keys': 2,

      // 禁止重复的 case 标签
      'no-duplicate-case': 2,

      // 禁止空的字符类
      'no-empty-character-class': 2,

      // 禁止空的解构模式
      'no-empty-pattern': 2,

      // 禁止使用 eval
      'no-eval': 2,

      // 不允许出现空的代码块
      'no-empty': 2,

      // 禁止不必要的布尔转换
      'no-extra-boolean-cast': 2,

      // 禁止不必要的括号
      'no-extra-parens': [2, 'functions'],

      // 禁止 case 语句落空
      'no-fallthrough': 2,

      // 禁止在数字后面添加小数点
      'no-floating-decimal': 2,

      // 禁止对函数声明重新赋值
      'no-func-assign': 2,

      // 禁止出现歧义多行表达式
      'no-unexpected-multiline': 2,

      // 禁止不需要的转义
      'no-useless-escape': 0,

      // 数组的括号前后的间距
      'array-bracket-spacing': [2, 'never']
    }
  },

  // vue 规则
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        /** typescript项目需要用到这个 */
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        /** 允许在.vue 文件中使用 JSX */
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      'vue/component-definition-name-casing': 'off',
      'vue/singleline-html-element-content-newline': ['off'],
      'vue/no-mutating-props': [
        'error',
        {
          shallowOnly: true
        }
      ],
      // 要求组件名称始终为 “-” 链接的单词
      'vue/multi-word-component-names': 'off',

      // 关闭 index.html 文件报 clear 错误
      'vue/comment-directive': 'off',

      // 关闭对 defineProps 的有效性检查
      'vue/valid-define-props': 'off',

      // 允许在一个文件中定义多个组件
      'vue/one-component-per-file': 'off',

      // 关闭 Prop 类型要求的警告
      'vue/require-prop-types': 'off',
      // 关闭属性顺序要求
      'vue/attributes-order': 'off',

      // 关闭对默认 Prop 的要求
      'vue/require-default-prop': 'off',

      // 关闭连字符命名检验
      'vue/attribute-hyphenation': 'off',

      // 关闭自闭合标签的要求
      'vue/html-self-closing': 'off',

      // 禁止在关闭的括号前有换行
      'vue/html-closing-bracket-newline': 'off',
      // 允许使用 v-html 指令
      'vue/no-v-html': 'off'
    }
  }
]


<GitHubWrapper>
<p align="center">
	<br/>
</p>

<TitleInfos />

<p align="center" class="print-break">
	<GithubInfos />
	<PublishInfos />
</p>
</GitHubWrapper>


## 这是什么？

## 如何使用？

- **离线阅读**：

  - 部署离线站点：文档基于 [Vuepress](https://vuepress.vuejs.org/zh/) 构建，如你希望在企业内部搭建文档站点，请使用如下命令：

    ```bash
    # 克隆获取源码
    $ git clone https://github.com/fenixsoft/awesome-fenix.git && cd awesome-fenix

    # 安装工程依赖
    $ npm install

    # 运行网站，地址默认为http://localhost:8080
    $ npm run dev
    ```

  - 生成PDF文件：工程源码中已带有基于 [vuepress-plugin-export](https://github.com/ulivz/vuepress-plugin-export) 改造（针对本文档定制过）的PDF导出插件，如你希望生成全文 PDF 文件，请在已进行上一步工程克隆和依赖安装的前提下使用如下命令：

    ```bash
    # 编译PDF，结果将输出在网站根目录
    $ npm run export
    ```
    PDF 全文编译时间较长，在笔者机器上约耗时25分钟，在 Travis-CI 上约需要约8分钟，可以从在[这里下载](https://raw.githubusercontent.com/fenixsoft/awesome-fenix/gh-pages/pdf/the-fenix-project.pdf)更新时由 Travis-CI 自动编译的PDF。PDF 中文字体采用阿里巴巴普惠字体渲染，此字体被允许免费使用与传播。

- **二次演绎、传播和发行**：本文档中所有的内容，如引用其他资料，均在文档中明确列出资料来源，一切权利归属原作者。除此以外的所有内容，包括但不限于文字、图片、表格，等等，均属笔者原创，这些原创内容，笔者声明以[知识共享署名 4.0](http://creativecommons.org/licenses/by/4.0/)发行，只要遵循许可协议条款中**署名**、**非商业性使用**、**相同方式共享**的条件，你可以在任何地方、以任何形式、向任何人使用、修改、演绎、传播本文档中任何部分的内容。详细可见本文档的“协议”一节。


## 协议

- 本作品代码部分采用 [Apache 2.0协议](https://www.apache.org/licenses/LICENSE-2.0)进行许可。遵循许可的前提下，你可以自由地对代码进行修改，再发布，可以将代码用作商业用途。但要求你：
  - **署名**：在原有代码和衍生代码中，保留原作者署名及代码来源信息。
  - **保留许可证**：在原有代码和衍生代码中，保留Apache 2.0协议文件。

- 本作品文档部分采用[知识共享署名 4.0 国际许可协议](http://creativecommons.org/licenses/by/4.0/)进行许可。 遵循许可的前提下，你可以自由地共享，包括在任何媒介上以任何形式复制、发行本作品，亦可以自由地演绎、修改、转换或以本作品为基础进行二次创作。但要求你：
  - **署名**：应在使用本文档的全部或部分内容时候，注明原作者及来源信息。
  - **非商业性使用**：不得用于商业出版或其他任何带有商业性质的行为。如需商业使用，请联系作者。
  - **相同方式共享的条件**：在本文档基础上演绎、修改的作品，应当继续以知识共享署名 4.0国际许可协议进行许可。

<div style="padding-top: 20px" class="not-print">
	<h2 id="备案">备案</h2>
	<p>网站备案信息：<a href="http://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">粤ICP备18088957号-1</a></p>
</div>

## todo list
+ cdn
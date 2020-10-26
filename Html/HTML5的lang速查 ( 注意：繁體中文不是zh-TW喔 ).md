# HTML5的lang速查 ( 注意：繁體中文不是zh-TW喔 )

在HTML5的<html>中可增加lang=來標註網頁的語系，讓瀏覽器能更正確的解析與編碼，但從XHTML 1.0以來lang=???就不斷演進中，而在HTML5的時代究竟要怎麼定義？

目前最主要的規範是依照IETF(Internet Engineering Task Force 國際網路工程研究團隊)的RFC 4646 的Tags for Identifying Languages所定義。它的要求為 language-script-region-variant-extension-privateuse 就是 語言 – 字體 – 地區 – 方言 – 特殊附加資訊。

> 以台灣繁體中文標示即為zh-Hant-TW 不是以往認知的zh-tw囉

## 使用範例：

| 12345678 | <!DOCTYPE html> <html  lang="zh-Hant-TW">  <head>    <title>page title</title>  </head>   <body>  </body></html> |
| -------- | ---------------------------------------- |
|          |                                          |

## 速查表：

| zh-Hans    | 簡體中文        |
| ---------- | ----------- |
| zh-Hans-CN | 大陸地區使用的簡體中文 |
| zh-Hans-HK | 香港地區使用的簡體中文 |
| zh-Hans-MO | 澳門使用的簡體中文   |
| zh-Hans-SG | 新加坡使用的簡體中文  |
| zh-Hans-TW | 臺灣使用的簡體中文   |
| zh-Hant    | 繁體中文        |
| zh-Hant-CN | 大陸地區使用的繁體中文 |
| zh-Hant-HK | 香港地區使用的繁體中文 |
| zh-Hant-MO | 澳門使用的繁體中文   |
| zh-Hant-SG | 新加坡使用的繁體中文  |
| zh-Hant-TW | 臺灣使用的繁體中文   |



[原文](https://vector.cool/html5%E7%9A%84lang%E9%80%9F%E6%9F%A5-%E6%B3%A8%E6%84%8F%EF%BC%9A%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87%E4%B8%8D%E6%98%AFzh-tw%E5%96%94/)
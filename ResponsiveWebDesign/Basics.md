# RWD 學習筆記 
### Responsive Web Design

```
 // HTML5 shiv 讓 IE6-8 支援 HTML5 標籤
 // Respond.js 讓 IE6-8 支援 CSS3 Media Query
  <!-- HTML5 shiv and Respond.js support IE8 or Older for HTML5 elements and media queries -->
    <!--[if lt IE 9]>
	   <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
	   <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
   <![endif]-->
```
## Viewport meta tag
<pre><code> 
meta name="viewport" content="width=device-width, initial-scale=1"
// 定義網頁檢視區寬度依照裝置檢視區大小，並網頁第一次打開時縮放比為1:1
</code></pre>

+ width=device-widts   : <pre><code> 檢視區與銀幕相同 </code></pre>
+ initial-scale=1     : <pre><code> 將標題與段落維持在原始大小 </code></pre>

+ 網站圖示
<pre><code> 
link rel="shortcut icon" href="圖示所在目錄/favicon.ico" type="image/x-icon" 
</code></pre>

+ Apple觸碰圖示
<pre><code> 
link rel="apple-touch-icon" href="圖示所在目錄/favicon.ico" type="image/x-icon" 
</code></pre>

+ Search Engine Result Page
<pre><code> 
meta name="description" content="Bootstrap Test"
</code></pre>

+ 網頁作者描述
<pre><code> 
meta name="author" content="MR.Test"
</code></pre>

## Media queries
媒體查詢可用來檢查頁面尺寸、版型相關
+ 瀏覽器高度 & 寬度
+ 媒體裝置的寬度 & 高度
+ 媒體裝置目前處於橫向 || 縱向模式
+ 銀幕解析度

[回應式網頁設計基礎 ](https://developers.google.com/web/fundamentals/design-and-ui/responsive/?hl=zh-tw#responsive-web-design "回應式網頁設計基礎 ")

+ breakpoints : 
<pre><code> 
@media not | only 媒體類型 and (媒體特性)
{
  CSS 程式碼;
}
P {
   font-size: 16px;
}
@media screen and (max-width: 480px) and (max-width: 480px){
P {
      font-size: 14px;
   }
}
</code></pre>
+ min-width   任何超過查詢中指定寬度的瀏覽器都會套用規則。
+ max-width  	任何未超過查詢中指定寬度的瀏覽器都會套用規則。
+ min-height  任何超過查詢中指定高度的瀏覽器都會套用規則。
+ max-height  任何未超過查詢中指定高度的瀏覽器都會套用規則。
+ orientation=portrait  任何高度大於或等於寬度的瀏覽器都會套用規則。
+ orientation=landscape 任何寬度大於高度的瀏覽器都會套用規則。

+ 擴充 : 
[JQuery UI Bootstrap ](https://jquery-ui-bootstrap.github.io/jquery-ui-bootstrap/ "JQuery UI Bootstrap ")

媒體類型
+ all   代表所有裝置 
+ print 印表裝置 
+ screen 電腦銀幕、平板、智慧手機


## CSS box model
+ margin (邊界)
+ padding (留白)
+ border (邊框)
+ border-radius (圓角) <pre><code> border-top-right-radius :30px </code></pre>
+ box-shadow (陰影) <pre><code> box-shadow: 5px 5px 10px 0 rgb(0,0,0,0.5) </code></pre>

## CSS3 box sizing
+ content-box  <pre><code> 預設值，定義內容高度與寬度不包含留白及邊框 </code></pre>
+ border-box  <pre><code> 與上述相反，高度與寬度包含了留白與邊框 </code></pre>
+ padding-box  <pre><code> 包含留白，但不包含邊框 </code></pre>

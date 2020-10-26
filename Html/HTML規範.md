# HTML 規範

原文出處：https://juejin.im/post/599ececb5188252423583c27

### 1. img標籤要寫alt屬性

根據W3C標準，img標籤要寫alt屬性，如果沒有就寫一個空格。但是一般要寫一個有內容的根據圖片要表達的意思，因為alt是在圖片無法加仔的時候，會顯示的文字

```html
<img src="company-logo.svg" alt="ABC Company Logo">
```

更好的寫法：

```html
<img src="chime-logo.svg" alt="ABC Company">
```

不用特別告訴用戶她是一個Logo。

有些人偷懶就直接寫一個空格，但是重要的地方還是放一下，有利於SEO。

### 2. 單標籤不要寫閉合標籤

常見的單標籤有img、link、input、hr、br

```html
<img src="test.jpg"></img><br/>
<input type="email" value=""/>
```

應改成

```html
<img src="test.jpg"><br>
<input type="email" value="">
```

如果用React寫 jsx模板，它就要求每個標籤都要閉合，但是它始終不是原生html.

### 3. 自定義屬性藥用data-開頭

```html
<div count='5'></div>
```

應該要改成

```html
<div data-count='5'></div>
```

### 4. td要在tr裡面，li要在ul/ol裡面

有時候可能會直接在ul裡面寫一個div或者span，以為這樣沒關係。

這樣寫是不成規範的，不能直接在ol裡面塞一個div span，ol是一個列表，他的子元素就應該是display: list-item，突然冒出一個div span 之類的，會讓Browser自行處理，所以在不同的Browser會有不同的表現。

### 5. section裡面要有標題標籤

如果有用section/aside/article/nav 這種標籤，需要在裡面寫一個h1/h2/h3之類的標題標籤，因為這四個標籤可以劃分章節，他們都是獨立的章節，需要有標題，如果UI裡面根本就沒有標題? 那你可以寫一個隱藏的標題標籤，如果出於SEO的項目的話，你不能直接display:none ，而要用一些特殊的處理方式，如

```html
<style>
	.hidden-text{
      position: absolute;
      left: -9999px;
      right: -9999px;
	}
<style>
<section>
    <h1 class="hidden-text">Listing Detail</h1>
</section>
```

### 6. 使用section標籤增強SEO

使用section的好處是可以劃分章節，如下代碼：

```html
<body>
<h1>Listing Detail</h1>
<section>
    <h1>House Infomation</h1>
    <section>
       <h1>LOCATION</h1>
       <p></p>
    </section>
    <section>
        <h1>BUILDING</h1>
        <p></p>
    </section>
</section>
<section>
    <h1>Listing Picture</h1>
</section>
</body>
```

就會被outline成這樣的大綱：

Listing Detail

1. House Infomation
   1. LOCATION
   2. BUILDING
2. Listing Picture

可以使用[html5 outliner](https://link.juejin.im?target=https%3A%2F%2Fgsnedders.html5.org%2Foutliner%2F)進行實驗，可以看到，我們很任性地使用了多個h1標籤，這個在html4裡面是不合法的。

### 7. 行内元素里面不可使用块级元素

例如下面的寫法是不合法的：

```html
<a href="/listing?id=123">
    <div></div>
</a>
```

a標籤是一個行内元素，行内元素裡面套了一個div的標籤，這樣可能會導致a標籤無法正常點擊。再或者是span裡面套了div，這種情况下需要把inline元素設置display為block，如下：

```html
<a href="/listing?id=123" style="display: block">
    <div></div>
</a>
```

### 8. 每個頁面要寫<!DOCType html>

### 9. 要用table布局寫郵件模板

### 10. html要保持簡潔，不要套太多層

### 11. 特殊情況下才在html裡面寫script和style

通常來說，在html裡面直接寫script和style是一種不好的實作，這樣把樣式、結構和邏輯都餐再一起。但有時候為了避免閃屏的問題，可能會直接在相對應的html後面調整script，這種script有點醜陋，但是很實用，但這是沒有辦法的辦法。

### 12. 樣式要寫在head標籤裡面

如果寫在body裡面會導致渲染兩次，特別是寫得越後面的，可能會出現閃頻的情況，如果在上面已經渲染好了，突然又遇到一個style的標籤，會導致她重新渲染，這樣就會閃一下。

### 13. html要加上lang的屬性

### 14. 要在head標籤靠前位置寫上charset的meta標籤

一般charset的meta標籤要寫在head標籤後的第一個標籤

### 15. class的命名使用小寫字母加中底線連接

如下使用-連接，不要使用駝峰式：

```html
<div class="hello-world"></div>
```

### 16. 不要在https的連結裡寫http的圖片

### 17. 特殊符號使用html實體

不要直接把Unicode的特殊符號拷貝到html文檔裡面，要使用他對應的實體Entity。

 `&copy;` : &copy;

### 18. img，src不給值的問題

有時候可能需要用JS動態賦予src資料

```html
<img src="" alt>
```

這樣寫會有問題，如果寫了一個空的src，會導致Browser以為src是當前頁面的連接，然後會在一次請求當前的頁面，但如果隨便給一個不存在的url的話，Browser 也會報404的錯誤

知道的有兩種解法，第一種是把src寫成`about:blank`，另外一種是寫一個1px的透明像素的base64

```html
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
```



### 19. 關於行內元素空格和換行的影響 

有時候換行可能會引入空格

```html
<form>
    <label>Email: </label>
    <input type="email">
</form>
```

如果label的寬度跟form一樣的話，input就會被擠到下一行

### 20. 不推薦使用自定義標籤

### 21. 不推薦使用屬性設置樣式

例

```html
<img src="test.jpg" alt width="400" height="300">
```

這個在IOS的safari上面是不支持的，但table也有一些事可以設置的

```html
<table border='1'></table>
```

但是這種能夠使用CSS去設置的就用CSS去設置，但是`canvas`的寬高要寫在html上，如果用CSS設置的話他會變成拉伸，變得更模糊。

```html
<canvas width='800' height='600' ></canvas>
```

### 22. 使用適合的標籤

1. 標籤不要使用太單調的
2. 如果內容是表格的話就使用table，table有自適應的優點；如果是一個列表的話就使用ol/ul標籤，擴展性比較好
3. 如果輸入框就使用 input ，而不是用 p 標籤，然後設置contenteditable=true，因為這個在IOS的Safari上容易出現問題。
4. 如果是使用粗體字的話就使用 b /strong，而不是自己設置font-weight。
5. 如果是表單就使用form標籤，form 裡面不能再套form
6. 如果是連結就使用 a 標籤，而不是自己寫onclick跳轉
7. 適用html5語意化標籤，如導航使用nav，側邊欄使用aside，頭跟尾使用header的footer，頁面比較獨立的部分可以使用article，如用戶的評論。
8. 如果是按鈕就應該寫一個button 或者是 `<input type='button'>` 而不是寫a標籤設置樣式
9. 標題就應該要用h1/h2/h3
10. 在手機上使用select標籤，會有原生的下拉控制件，手機上原生地select效果體會往往比較好，不果是安卓還是 IOS，而使用`<input type=”tel”>` 在手機上會彈出一個電話號碼的鍵盤，`<input type='number'> <input type='email'>`都會談出相對應的控制件。
11. 如果是分隔線就使用hr，而不是自己寫border-bottom樣式
12. 如果是換行文本就應該使用p，而不是使用br，因為p標籤可以用margin設置行間距，但是如果長文本的話請使用div，因為p標籤裡面不能有p標籤，特別是當數據事後端給的時候。
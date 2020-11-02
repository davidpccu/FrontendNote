# HTML5 Semantic Elements

## header

>用來表示區塊標題的區塊元素，這個區塊可以是一整個頁面、一個段落或一篇文章，可以把它當成一個放置介紹內容的容器。一個頁面中可以有多個header。header是一容器沒錯，但是它裡面裝的東西應該只有區塊的標題或者摘要。不要把header當成div class="header"來使用。另外，header也不能放在footer、address或另一個header裡面。

## nav

>導覽列。裡面裝的東西應該只有主要的navigation links，不要把各種link都丟到nav裡面。舉例來說，footer裡面常常會有一排link，那個就不需要包進<nav>。

## section

>文件中的一個專題群組或區塊。使用section的地方像是文章中的章節，一個標籤式對話框中的各個標籤頁面，或論文的編號部分。一個網站的主業通常可以分成幾個section。

>不要把section當成div用，這大概是最常見的錯誤用法。section內裝的應該是有意義且附帶標題的一段內容。例如這樣：

```
    <section>
        <h1>Heading</h1>
        <p>Bunch of awesome content</p>
    </section>
```

## article

>一個獨立的區塊，同樣必須帶有heading。舉例來說，像這篇文章本身就是一個article，下面每個回應也都是一個單獨的article。

>article跟section的區分是，article有更高的獨立性及完整性。article本身就算脫離了整體也是一個可以獨立存在、具有完整內容的區塊，例如這篇文章；而section雖然也具有獨立表達內容的能力，但是對外層有一定的相依性。

## aside

>aside元素代表從內容分離的部分。這些部分通常被表示為sidebar或interns。他們通常包含side explanations，像是術語定義；也可以放較為鬆散相關的東西，像廣告、的作者的傳記、個人資料信息或相關連結。

```
    <p>My family and I visited The Epcot center this summer.</p>

    <aside>
        <h4>Epcot Center</h4>
        <p>The Epcot Center is a theme park in Disney World, Florida.</p>
    </aside>
```

## footer

>footer代表一個區塊的結尾訊息，這個區塊是離他最近的父 article, aside, nav, section, blockquote, body, details, fieldset, figure, td。footer內通常會包含作者、版權等資訊。footer元素不是父區塊的內容之一，所以並不會出現在outline中。在address元素中的作者資訊也可以放在footer裡面。

```
    <footer>
        <p>Posted by: Hege Refsnes</p>
        <p>Contact information: <a href="mailto:someone@example.com">
        someone@example.com</a>.</p>
    </footer>
```

## figure

>這也是一個常被誤用的標籤，頻率大概僅次於section。簡單來說，figure是一個有完整內容的區塊，他是主要內容的一部分，而且可以任意移動位置而不影響整體內容的表達。

>他跟aside的差別
>> + aside和主內容有關，但不是主內容的一部分 
>> + figure是主內容的一部分，但是他可以任意移動或刪除而不影響主內容的表達。

>通常figure會搭配figcaption服用，他放在第一個或最後一個子元素，像這樣：

```
    <figure>
        <img src="/macaque.jpg" alt="Macaque in the trees">
        <figcaption>A cheeky macaque, Lower Kintaganban River, Borneo. Original by <a href="http://www.flickr.com/photos/rclark/">Richard Clark</a></figcaption>
    </figure>
 ```
# CSS 規範

1. 文件檔名建議用小寫字母 + 中橫線的方式

2. 引入CSS文件的link 可以不用帶type="text/css"，但是不能沒有rel (.js同理)

   ```html
   <link rel="stylesheet" href="test.css">
   ```

3. 屬性順序

   屬性的寫法順序對於Browser 沒有甚麼區別，除了優先及覆蓋之外。

   但是如果順序保持一致的話，掃一眼就可以很快地知道這個選擇器有甚麼類型的屬性影響了他，所以一班要把比較重要的屬性放在前面。

   ```html
   <style>
       .container{
       	/* 
       	display/float/position 
       	這些會直接影響盒模型和位置的應該要放在最前面。
       	*/
       	display: block;
       	position: relative;
       
       	/*
       	盒模型的屬性
       	*/
       	width: 200px;
           height: 300px;
           padding: 10px;
           border: 1px solid #ccc;
           
           /*
           文本屬性
           */
           line-height: 150%;
           font-size: 15px;
           color: #282828;
           
           z-index: 2;
           
           /*
           CSS3的一些屬性應放在最後面
           */
           transition: opacity 2s linear;
       }
   </style>
   ```

4. 不要使用樣式的特點做命名

   ```html
   <style>
       .red-font{
       	color: red;
   	}
       .p1 {
           font-size: 18px;
       }
       .p2 {
           font-size: 16px;
       }
   </style>
   ```

   假設下次UI要改顏色，那寫的 red-font 就沒用了，或者在RWD的page中右邊的排版會再縮小時跑到最下面，那取名right就沒有用了。有些人把整個UI掃過一次大概用了三種字體 18px/16px/14px，於是乎就寫了三個類，p1/p2/p3，不同的字套套不同的類，看起來是很合理的，但在看html的時候 可能會瘋掉，這些p1p2p3加起來可能有二十三十個，不如借助標題標籤

   ```html
   <style>
       .house-info h2 {
           font-size: 18px;
       }
       .house-info h3 {
           font-size: 16px;
       }
   </style>
   ```

   類型的命名應該使用他所表示的邏輯意義，如 signup-success-toast、request-demo、agent-portrait、company-logo。

5. 不要使用hack

   有些人在寫CSS時候，會用hack方法去註釋

   ```css
   .agent-name {
       float: left;
       _margin: 10px;
       //padding: 20px;
   }
   ```

   由於 // 或者開頭是 _ 的屬性 Browser不認識，於是就會被忽略，分號是屬性的終止符，從 // 到分號的內容都會被 Browser 忽略，這種註釋的方式並不被提倡，要把.css文件改成 .less .scss 文件，這樣就可以愉快的註釋。

   還有一些專門˙針對某些Browser hack的方法，像是 * 開頭的屬性就是針對IE6，所以不管怎樣都不要使用hack。

6. 選擇器的性能

   選擇器一般不要超過3個，有些人會寫Scss Sass Less 喜歡套多層

   ```css
   .listings-list{
       ul{
           li{
               .bed-bath{
                   p{
                        color: #505050;
                   }
               }
           }
       }
   }
   ```

   ​

7. ​




/**
 * Current URL (當前頁面URL)
 */
const currentUrl = _ => window.location.href;
// currentUrl() -> 'https://google.com'

/**
 * Get scroll position  (獲取滾動條位置)
 */
const getScrollPos = (el = window) =>
  ({x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
    y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop});
// getScrollPos() -> {x: 0, y: 200}

/**
 * Redirect to URL (跳轉 URL)
 * 使用 window.location.href 或 window.location.replace() 導向到 url 。 
 * 傳遞第二個參數來模擬連結點擊(true – 默認值)或HTTP重定向(false)。
 */
const redirect = (url, asLink = true) =>
  asLink ? window.location.href = url : window.location.replace(url);
// redirect('https://google.com')

/**
 * Scroll to top (回到 top)
 */
const scrollToTop = _ => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };
// scrollToTop()
(function () {
  const navHTML = `
    <header class="border-b bg-white/80 backdrop-blur">
      <div class="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <a href="/ski/" class="font-semibold">中国滑雪赛事积分系统</a>
        <nav class="hidden sm:flex items-center gap-6 text-sm">
          <a class="hover:underline" href="/ski/points">积分系统</a>
          <a class="hover:underline" href="/ski/competitions">赛事管理</a>
          <a class="hover:underline" href="/ski/rules">规则文档</a>
          <a class="hover:underline" href="/ski/login/">登录</a>
          <a class="hover:underline" href="/ski/register/">注册</a>
        </nav>
      </div>
    </header>`;

  const footerHTML = `
    <footer class="border-t mt-16 py-8 text-sm text-gray-600">
      <div class="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© ${new Date().getFullYear()} 中国滑雪赛事积分系统</p>
        <nav class="flex items-center gap-4">
          <a class="hover:underline" href="/ski/terms/">服务条款</a>
          <span class="text-gray-400">|</span>
          <a class="hover:underline" href="/ski/privacy/">隐私政策</a>
        </nav>
      </div>
    </footer>`;

  const navMount = document.getElementById('site-nav');
  if (navMount) navMount.innerHTML = navHTML;

  const mount = document.getElementById('site-footer');
  if (mount) mount.innerHTML = footerHTML;

  // 高亮当前栏目
  const links = document.querySelectorAll('header nav a[href]');
  links.forEach(a => {
    try {
      const u = new URL(a.getAttribute('href'), location.origin);
      if (u.pathname !== '/ski/' && location.pathname.startsWith(u.pathname)) {
        a.classList.add('underline','decoration-2','underline-offset-4');
      }
    } catch(_) {}
  });
})();
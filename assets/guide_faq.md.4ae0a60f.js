import{_ as e,c as s,o,a as r}from"./app.987ed606.js";const m=JSON.parse('{"title":"FAQ","description":"","frontmatter":{},"headers":[{"level":2,"title":"Does KernelSU support my device?","slug":"does-kernelsu-support-my-device","link":"#does-kernelsu-support-my-device","children":[]},{"level":2,"title":"Does KernelSU need to unlock Bootloader?","slug":"does-kernelsu-need-to-unlock-bootloader","link":"#does-kernelsu-need-to-unlock-bootloader","children":[]},{"level":2,"title":"Does KernelSU support modules?","slug":"does-kernelsu-support-modules","link":"#does-kernelsu-support-modules","children":[]},{"level":2,"title":"Does KernelSU support Xposed?","slug":"does-kernelsu-support-xposed","link":"#does-kernelsu-support-xposed","children":[]},{"level":2,"title":"Is KernelSU compatible with Magisk?","slug":"is-kernelsu-compatible-with-magisk","link":"#is-kernelsu-compatible-with-magisk","children":[]},{"level":2,"title":"Will KernelSU substitute Magisk?","slug":"will-kernelsu-substitute-magisk","link":"#will-kernelsu-substitute-magisk","children":[]},{"level":2,"title":"Can KernelSU support non GKI devices?","slug":"can-kernelsu-support-non-gki-devices","link":"#can-kernelsu-support-non-gki-devices","children":[]},{"level":2,"title":"Can KernelSU support old kernel?","slug":"can-kernelsu-support-old-kernel","link":"#can-kernelsu-support-old-kernel","children":[]}],"relativePath":"guide/faq.md"}'),t={name:"guide/faq.md"},n=r('<h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-hidden="true">#</a></h1><h2 id="does-kernelsu-support-my-device" tabindex="-1">Does KernelSU support my device? <a class="header-anchor" href="#does-kernelsu-support-my-device" aria-hidden="true">#</a></h2><p>First, your devices should be able to unlock the bootloader. If it can&#39;t, then it is unsupported.</p><p>Then install KernelSU manager App to your device and open it, if it shows <code>Unsupported</code> then your device is unsupported and won&#39;t be supported in the future.</p><h2 id="does-kernelsu-need-to-unlock-bootloader" tabindex="-1">Does KernelSU need to unlock Bootloader? <a class="header-anchor" href="#does-kernelsu-need-to-unlock-bootloader" aria-hidden="true">#</a></h2><p>Certainly, yes.</p><h2 id="does-kernelsu-support-modules" tabindex="-1">Does KernelSU support modules? <a class="header-anchor" href="#does-kernelsu-support-modules" aria-hidden="true">#</a></h2><p>Yes, But it is in early version, may be buggy. Please waiting it to be stable 😃</p><h2 id="does-kernelsu-support-xposed" tabindex="-1">Does KernelSU support Xposed? <a class="header-anchor" href="#does-kernelsu-support-xposed" aria-hidden="true">#</a></h2><p>Yes, <a href="https://github.com/canyie/Dreamland" target="_blank" rel="noreferrer">Dreamland</a> and <a href="https::/taichi.cool" target="_blank" rel="noreferrer">TaiChi</a> partially works now, And we are trying to make other Xposed Framework work.</p><h2 id="is-kernelsu-compatible-with-magisk" tabindex="-1">Is KernelSU compatible with Magisk? <a class="header-anchor" href="#is-kernelsu-compatible-with-magisk" aria-hidden="true">#</a></h2><p>KernelSU&#39;s module system is conflict with Magisk&#39;s magic mount, if there is any module enabled in KernelSU, then the whole Magisk would not work.</p><p>But if you only use the <code>su</code> of KernelSU, then it will work well with Magisk: KernelSU modify the <code>kernel</code> and Magisk modify the <code>ramdisk</code>, they can work together.</p><h2 id="will-kernelsu-substitute-magisk" tabindex="-1">Will KernelSU substitute Magisk? <a class="header-anchor" href="#will-kernelsu-substitute-magisk" aria-hidden="true">#</a></h2><p>We don&#39;t think so and it&#39;s not our goal. Magisk is good enough for userspace root solution and it will live long. KernelSU&#39;s goal is to provide a kernel interface to users, not substituting Magisk.</p><h2 id="can-kernelsu-support-non-gki-devices" tabindex="-1">Can KernelSU support non GKI devices? <a class="header-anchor" href="#can-kernelsu-support-non-gki-devices" aria-hidden="true">#</a></h2><p>It is possible. But you should download the kernel source and intergrate KernelSU to the source tree and compile the kernel yourself.</p><h2 id="can-kernelsu-support-old-kernel" tabindex="-1">Can KernelSU support old kernel? <a class="header-anchor" href="#can-kernelsu-support-old-kernel" aria-hidden="true">#</a></h2><p>It is possible, but you need to backport it manully and PRs welcome!</p>',19),l=[n];function i(a,d,u,p,h,c){return o(),s("div",null,l)}const g=e(t,[["render",i]]);export{m as __pageData,g as default};

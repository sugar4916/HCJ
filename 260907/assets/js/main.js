/**
 * Project: VISIT BUSAN - 日本人向け釜山旅行ガイド
 * Author: 10年目 ウェブパブリッシャー
 * Description: jQueryを使用したインタラクティブスクリプト
 */

$(document).ready(function () {
  'use strict';

  // 1. スクロール時のヘッダースタイル制御
  const $header = $('#main-header');
  const $scrollTopBtn = $('#scroll-top-btn');

  $(window).on('scroll', function () {
    const scrollPos = $(this).scrollTop();

    if (scrollPos > 50) {
      $header.addClass('scrolled');
    } else {
      $header.removeClass('scrolled');
    }

    if (scrollPos > 300) {
      $scrollTopBtn.addClass('visible');
    } else {
      $scrollTopBtn.removeClass('visible');
    }
  });

  // 2. モバイルナビゲーションの開閉
  const $mobileMenu = $('#mobile-menu');
  const $mobileMenuBtn = $('#mobile-menu-btn');
  const $mobileMenuClose = $('#mobile-menu-close');
  const $mobileNavLinks = $('.mobile-nav-link');

  function openMobileMenu() {
    $mobileMenu.removeClass('hidden translate-x-full').addClass('flex translate-x-0');
    $('body').addClass('overflow-hidden');
  }

  function closeMobileMenu() {
    $mobileMenu.removeClass('translate-x-0').addClass('translate-x-full hidden');
    $('body').removeClass('overflow-hidden');
  }

  $mobileMenuBtn.on('click', openMobileMenu);
  $mobileMenuClose.on('click', closeMobileMenu);
  $mobileNavLinks.on('click', closeMobileMenu);

  // 3. スポットカテゴリフィルタリング
  $('.filter-btn').on('click', function () {
    const filterValue = $(this).attr('data-filter');

    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    if (filterValue === 'all') {
      $('.spot-item').stop(true, true).fadeIn(300);
    } else {
      $('.spot-item').stop(true, true).hide();
      $('.spot-item[data-category*="' + filterValue + '"]').stop(true, true).fadeIn(300);
    }
  });

  // 4. FAQ アコーディオン
  $('.faq-header').on('click', function () {
    const $item = $(this).closest('.faq-item');
    const isActive = $item.hasClass('active');

    // 他の項目を閉じる
    $('.faq-item').removeClass('active');

    // クリックされた項目が非アクティブだった場合のみ開く
    if (!isActive) {
      $item.addClass('active');
    }
  });

  // 5. 韓国語フレーズのクリップボードコピー
  $('.copy-btn').on('click', function () {
    const phraseText = $(this).siblings('.korean-text').text().trim();
    const $btn = $(this);
    const originalText = $btn.attr('data-default-text') || 'コピー';

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(phraseText).then(function () {
        showCopyFeedback($btn, originalText);
      }).catch(function () {
        fallbackCopy(phraseText, $btn, originalText);
      });
    } else {
      fallbackCopy(phraseText, $btn, originalText);
    }
  });

  function fallbackCopy(text, $btn, originalText) {
    const tempInput = $('<input>');
    $('body').append(tempInput);
    tempInput.val(text).select();
    document.execCommand('copy');
    tempInput.remove();
    showCopyFeedback($btn, originalText);
  }

  function showCopyFeedback($btn, originalText) {
    $btn.text('完了!');
    $btn.addClass('bg-emerald-600 text-white border-emerald-600');

    setTimeout(function () {
      $btn.text(originalText);
      $btn.removeClass('bg-emerald-600 text-white border-emerald-600');
    }, 1500);
  }

  // 6. トップへ戻るボタンスムーススクロール
  $scrollTopBtn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  // 7. アンカーリンクのスムーススクロール補正 (固定ヘッダー対応)
  $('a[href^="#"]').not('#scroll-top-btn').on('click', function (e) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      const headerHeight = $header.outerHeight() || 70;
      $('html, body').stop().animate({
        scrollTop: target.offset().top - headerHeight
      }, 500);
    }
  });
});

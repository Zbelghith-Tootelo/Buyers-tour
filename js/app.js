/* ============================================================
   Immocontact — Prototype "Tour de visites"
   Prototype cliquable, données mockées, pas de logique métier réelle.
   ============================================================ */

/* ---------------- Icons ---------------- */

const ICONS = {
  inbox: `<path d="M3 8l9 6 9-6M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  send: `<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  hourglass: `<path d="M6 2h12M6 22h12M6 2v5a6 6 0 0012 0V2M6 22v-5a6 6 0 0112-0v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  tour: `<path d="M3 10.5L12 3l9 7.5M5 9.5V21h14V9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M12 3l9 7.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="18.5" cy="6" r="3.2" fill="#F59E0B" stroke="white" stroke-width="1"/>`,
  home: `<path d="M3 10.5L12 3l9 7.5V21H3V10.5z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  doc: `<path d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/><path d="M9 12h6M9 16h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,
  calendar: `<rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,
  map: `<path d="M9 3L3 5v16l6-2 6 2 6-2V3l-6 2-6-2z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/><path d="M9 3v16M15 5v16" stroke="currentColor" stroke-width="1.6"/>`,
  gear: `<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M19.4 15a1.7 1.7 0 00.3 1.9l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.9-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.6 1.7 1.7 0 00-1.9.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.9 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.9l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.9.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.9-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.9V9c.2.6.7 1 1.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  info: `<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M12 11v5.5M12 8v.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
  search: `<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.7" fill="none"/><path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>`,
  plus: `<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  chevronRight: `<path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  chevronDown: `<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  chevronUp: `<path d="M18 15l-6-6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  pencil: `<path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  trash: `<path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0l-1 14a2 2 0 01-2 2H7a2 2 0 01-2-2L4 6h16z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  x: `<path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
  check: `<path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  checkCircle: `<path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  drag: `<circle cx="9" cy="6" r="1.3" fill="currentColor"/><circle cx="15" cy="6" r="1.3" fill="currentColor"/><circle cx="9" cy="12" r="1.3" fill="currentColor"/><circle cx="15" cy="12" r="1.3" fill="currentColor"/><circle cx="9" cy="18" r="1.3" fill="currentColor"/><circle cx="15" cy="18" r="1.3" fill="currentColor"/>`,
  pause: `<rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/><rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/>`,
  car: `<path d="M5 17h14M5 17a2 2 0 104 0M15 17a2 2 0 104 0M3 17l1.5-5.5A2 2 0 016.4 10h11.2a2 2 0 011.9 1.5L21 17M6 10l1-4h10l1 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  warning: `<path d="M12 9v4M12 17h.01M10.3 3.9L2.6 18a1.6 1.6 0 001.4 2.4h16a1.6 1.6 0 001.4-2.4L13.7 3.9a1.6 1.6 0 00-2.8 0z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  mapPinOutline: `<path d="M12 22s7-7.4 7-12.5A7 7 0 105 9.5C5 14.6 12 22 12 22z" stroke="currentColor" stroke-width="1.6" fill="none"/><circle cx="12" cy="9.5" r="2.3" stroke="currentColor" stroke-width="1.6" fill="none"/>`,
  arrowLeft: `<path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  logout: `<path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  cart: `<circle cx="9" cy="20" r="1.4" fill="currentColor"/><circle cx="18" cy="20" r="1.4" fill="currentColor"/><path d="M2 3h2l2.6 12.6a2 2 0 002 1.6h8.9a2 2 0 002-1.6L21 7H6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  flag: `<path d="M6 3v18M6 4h11l-2.5 4L17 12H6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
};
const icon = (name, cls = '') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none">${ICONS[name] || ''}</svg>`;

/* Tour card glyph: multi-house icon with a fused status badge (provided design asset). */
const TOUR_ICON_HOUSES = `<path d="M14.0661 23.9069C13.7741 24.1079 13.4601 24.1575 13.1076 24.141C13.1048 25.5925 13.1186 27.0138 13.0993 28.4598C13.0855 29.231 12.4272 29.8783 11.656 29.8921C10.8848 29.9058 10.1108 29.8976 9.33686 29.8948C9.08897 29.8948 8.92371 29.7158 8.92371 29.4514C8.92096 28.7986 8.92371 28.1458 8.92096 27.493C8.92096 27.0634 8.92096 26.6309 8.92096 26.2012C8.9182 25.7578 8.64001 25.4741 8.19105 25.4686C7.76964 25.4631 7.34822 25.4631 6.92681 25.4686C6.48887 25.4741 6.20792 25.7605 6.20792 26.1985C6.20517 27.2644 6.20517 28.3276 6.20517 29.3935C6.20517 29.7488 6.05643 29.8976 5.69837 29.8976C4.99876 29.8976 4.29916 29.8976 3.59955 29.8976C2.67685 29.8948 2.02131 29.2503 2.0158 28.3248C2.0103 26.9311 2.01305 25.5347 2.01305 24.141C0.735032 24.2622 -0.00864168 22.8244 0.905802 21.8962C2.79528 20.0067 4.68477 18.1172 6.57701 16.2305C6.69544 16.1066 6.83316 16.0046 6.98465 15.922C7.42534 15.7017 8.11118 15.7705 8.52984 16.2002C9.59026 17.2882 10.6727 18.3541 11.7469 19.4283C12.5705 20.2546 13.3885 21.0864 14.2258 21.9017C14.7767 22.4388 14.7244 23.4689 14.0661 23.9069Z" stroke="#213163"/><path d="M14.0661 8.60688C13.7741 8.80795 13.4601 8.85753 13.1076 8.841C13.1048 10.2925 13.1186 11.7138 13.0993 13.1598C13.0855 13.931 12.4272 14.5783 11.656 14.5921C10.8848 14.6059 10.1108 14.5976 9.33686 14.5948C9.08897 14.5948 8.92371 14.4158 8.92371 14.1514C8.92096 13.4986 8.92371 12.8458 8.92096 12.193C8.92096 11.7634 8.92096 11.3309 8.92096 10.9013C8.9182 10.4578 8.64001 10.1741 8.19105 10.1686C7.76964 10.1631 7.34822 10.1631 6.92681 10.1686C6.48887 10.1741 6.20792 10.4606 6.20792 10.8985C6.20517 11.9644 6.20517 13.0276 6.20517 14.0935C6.20517 14.4489 6.05643 14.5976 5.69837 14.5976C4.99876 14.5976 4.29916 14.5976 3.59955 14.5976C2.67685 14.5948 2.02131 13.9503 2.0158 13.0249C2.0103 11.6312 2.01305 10.2347 2.01305 8.841C0.735032 8.96219 -0.00864168 7.52442 0.905802 6.59621C2.79528 4.70673 4.68477 2.81724 6.57701 0.930514C6.69544 0.806568 6.83316 0.704658 6.98465 0.622027C7.42534 0.401679 8.11118 0.470538 8.52984 0.900216C9.59026 1.98818 10.6727 3.05412 11.7469 4.12831C12.5705 4.95462 13.3885 5.78643 14.2258 6.60172C14.7767 7.13882 14.7244 8.16894 14.0661 8.60688Z" stroke="#213163"/><path d="M29.9661 8.60688C29.6741 8.80795 29.3601 8.85753 29.0076 8.841C29.0048 10.2925 29.0186 11.7138 28.9993 13.1598C28.9855 13.931 28.3272 14.5783 27.556 14.5921C26.7848 14.6059 26.0108 14.5976 25.2369 14.5948C24.989 14.5948 24.8237 14.4158 24.8237 14.1514C24.8209 13.4986 24.8237 12.8458 24.8209 12.193C24.8209 11.7634 24.8209 11.3309 24.8209 10.9013C24.8182 10.4578 24.54 10.1741 24.091 10.1686C23.6696 10.1631 23.2482 10.1631 22.8268 10.1686C22.3889 10.1741 22.1079 10.4606 22.1079 10.8985C22.1052 11.9644 22.1052 13.0276 22.1052 14.0935C22.1052 14.4489 21.9564 14.5976 21.5984 14.5976C20.8988 14.5976 20.1992 14.5976 19.4995 14.5976C18.5768 14.5948 17.9213 13.9503 17.9158 13.0249C17.9103 11.6312 17.913 10.2347 17.913 8.841C16.635 8.96219 15.8914 7.52442 16.8058 6.59621C18.6953 4.70673 20.5848 2.81724 22.477 0.930514C22.5954 0.806568 22.7332 0.704658 22.8846 0.622027C23.3253 0.401679 24.0112 0.470538 24.4298 0.900216C25.4903 1.98818 26.5727 3.05412 27.6469 4.12831C28.4705 4.95462 29.2885 5.78643 30.1258 6.60172C30.6767 7.13882 30.6244 8.16894 29.9661 8.60688Z" stroke="#213163"/>`;
const TOUR_BADGE_WARNING = `<path d="M23.4528 30.4998C25.3226 30.4998 27.1158 29.757 28.4379 28.4349C29.7601 27.1128 30.5028 25.3196 30.5028 23.4498C30.5028 21.58 29.7601 19.7868 28.4379 18.4647C27.1158 17.1426 25.3226 16.3998 23.4528 16.3998C21.5831 16.3998 19.7899 17.1426 18.4677 18.4647C17.1456 19.7868 16.4028 21.58 16.4028 23.4498C16.4028 25.3196 17.1456 27.1128 18.4677 28.4349C19.7899 29.757 21.5831 30.4998 23.4528 30.4998ZM21.079 20.952C21.2965 20.3379 21.8804 19.9248 22.533 19.9248H24.1386C25.0997 19.9248 25.8763 20.7042 25.8763 21.6625C25.8763 22.2849 25.543 22.8605 25.0033 23.1717L24.1138 23.6811C24.1083 24.0391 23.8136 24.3311 23.4528 24.3311C23.0866 24.3311 22.7919 24.0364 22.7919 23.6701V23.2983C22.7919 23.0615 22.9186 22.844 23.1251 22.7255L24.3451 22.026C24.4745 21.9517 24.5544 21.814 24.5544 21.6653C24.5544 21.434 24.3671 21.2494 24.1386 21.2494H22.533C22.4394 21.2494 22.3568 21.3073 22.3265 21.3954L22.3155 21.4284C22.1943 21.7727 21.8143 21.9517 21.4728 21.8305C21.1313 21.7093 20.9495 21.3293 21.0707 20.9878L21.0817 20.9548L21.079 20.952ZM22.5716 26.0936C22.5716 25.8598 22.6644 25.6357 22.8297 25.4704C22.995 25.3052 23.2191 25.2123 23.4528 25.2123C23.6866 25.2123 23.9107 25.3052 24.076 25.4704C24.2412 25.6357 24.3341 25.8598 24.3341 26.0936C24.3341 26.3273 24.2412 26.5514 24.076 26.7167C23.9107 26.882 23.6866 26.9748 23.4528 26.9748C23.2191 26.9748 22.995 26.882 22.8297 26.7167C22.6644 26.5514 22.5716 26.3273 22.5716 26.0936Z" fill="#FFC90E"/>`;
const TOUR_BADGE_CONFIRMED = `<path d="M23.4528 30.4998C25.3226 30.4998 27.1158 29.757 28.4379 28.4349C29.7601 27.1128 30.5028 25.3196 30.5028 23.4498C30.5028 21.58 29.7601 19.7868 28.4379 18.4647C27.1158 17.1426 25.3226 16.3998 23.4528 16.3998C21.5831 16.3998 19.7899 17.1426 18.4677 18.4647C17.1456 19.7868 16.4028 21.58 16.4028 23.4498C16.4028 25.3196 17.1456 27.1128 18.4677 28.4349C19.7899 29.757 21.5831 30.4998 23.4528 30.4998Z" fill="#28A745"/><path d="M20.4 23.6L22.6 25.8L26.6 21.3" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
const tourIconSvg = (status) => `<svg class="tour-card-glyph" viewBox="0 0 31 31" fill="none">${TOUR_ICON_HOUSES}${status === 'confirmed' ? TOUR_BADGE_CONFIRMED : TOUR_BADGE_WARNING}</svg>`;

/* Stop card glyph for confirmed visits: single house with a fused green-check badge (provided design asset). */
const STOP_ICON_CONFIRMED_SVG = `<svg class="stop-glyph-confirmed" viewBox="0 0 31 25" fill="none">
  <path d="M22.8946 13.8827C22.4127 14.2146 21.8943 14.2965 21.3123 14.2692C21.3078 16.6654 21.3305 19.0115 21.2987 21.3986C21.276 22.6717 20.1893 23.7402 18.9162 23.7629C17.6431 23.7856 16.3654 23.772 15.0878 23.7675C14.6786 23.7675 14.4058 23.4719 14.4058 23.0354C14.4012 21.9578 14.4058 20.8802 14.4012 19.8027C14.4012 19.0934 14.4012 18.3795 14.4012 17.6702C14.3967 16.9382 13.9374 16.4698 13.1963 16.4608C12.5007 16.4517 11.805 16.4517 11.1093 16.4608C10.3864 16.4698 9.92262 16.9427 9.92262 17.6657C9.91807 19.4253 9.91807 21.1803 9.91807 22.9399C9.91807 23.5265 9.67255 23.772 9.08146 23.772C7.92658 23.772 6.77169 23.772 5.6168 23.772C4.09363 23.7675 3.01149 22.7035 3.0024 21.1758C2.9933 18.8751 2.99785 16.5699 2.99785 14.2692C0.888136 14.4693 -0.339499 12.0958 1.17004 10.5636C4.28914 7.44446 7.40824 4.32535 10.5319 1.2108C10.7274 1.00619 10.9547 0.837962 11.2048 0.701558C11.9323 0.337814 13.0645 0.451484 13.7556 1.16078C15.5061 2.95677 17.293 4.71638 19.0662 6.48963C20.4257 7.85367 21.7761 9.2268 23.1583 10.5727C24.0677 11.4593 23.9813 13.1598 22.8946 13.8827Z" stroke="#1A2740"/>
  <path d="M24.4223 23.7756C26.0342 23.7756 27.58 23.1353 28.7198 21.9955C29.8596 20.8558 30.4999 19.3099 30.4999 17.698C30.4999 16.0862 29.8596 14.5403 28.7198 13.4005C27.58 12.2608 26.0342 11.6205 24.4223 11.6205C22.8104 11.6205 21.2646 12.2608 20.1248 13.4005C18.985 14.5403 18.3447 16.0862 18.3447 17.698C18.3447 19.3099 18.985 20.8558 20.1248 21.9955C21.2646 23.1353 22.8104 23.7756 24.4223 23.7756ZM27.105 16.5822L24.0662 19.621C23.843 19.8442 23.4822 19.8442 23.2614 19.621L21.742 18.1016C21.5188 17.8785 21.5188 17.5176 21.742 17.2968C21.9652 17.076 22.326 17.0737 22.5468 17.2968L23.6626 18.4126L26.2978 15.7751C26.521 15.5519 26.8818 15.5519 27.1026 15.7751C27.3234 15.9982 27.3258 16.3591 27.1026 16.5799L27.105 16.5822Z" fill="#4CBB17"/>
</svg>`;

/* Stop card glyph for visits pending confirmation: single house with a fused warning badge (provided design asset). */
const STOP_ICON_PENDING_SVG = `<svg class="stop-glyph-pending" viewBox="0 0 31 26" fill="none">
  <path d="M22.8969 13.884C22.4148 14.216 21.8965 14.2978 21.3144 14.2706C21.3099 16.667 21.3326 19.0133 21.3008 21.4006C21.278 22.6739 20.1912 23.7425 18.918 23.7652C17.6448 23.788 16.367 23.7743 15.0892 23.7698C14.68 23.7698 14.4071 23.4742 14.4071 23.0377C14.4026 21.96 14.4071 20.8823 14.4026 19.8046C14.4026 19.0952 14.4026 18.3813 14.4026 17.6719C14.398 16.9398 13.9388 16.4714 13.1976 16.4623C12.5018 16.4532 11.8061 16.4532 11.1104 16.4623C10.3874 16.4714 9.92355 16.9443 9.92355 17.6674C9.91901 19.4271 9.91901 21.1824 9.91901 22.9422C9.91901 23.5288 9.67346 23.7743 9.08231 23.7743C7.92731 23.7743 6.77231 23.7743 5.61731 23.7743C4.09398 23.7698 3.01174 22.7057 3.00264 21.1778C2.99355 18.8769 2.9981 16.5715 2.9981 14.2706C0.888174 14.4706 -0.339583 12.097 1.1701 10.5646C4.28952 7.44515 7.40893 4.32573 10.5329 1.21087C10.7284 1.00624 10.9558 0.837995 11.2059 0.701578C11.9334 0.337798 13.0657 0.451479 13.7569 1.16085C15.5076 2.95701 17.2946 4.7168 19.0681 6.49022C20.4277 7.8544 21.7782 9.22767 23.1606 10.5737C24.07 11.4604 23.9836 13.161 22.8969 13.884Z" stroke="#1A2740"/>
  <path d="M24.4249 25.4789C26.0369 25.4789 27.5829 24.8385 28.7228 23.6986C29.8627 22.5587 30.5031 21.0127 30.5031 19.4007C30.5031 17.7887 29.8627 16.2427 28.7228 15.1028C27.5829 13.9629 26.0369 13.3225 24.4249 13.3225C22.8128 13.3225 21.2668 13.9629 20.1269 15.1028C18.9871 16.2427 18.3467 17.7887 18.3467 19.4007C18.3467 21.0127 18.9871 22.5587 20.1269 23.6986C21.2668 24.8385 22.8128 25.4789 24.4249 25.4789ZM22.3782 17.2472C22.5658 16.7177 23.0691 16.3616 23.6319 16.3616H25.0161C25.8447 16.3616 26.5142 17.0335 26.5142 17.8598C26.5142 18.3964 26.227 18.8926 25.7616 19.1609L24.9947 19.6001C24.9899 19.9088 24.7359 20.1605 24.4249 20.1605C24.1091 20.1605 23.855 19.9064 23.855 19.5906V19.2701C23.855 19.0659 23.9643 18.8784 24.1423 18.7763L25.1941 18.1732C25.3057 18.1091 25.3746 17.9904 25.3746 17.8622C25.3746 17.6627 25.2131 17.5036 25.0161 17.5036H23.6319C23.5511 17.5036 23.4799 17.5535 23.4538 17.6295L23.4443 17.658C23.3398 17.9548 23.0122 18.1091 22.7178 18.0046C22.4233 17.9001 22.2666 17.5725 22.3711 17.2781L22.3806 17.2496L22.3782 17.2472ZM23.6651 21.68C23.6651 21.4785 23.7451 21.2853 23.8876 21.1428C24.0301 21.0003 24.2234 20.9202 24.4249 20.9202C24.6264 20.9202 24.8196 21.0003 24.9621 21.1428C25.1046 21.2853 25.1846 21.4785 25.1846 21.68C25.1846 21.8815 25.1046 22.0748 24.9621 22.2173C24.8196 22.3597 24.6264 22.4398 24.4249 22.4398C24.2234 22.4398 24.0301 22.3597 23.8876 22.2173C23.7451 22.0748 23.6651 21.8815 23.6651 21.68Z" fill="#FFC90E"/>
</svg>`;

/* ---------------- Helpers ---------------- */

function hashStr(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}
function uid() { return 'id' + Math.random().toString(36).slice(2, 10); }
function esc(str) { return (str || '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

function minutesToLabel(mins) {
  let h = Math.floor(mins / 60) % 24;
  let m = mins % 60;
  return `${String(h).padStart(2, '0')}h${String(m).padStart(2, '0')}`;
}
function timeToMinutes(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}
const TIME_OPTIONS = (() => {
  const out = [];
  for (let h = 7; h <= 20; h++) {
    for (let m of [0, 15, 30, 45]) {
      out.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
    }
  }
  return out;
})();

const MONTHS_FR = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
function formatDateLong(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return `${d.getDate()} ${MONTHS_FR[d.getMonth()]} ${d.getFullYear()}`;
}
function formatDateGroup(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return `${d.getDate()} ${MONTHS_FR[d.getMonth()][0].toUpperCase()}${MONTHS_FR[d.getMonth()].slice(1)} ${d.getFullYear()}`;
}
function todayPlus(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

/* ---------------- Mock data ---------------- */

const THUMB_IMAGES = ['assets/house1.png', 'assets/house2.png', 'assets/house3.png', 'assets/house4.png'];
function thumbFor(mls, address) {
  const idx = MLS_POOL.findIndex(p => p.mls === mls);
  return THUMB_IMAGES[(idx >= 0 ? idx : hashStr(address || '')) % THUMB_IMAGES.length];
}

const BUYERS = [
  { id: 'b1', prenom: 'François', nom: 'Morin', email: 'f.morin@email.com', tel: '(514) 111-2233' },
  { id: 'b2', prenom: 'Julien', nom: 'Lefevre', email: 'j.lefevre@email.com', tel: '(514) 222-3344' },
  { id: 'b3', prenom: 'Sophie', nom: 'Dubois', email: 's.dubois@email.com', tel: '(438) 333-4455' },
  { id: 'b4', prenom: 'Antoine', nom: 'Martin', email: 'a.martin@email.com', tel: '(450) 444-5566' },
  { id: 'b5', prenom: 'Claire', nom: 'Bernard', email: 'c.bernard@email.com', tel: '(514) 555-6677' },
  { id: 'b6', prenom: 'Marc', nom: 'Tremblay', email: 'm.tremblay@email.com', tel: '(514) 666-7788' },
  { id: 'b7', prenom: 'Isabelle', nom: 'Roy', email: 'i.roy@email.com', tel: '(438) 777-8899' },
];

const COURTIERS_INSCRIPTEURS = ['Marie-Ève Gagnon', 'Patrick Simard', 'Nathalie Côté', 'Éric Bouchard', 'Sylvie Paquette'];

const MLS_POOL = [
  { mls: '18234567', address: '500 Rue D\'Iberville, Montréal, QC H2H 2S6' },
  { mls: '18234599', address: '515 Boul. Lacombe, Repentigny, QC J6A 1E5' },
  { mls: '18234612', address: '214 Rue des Oranges, Montréal, QC H2H 2S6' },
  { mls: '18234671', address: '500 Rue d\'Avaugour, Boucherville, QC J4B 5E7' },
  { mls: '18234733', address: '123 Avenue des Étoiles, Montréal, QC H3C 1A2' },
  { mls: '18234845', address: '456 Boulevard de la Liberté, Québec, QC G1V 2M2' },
  { mls: '18234902', address: '789 Chemin du Bonheur, Gatineau, QC J8X 3G5' },
  { mls: '18235011', address: '567 Boulevard des Oranges, Lévis, QC G6V 4T4' },
  { mls: '18235078', address: '567 Boulevard des Citrons, Boucherville, QC J4B 7K1' },
  { mls: '18235144', address: '567 Boulevard des Oliviers, Longueuil, QC J4K 2M9' },
  { mls: '18235201', address: '567 Boulevard des Jardins, Lévis, QC G6V 5R3' },
  { mls: '18235356', address: '32 Rue Principale, Saint-Lambert, QC J4R 1H4' },
  { mls: '18235410', address: '88 Rue des Érables, Longueuil, QC J4K 3C7' },
];
function courtierFor(mls) { return COURTIERS_INSCRIPTEURS[hashStr(mls) % COURTIERS_INSCRIPTEURS.length]; }
function travelFor(a, b) { return 8 + (hashStr(a + '|' + b) % 13); }

// Properties already selected in MLS Matrix and sent to the "Cart" of this app
let mlsCart = [
  { mls: '18234671', address: '500 Rue d\'Avaugour, Boucherville, QC J4B 5E7' },
  { mls: '18234733', address: '123 Avenue des Étoiles, Montréal, QC H3C 1A2' },
  { mls: '18234845', address: '456 Boulevard de la Liberté, Québec, QC G1V 2M2' },
  { mls: '18234902', address: '789 Chemin du Bonheur, Gatineau, QC J8X 3G5' },
];

function makeStop(address, mls, opts = {}) {
  return {
    id: uid(),
    type: 'property',
    address,
    mls,
    courtier: courtierFor(mls),
    status: opts.status || 'pending',
    duration: opts.duration || 30,
    locked: opts.status === 'confirmed',
    lockedStart: opts.lockedStart || null,
  };
}
function makePause(duration = 30) {
  return { id: uid(), type: 'pause', duration };
}

function seedTours() {
  return [
    {
      id: 't1', buyerId: 'b1', date: '2026-07-10', time: '15:00', sentAt: Date.now() - 100000,
      stops: [
        makeStop('500 Rue D\'Iberville, Montréal, QC H2H 2S6', '18234567', { status: 'confirmed', lockedStart: '15:00' }),
        makePause(30),
        makeStop('515 Boul. Lacombe, Repentigny, QC J6A 1E5', '18234599', { status: 'confirmed', lockedStart: '16:00' }),
        makeStop('214 Rue des Oranges, Montréal, QC H2H 2S6', '18234612', { status: 'pending' }),
      ],
    },
    {
      id: 't2', buyerId: 'b2', date: '2026-07-10', time: '14:30', sentAt: Date.now() - 90000,
      stops: [
        makeStop('500 Rue d\'Avaugour, Boucherville, QC J4B 5E7', '18234671', { status: 'confirmed', lockedStart: '14:30' }),
        makeStop('123 Avenue des Étoiles, Montréal, QC H3C 1A2', '18234733', { status: 'pending' }),
        makeStop('456 Boulevard de la Liberté, Québec, QC G1V 2M2', '18234845', { status: 'confirmed', lockedStart: '16:00' }),
      ],
    },
    {
      id: 't3', buyerId: 'b1', date: '2026-07-12', time: '15:00', sentAt: Date.now() - 80000,
      stops: [
        makeStop('789 Chemin du Bonheur, Gatineau, QC J8X 3G5', '18234902', { status: 'confirmed', lockedStart: '15:00' }),
        makeStop('567 Boulevard des Oranges, Lévis, QC G6V 4T4', '18235011', { status: 'pending' }),
        makeStop('567 Boulevard des Citrons, Boucherville, QC J4B 7K1', '18235078', { status: 'pending' }),
        makeStop('567 Boulevard des Oliviers, Longueuil, QC J4K 2M9', '18235144', { status: 'confirmed', lockedStart: '17:00' }),
      ],
    },
    {
      id: 't4', buyerId: 'b3', date: '2026-07-12', time: '16:00', sentAt: Date.now() - 70000,
      stops: [
        makeStop('567 Boulevard des Jardins, Lévis, QC G6V 5R3', '18235201', { status: 'confirmed', lockedStart: '16:00' }),
        makeStop('32 Rue Principale, Saint-Lambert, QC J4R 1H4', '18235356', { status: 'pending' }),
      ],
    },
    {
      id: 't5', buyerId: 'b4', date: '2026-07-13', time: '13:45', sentAt: Date.now() - 60000,
      stops: [
        makeStop('88 Rue des Érables, Longueuil, QC J4K 3C7', '18235410', { status: 'confirmed', lockedStart: '13:45' }),
        makeStop('500 Rue D\'Iberville, Montréal, QC H2H 2S6', '18234567', { status: 'pending' }),
        makePause(15),
        makeStop('515 Boul. Lacombe, Repentigny, QC J6A 1E5', '18234599', { status: 'pending' }),
        makeStop('214 Rue des Oranges, Montréal, QC H2H 2S6', '18234612', { status: 'confirmed', lockedStart: '16:30' }),
      ],
    },
    {
      id: 't6', buyerId: 'b5', date: '2026-07-13', time: '17:15', sentAt: Date.now() - 50000,
      stops: [
        makeStop('500 Rue d\'Avaugour, Boucherville, QC J4B 5E7', '18234671', { status: 'pending' }),
        makeStop('123 Avenue des Étoiles, Montréal, QC H3C 1A2', '18234733', { status: 'confirmed', lockedStart: '18:00' }),
      ],
    },
  ];
}

/* ---------------- State ---------------- */

const state = {
  screen: 'list',           // list | contact | buyerForm | builder
  listTab: 'upcoming',      // upcoming | past
  listSearch: '',
  tours: seedTours(),
  buyers: BUYERS.slice(),
  draft: null,              // tour being created/edited
  editingTourId: null,      // if editing an existing tour from the list
  contactSearch: '',
  contactSelectedBuyer: null,
  showBuyerForm: false,
  buyerFormErrors: {},
  modal: null,              // { type, ...payload }
  destModalTab: 'nom',
  destModalSearch: '',
  dragStopId: null,
  dirty: false,             // unsaved edits on a tour that was already sent
};

// The tours list holds both sent tours (sentAt set) and saved drafts (sentAt null).
// The save/update flow only applies to tours whose requests were already sent.
function currentTour() {
  return state.editingTourId ? state.tours.find(t => t.id === state.editingTourId) : null;
}

function markDirtyIfSent() {
  const t = currentTour();
  if (t && t.sentAt) state.dirty = true;
}

function saveDraftToTour(notify) {
  const t = state.tours.find(x => x.id === state.editingTourId);
  if (!t) return;
  t.buyerId = state.draft.buyer.id;
  t.date = state.draft.date;
  t.time = state.draft.time;
  t.stops = state.draft.stops;
  state.dirty = false;
  render();
  showToast(
    notify ? 'Modifications enregistrées et mise à jour envoyée aux courtiers concernés.' : 'Modifications enregistrées.',
    'success'
  );
}

function newDraft(buyer) {
  return { buyer, date: todayPlus(3), time: '14:00', stops: [] };
}

/* ---------------- Schedule computation ---------------- */

function computeSchedule(draft) {
  let cursor = timeToMinutes(draft.time);
  const rows = [];
  for (let i = 0; i < draft.stops.length; i++) {
    const stop = draft.stops[i];
    const prev = draft.stops[i - 1];
    let travelBefore = null;
    if (prev) {
      const prevAddr = prev.type === 'pause' ? 'pause-' + prev.id : prev.address;
      const curAddr = stop.type === 'pause' ? 'pause-' + stop.id : stop.address;
      travelBefore = travelFor(prevAddr, curAddr);
      cursor += travelBefore;
    }
    let conflict = null;
    let start;
    if (stop.type === 'pause') {
      start = cursor;
      cursor += stop.duration;
    } else {
      if (stop.locked && stop.lockedStart) {
        const lockedMin = timeToMinutes(stop.lockedStart);
        if (cursor > lockedMin) {
          conflict = {
            arrival: cursor,
            confirmed: lockedMin,
            diff: cursor - lockedMin,
            afterPause: prev && prev.type === 'pause',
            travelBefore,
          };
        }
        start = lockedMin;
        cursor = lockedMin + stop.duration;
      } else {
        start = cursor;
        cursor += stop.duration;
      }
    }
    rows.push({ stop, start, travelBefore, conflict });
  }
  return rows;
}

/* ---------------- Rendering ---------------- */

const NAV_ITEMS = [
  { id: 'inbox', label: 'Boîte de réception', icon: 'inbox', img: 'assets/menu/inbox.svg', badge: 7 },
  { id: 'sendmsg', label: 'Envoi de message', icon: 'send', img: 'assets/menu/send.svg' },
  { id: 'waiting', label: 'Attente de réponse', icon: 'hourglass', img: 'assets/menu/wait.svg', badge: 3 },
  { id: 'tours', label: 'Tour de visites', icon: 'tour', img: 'assets/menu/tour.svg' },
  { id: 'properties', label: 'Mes propriétés', icon: 'home', img: 'assets/menu/properties.svg' },
  { id: 'reports', label: 'Rapports', icon: 'doc', img: 'assets/menu/reports.svg' },
  { id: 'calendar', label: 'Calendrier', icon: 'calendar', img: 'assets/menu/calendar.svg' },
  { id: 'map', label: 'Carte', icon: 'map', img: 'assets/menu/map.svg' },
  { id: 'settings', label: 'Paramètres', icon: 'gear', img: 'assets/menu/settings.svg' },
  { id: 'help', label: 'Aide', icon: 'info', img: 'assets/menu/help.svg' },
];

function renderSidebarNav() {
  const el = document.getElementById('sidebar-nav');
  el.innerHTML = NAV_ITEMS.map(item => {
    const active = item.id === 'tours';
    // Active "Tour de visites" uses the dedicated white glyph from the Figma sidebar.
    const iconSrc = active ? 'assets/menu/tour-white.svg' : item.img;
    return `
    <a href="#" class="nav-item ${active ? 'active' : ''}" data-nav="${item.id}">
      <span class="nav-icon"><img src="${iconSrc}" alt=""></span>
      ${esc(item.label)}
      ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ''}
    </a>`;
  }).join('');
}

function setTopbarTitle(title) {
  document.getElementById('topbar-title').textContent = title;
  const mobileTitle = document.getElementById('mobile-nav-title');
  if (mobileTitle) mobileTitle.textContent = title;
}

function render() {
  const main = document.getElementById('main-content');
  if (state.screen === 'list') { setTopbarTitle('Tour de visites'); main.innerHTML = renderListScreen(); }
  else if (state.screen === 'contact') { setTopbarTitle('Créer un tour de visites'); main.innerHTML = renderContactScreen(); }
  else if (state.screen === 'builder') { setTopbarTitle('Créer un tour de visites'); main.innerHTML = renderBuilderScreen(); }
  else if (state.screen === 'menu') { setTopbarTitle('Menu'); main.innerHTML = renderMenuScreen(); }
  document.body.dataset.screen = state.screen;
  renderModal();
  bindEvents();
}

/* ----- Screen: mobile menu grid ----- */

function renderMenuScreen() {
  return `
    <div class="menu-grid">
      ${NAV_ITEMS.map(item => `
        <a href="#" class="menu-card ${item.id === 'tours' ? 'is-current' : ''}" data-nav="${item.id}">
          ${item.id === 'tours' ? '<span class="menu-card-clip"><span class="menu-ribbon">Nouveau</span></span>' : ''}
          ${item.badge ? `<span class="nav-badge menu-card-badge">${item.badge}</span>` : ''}
          <span class="menu-card-icon"><img src="${item.img}" alt=""></span>
          <span class="menu-card-label">${esc(item.label)}</span>
        </a>
      `).join('')}
    </div>
  `;
}

/* ----- Screen: list ----- */

function renderListScreen() {
  const q = state.listSearch.trim().toLowerCase();
  let tours = state.tours.filter(t => (state.listTab === 'upcoming' ? !t.completed : t.completed));
  if (q) {
    tours = tours.filter(t => {
      const b = state.buyers.find(b => b.id === t.buyerId);
      return b && `${b.prenom} ${b.nom}`.toLowerCase().includes(q);
    });
  }
  tours = tours.slice().sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));

  const groups = {};
  tours.forEach(t => { (groups[t.date] = groups[t.date] || []).push(t); });

  let listHtml = '';
  if (tours.length === 0) {
    listHtml = `
      <div class="empty-state">
        <p>${q ? 'Aucun tour ne correspond à votre recherche.' : (state.listTab === 'upcoming' ? 'Aucun tour de visites à venir.' : 'Aucun tour de visites passé.')}</p>
        <p class="empty-sub">${q ? 'Essayez un autre nom.' : 'Créez votre premier tour pour commencer.'}</p>
      </div>`;
  } else {
    listHtml = Object.keys(groups).sort().map(date => {
      const rows = groups[date].map(t => {
        const b = state.buyers.find(b => b.id === t.buyerId);
        const propCount = t.stops.filter(s => s.type === 'property').length;
        const allConfirmed = t.stops.filter(s => s.type === 'property').every(s => s.status === 'confirmed');
        return `
          <div class="tour-card" data-open-tour="${t.id}">
            <div class="tour-card-icon">
              ${tourIconSvg(allConfirmed ? 'confirmed' : 'pending')}
            </div>
            <div class="tour-card-body">
              <p class="tour-card-name">${esc(b ? `${b.prenom} ${b.nom}` : 'Acheteur')}${t.sentAt ? '' : ' <span class="draft-chip">Non envoyé</span>'}</p>
              <p class="tour-card-meta">Le tour commence à <strong>${t.time.replace(':', 'h')}</strong></p>
            </div>
            <div class="tour-card-count">${propCount}</div>
            <div class="tour-card-chevron"><img src="assets/badge-chevron.svg" alt="" width="9" height="15"></div>
          </div>`;
      }).join('');
      return `<div class="date-group-label">${formatDateGroup(date)}</div>${rows}`;
    }).join('');
  }

  return `
    <div class="tabs-toggle">
      <button class="${state.listTab === 'upcoming' ? 'active' : ''}" data-tab="upcoming">À venir</button>
      <button class="${state.listTab === 'past' ? 'active' : ''}" data-tab="past">Passé</button>
    </div>
    <div class="search-bar">
      <input type="text" class="input" id="list-search" placeholder="Chercher un contact..." value="${esc(state.listSearch)}">
      ${icon('search')}
    </div>
    ${listHtml}
    <div class="create-btn-wrap">
      <button class="btn btn-primary btn-block" id="btn-create-tour">${icon('plus')} Créer un tour de visites</button>
    </div>
  `;
}

/* ----- Screen: contact ----- */

function renderContactScreen() {
  const q = state.contactSearch.trim().toLowerCase();
  const results = q ? state.buyers.filter(b => `${b.prenom} ${b.nom}`.toLowerCase().includes(q)) : [];

  const selected = state.contactSelectedBuyer;

  let searchBlock;
  if (selected) {
    searchBlock = `
      <div class="field">
        <label class="field-label">Ajouter un contact :</label>
        <div class="buyer-chip">
          <input class="input" value="${esc(selected.prenom + ' ' + selected.nom)}" readonly>
          <div class="input-actions">
            <button class="select-icon-btn help" id="btn-edit-selected-buyer" title="Modifier">${icon('pencil')}</button>
            <button class="select-icon-btn remove" id="btn-remove-selected-buyer" title="Retirer">${icon('x')}</button>
          </div>
        </div>
      </div>`;
  } else {
    searchBlock = `
      <div class="field">
        <label class="field-label">Ajouter un contact :</label>
        <div class="search-bar" style="margin-bottom:10px;">
          <input type="text" class="input" id="contact-search" placeholder="Chercher un acheteur..." value="${esc(state.contactSearch)}">
          ${icon('search')}
        </div>
        ${results.length ? `<div class="panel" style="padding:6px 10px;">${results.map(b => `
          <div class="result-row" data-select-buyer="${b.id}">
            <div class="result-address">${esc(b.prenom + ' ' + b.nom)}</div>
            <div class="tour-card-chevron">${icon('chevronRight')}</div>
          </div>`).join('')}</div>` : ''}
      </div>
      <div class="link-row" id="btn-toggle-buyer-form">
        <span>Créer un nouvel acheteur</span>
        ${icon('chevronRight')}
      </div>`;
  }

  const formBlock = state.showBuyerForm ? renderBuyerForm() : '';

  const canSave = selected || (state.showBuyerForm && buyerFormValid());

  return `
    <div class="contact-pane">
      ${searchBlock}
      ${formBlock}
      <div class="form-actions" style="margin-top:${state.showBuyerForm || selected ? '4px' : '0'};">
        <button class="btn btn-primary" id="btn-save-contact" ${canSave ? '' : 'disabled'}>Sauvegarder</button>
        <button class="btn btn-outline" id="btn-cancel-contact">Annuler</button>
      </div>
    </div>
  `;
}

function buyerFormValid() {
  const f = state.buyerFormDraft || {};
  return !!(f.prenom && f.prenom.trim() && f.nom && f.nom.trim() && f.emails && f.emails.some(e => e.trim()));
}

function renderBuyerForm() {
  const f = state.buyerFormDraft || { prenom: '', nom: '', emails: [''], tels: [''] };
  const saved = !!state.contactSelectedBuyer && state.showBuyerForm === 'saved';
  return `
    <div class="panel" style="padding:16px;margin:0 0 20px;background:var(--neutre-surface);border-style:dashed;">
      <div class="panel-header" id="toggle-buyer-form-panel">
        <h3>Ajouter un acheteur</h3>
        ${saved ? `<span class="status-check">${icon('check')}</span>` : icon('chevronUp')}
      </div>
      <div style="height:14px;"></div>
      <div class="field-row">
        <div class="field">
          <label class="field-label">Prénom :</label>
          <input class="input" id="bf-prenom" value="${esc(f.prenom)}" placeholder="Prénom">
        </div>
        <div class="field">
          <label class="field-label">Nom :</label>
          <input class="input" id="bf-nom" value="${esc(f.nom)}" placeholder="Nom">
        </div>
      </div>
      <div class="field">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <label class="field-label" style="margin-bottom:0;">Courriel(s)</label>
          <div style="display:flex;gap:6px;">
            <button class="select-icon-btn add" id="bf-add-email" title="Ajouter un courriel">${icon('plus')}</button>
            <button class="select-icon-btn help" title="Courriel principal pour l'envoi des confirmations">?</button>
          </div>
        </div>
        ${f.emails.map((val, i) => `
          <div class="input-group">
            <input class="input" data-email-idx="${i}" value="${esc(val)}" placeholder="courriel@exemple.com">
            ${f.emails.length > 1 ? `<button class="select-icon-btn remove" data-remove-email="${i}">${icon('x')}</button>` : ''}
          </div>`).join('')}
      </div>
      <div class="field" style="margin-bottom:4px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <label class="field-label" style="margin-bottom:0;">Téléphone(s)</label>
          <div style="display:flex;gap:6px;">
            <button class="select-icon-btn add" id="bf-add-tel" title="Ajouter un téléphone">${icon('plus')}</button>
            <button class="select-icon-btn help" title="Format: (514) 000-0000">?</button>
          </div>
        </div>
        ${f.tels.map((val, i) => `
          <div class="input-group">
            <input class="input" data-tel-idx="${i}" value="${esc(val)}" placeholder="(514) 000-0000">
            <select class="input select" style="width:130px;flex:none;" data-tel-type-idx="${i}">
              <option ${val.type === 'Cellulaire' ? 'selected' : ''}>Non défini</option>
              <option>Cellulaire</option>
              <option>Maison</option>
              <option>Travail</option>
            </select>
            ${f.tels.length > 1 ? `<button class="select-icon-btn remove" data-remove-tel="${i}">${icon('x')}</button>` : ''}
          </div>`).join('')}
      </div>
    </div>
  `;
}

/* ----- Screen: builder ----- */

function renderBuilderScreen() {
  const draft = state.draft;
  const buyer = draft.buyer;
  const rows = computeSchedule(draft);
  const propertyCount = draft.stops.filter(s => s.type === 'property').length;

  const stopsHtml = draft.stops.length === 0 ? `
    <div class="empty-state" style="padding:36px 20px;">
      <p>Aucune destination ajoutée pour l'instant.</p>
      <p class="empty-sub">Utilisez « Ajouter une destination » pour composer le tour.</p>
    </div>
  ` : rows.map(({ stop, start, travelBefore, conflict }, i) => {
    let travelHtml = '';
    if (travelBefore !== null && !conflict) {
      const nextIsPause = stop.type === 'pause';
      const label = nextIsPause ? `Trajet estimé : ${travelBefore} min avant la pause` : `Trajet estimé : ${travelBefore} min`;
      travelHtml = `
        <div class="travel-chip">${icon('car')} <span class="banner-text">${label}</span>
          <span class="banner-edit"><button class="banner-edit-btn" data-edit-stop="${stop.id}">${icon('pencil')}</button></span>
        </div>`;
    }
    let conflictHtml = '';
    if (conflict) {
      const text = conflict.afterPause
        ? `<strong>Attention :</strong> trajet estimé ${conflict.travelBefore} min, dépasse le temps de pause disponible.`
        : `<strong>Attention :</strong> arrivée prévue à ${minutesToLabel(conflict.arrival)}, après l'heure confirmée de ${minutesToLabel(conflict.confirmed)}.`;
      conflictHtml = `
        <div class="alert-banner warning">${icon('warning')} <span class="banner-text">${text}</span>
          <span class="banner-edit"><button class="banner-edit-btn" data-edit-stop="${stop.id}">${icon('pencil')}</button></span>
        </div>`;
    }

    let card;
    if (stop.type === 'pause') {
      card = `
        <div class="stop-card" draggable="true" data-stop-id="${stop.id}">
          <span class="drag-handle">${icon('drag')}</span>
          <div class="stop-icon pause">${icon('pause')}</div>
          <div class="stop-body">
            <p class="stop-address">Pause : Durée ${stop.duration} minutes</p>
            <p class="stop-meta">Débute vers ${minutesToLabel(start)}</p>
          </div>
          <div class="stop-actions">
            <button class="btn-icon" data-edit-pause="${stop.id}">${icon('pencil')}</button>
            <button class="btn-icon danger" data-remove-stop="${stop.id}">${icon('trash')}</button>
          </div>
        </div>`;
    } else {
      const statusHtml = stop.status === 'confirmed'
        ? `<span class="status-ok">Confirmée</span>`
        : `<span class="status-pending">À confirmer avec le courtier inscripteur</span>`;
      card = `
        <div class="stop-card" draggable="true" data-stop-id="${stop.id}">
          <span class="drag-handle">${icon('drag')}</span>
          <div class="stop-icon">
            ${stop.status === 'confirmed' ? STOP_ICON_CONFIRMED_SVG : STOP_ICON_PENDING_SVG}
          </div>
          <div class="stop-body">
            <p class="stop-address">${esc(stop.address)}</p>
            <p class="stop-meta">Heure de visite : ${minutesToLabel(start)} – ${minutesToLabel(start + stop.duration)} <span class="dot">•</span> ${statusHtml}</p>
          </div>
          <div class="stop-actions">
            <button class="btn-icon" data-edit-stop="${stop.id}">${icon('pencil')}</button>
            <button class="btn-icon danger" data-remove-stop="${stop.id}">${icon('trash')}</button>
          </div>
        </div>`;
    }
    return travelHtml + card + conflictHtml;
  }).join('');

  return `
    <div class="field">
      <label class="field-label">Nom de l'acheteur</label>
      <div class="readonly-chip" id="btn-change-buyer">
        ${esc(buyer.prenom + ' ' + buyer.nom)}
        ${icon('chevronRight')}
      </div>
    </div>
    <div class="field-row">
      <div class="field">
        <label class="field-label">Date</label>
        <div class="input-with-icon">
          <input type="date" class="input" id="builder-date" value="${draft.date}">
        </div>
      </div>
      <div class="field">
        <label class="field-label">Heure</label>
        <select class="input select" id="builder-time">
          ${TIME_OPTIONS.map(t => `<option value="${t}" ${t === draft.time ? 'selected' : ''}>${t.replace(':', 'h')}</option>`).join('')}
        </select>
      </div>
    </div>

    <p class="section-label" style="margin-top:8px;">Tour :</p>
    <div class="action-row">
      <button class="btn btn-outline" id="btn-add-destination">${icon('plus')} Ajouter une destination</button>
      <button class="btn btn-outline" id="btn-optimize" ${draft.stops.filter(s=>s.type==='property').length < 2 ? 'disabled' : ''}>Optimiser le tour</button>
      <button class="btn btn-outline" id="btn-show-map" ${draft.stops.length === 0 ? 'disabled' : ''}>Afficher sur la carte</button>
    </div>

    <div>${stopsHtml}</div>


    <div class="footer-actions">${renderFooterActions(propertyCount)}</div>
  `;
}

function renderFooterActions(propertyCount) {
  const tour = currentTour();
  const isSent = !!(tour && tour.sentAt);

  if (isSent && state.dirty) {
    return `
      <button class="btn btn-primary" id="btn-save-update">Enregistrer et envoyer une mise à jour</button>
      <button class="btn btn-outline" id="btn-save-only">Enregistrer</button>
      <button class="btn btn-danger-outline" id="btn-delete-tour">Supprimer ce tour et annuler les demandes de visites</button>
    `;
  }
  if (isSent) {
    return `
      <button class="btn btn-primary" id="btn-share-buyer">Partager avec l'acheteur</button>
      <button class="btn btn-danger-outline" id="btn-delete-tour">Supprimer ce tour et annuler les demandes de visites</button>
    `;
  }
  // New tour or saved draft (not sent yet)
  return `
    <button class="btn btn-primary" id="btn-send-tour" ${propertyCount === 0 ? 'disabled' : ''}>
      Envoyer les demandes de visites
    </button>
    <button class="btn btn-outline" id="btn-save-draft" ${propertyCount === 0 ? 'disabled' : ''}>Enregistrer</button>
    <button class="btn btn-danger-outline" id="btn-delete-tour">Supprimer</button>
  `;
}

/* ---------------- Modal rendering ---------------- */

function renderModal() {
  const root = document.getElementById('modal-root');
  if (!state.modal) { root.innerHTML = ''; return; }

  if (state.modal.type === 'destination') { root.innerHTML = renderDestinationModal(); return; }
  if (state.modal.type === 'confirmSend') { root.innerHTML = renderConfirmSendModal(); return; }
  if (state.modal.type === 'confirmDeleteTour') {
    const t = currentTour();
    const wasSent = !!(t && t.sentAt);
    const body = wasSent
      ? 'Cette action supprimera définitivement ce tour et annulera les demandes de visites déjà envoyées aux courtiers inscripteurs. Cette action est irréversible.'
      : 'Cette action supprimera définitivement ce tour de visites. Cette action est irréversible.';
    root.innerHTML = renderConfirmModal('Supprimer le tour', body, 'btn-confirm-delete-tour');
    return;
  }
  if (state.modal.type === 'editBuyer') { root.innerHTML = renderEditBuyerModal(); return; }
  if (state.modal.type === 'map') { root.innerHTML = renderMapModal(); return; }
  if (state.modal.type === 'editStop') { root.innerHTML = renderEditStopModal(); return; }
  root.innerHTML = '';
}

function renderEditBuyerModal() {
  const f = state.editBuyerDraft;
  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal modal-sm">
        <div class="modal-head"><h2>Modifier l'acheteur</h2><button class="modal-close" id="modal-close">${icon('x')}</button></div>
        <div class="modal-body">
          <div class="field">
            <label class="field-label">Prénom :</label>
            <input class="input" id="eb-prenom" value="${esc(f.prenom)}" placeholder="Prénom">
          </div>
          <div class="field">
            <label class="field-label">Nom :</label>
            <input class="input" id="eb-nom" value="${esc(f.nom)}" placeholder="Nom">
          </div>
          <div class="field">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <label class="field-label" style="margin-bottom:0;">Courriel(s)</label>
              <div style="display:flex;gap:6px;">
                <button class="select-icon-btn add" id="eb-add-email" title="Ajouter un courriel">${icon('plus')}</button>
                <button class="select-icon-btn help" title="Courriel principal pour l'envoi des confirmations">?</button>
              </div>
            </div>
            ${f.emails.map((val, i) => `
              <div class="input-group">
                <input class="input" data-eb-email-idx="${i}" value="${esc(val)}" placeholder="courriel@exemple.com">
                ${f.emails.length > 1 ? `<button class="select-icon-btn remove" data-eb-remove-email="${i}">${icon('x')}</button>` : ''}
              </div>`).join('')}
          </div>
          <div class="field" style="margin-bottom:4px;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <label class="field-label" style="margin-bottom:0;">Téléphone(s)</label>
              <div style="display:flex;gap:6px;">
                <button class="select-icon-btn add" id="eb-add-tel" title="Ajouter un téléphone">${icon('plus')}</button>
                <button class="select-icon-btn help" title="Format: (514) 000-0000">?</button>
              </div>
            </div>
            ${f.tels.map((val, i) => `
              <div class="input-group">
                <input class="input" data-eb-tel-idx="${i}" value="${esc(val)}" placeholder="(514) 000-0000">
                <select class="input select" style="width:130px;flex:none;" data-eb-tel-type-idx="${i}">
                  <option>Non défini</option>
                  <option>Cellulaire</option>
                  <option>Maison</option>
                  <option>Travail</option>
                </select>
                ${f.tels.length > 1 ? `<button class="select-icon-btn remove" data-eb-remove-tel="${i}">${icon('x')}</button>` : ''}
              </div>`).join('')}
          </div>
        </div>
        <div class="modal-footer" style="display:flex;gap:10px;">
          <button class="btn btn-primary" id="btn-save-edit-buyer">Sauvegarder</button>
          <button class="btn btn-outline" id="modal-cancel">Annuler</button>
        </div>
      </div>
    </div>`;
}

function renderConfirmSendModal() {
  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal modal-sm">
        <div class="modal-body" style="padding-top:24px;">
          <h2 style="font-size:17px;text-align:center;color:var(--bleu-principal);margin:0 0 18px;">Envoyer la demande de visite à</h2>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <button class="btn btn-primary btn-block" id="btn-send-broker-buyer">Courtier et acheteur</button>
            <button class="btn btn-primary btn-block" id="btn-send-broker-only">Courtier uniquement</button>
          </div>
        </div>
      </div>
    </div>`;
}

function renderConfirmModal(title, body, confirmId) {
  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal modal-sm">
        <div class="modal-head"><h2>${esc(title)}</h2><button class="modal-close" id="modal-close">${icon('x')}</button></div>
        <div class="modal-body"><p style="font-size:14.5px;color:var(--texte-secondaire);line-height:1.5;">${esc(body)}</p></div>
        <div class="modal-footer" style="display:flex;gap:10px;">
          <button class="btn btn-danger" id="${confirmId}">Supprimer</button>
          <button class="btn btn-outline" id="modal-cancel">Annuler</button>
        </div>
      </div>
    </div>`;
}

const DEST_TABS = [
  { id: 'nom', label: 'Nom', icon: 'search' },
  { id: 'adresse', label: 'Adresse', icon: 'mapPinOutline' },
  { id: 'mls', label: 'MLS', icon: 'doc', prefix: '#' },
  { id: 'cart', label: 'Panier', icon: 'cart' },
  { id: 'arret', label: 'Arrêt', icon: 'plus' },
  { id: 'pause', label: 'Pause', icon: 'pause' },
];

function renderDestinationModal() {
  const draft = state.draft;
  const addedMls = new Set(draft.stops.filter(s => s.mls).map(s => s.mls));
  const tab = state.destModalTab;
  const q = state.destModalSearch.trim().toLowerCase();

  let body = '';

  if (tab === 'nom' || tab === 'adresse' || tab === 'mls') {
    const placeholder = tab === 'mls' ? 'Entrez le numéro MLS...' : tab === 'adresse' ? 'Entrez l\'addresse...' : 'Entrez un nom de courtier...';
    let results = [];
    if (q) {
      results = MLS_POOL.filter(p => {
        if (tab === 'mls') return p.mls.includes(q);
        if (tab === 'adresse') return p.address.toLowerCase().includes(q);
        return courtierFor(p.mls).toLowerCase().includes(q);
      }).slice(0, 8);
    }
    body = `
      <div class="search-bar" style="margin-bottom:14px;">
        <input type="text" class="input" id="dest-search" placeholder="${placeholder}" value="${esc(state.destModalSearch)}">
        ${icon('search')}
      </div>
      <div class="info-banner">${icon('info')} <span>Cliquez sur un résultat pour l'ajouter directement au tour.</span></div>
      <div style="margin-top:10px;">
        ${results.map(p => resultRow(p, addedMls)).join('') || (q ? '<p class="helper-text" style="margin-top:14px;">Aucun résultat.</p>' : '')}
      </div>
    `;
  } else if (tab === 'cart') {
    body = `
      <div class="info-banner">${icon('info')} <span>Ces propriétés proviennent de votre sélection sur MLS Matrix.</span></div>
      <div style="margin-top:10px;">
        ${mlsCart.map(p => resultRow(p, addedMls)).join('') || '<p class="helper-text" style="margin-top:14px;">Votre cart MLS Matrix est vide.</p>'}
      </div>
    `;
  } else if (tab === 'arret') {
    body = `
      <div class="field">
        <label class="field-label">Nom de l'arrêt</label>
        <input class="input" id="stop-name" placeholder="Ex: Dîner avec le client">
      </div>
      <div class="field">
        <label class="field-label">Adresse</label>
        <input class="input" id="stop-address" placeholder="Ex: 1250 Rue Sainte-Catherine, Montréal">
      </div>
      <button class="btn btn-secondary btn-block" id="btn-add-custom-stop">${icon('plus')} Ajouter cet arrêt</button>
    `;
  } else if (tab === 'pause') {
    body = `
      <div class="field">
        <label class="field-label">Durée de la pause</label>
        <select class="input select" id="pause-duration">
          <option value="15">15 minutes</option>
          <option value="30" selected>30 minutes</option>
          <option value="45">45 minutes</option>
          <option value="60">60 minutes</option>
        </select>
      </div>
      <button class="btn btn-secondary btn-block" id="btn-add-pause">${icon('plus')} Ajouter la pause</button>
    `;
  }

  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal">
        <div class="modal-head"><h2>Recherche par :</h2><button class="modal-close" id="modal-close">${icon('x')}</button></div>
        <div class="modal-body">
          <div class="dest-tabs">
            ${DEST_TABS.map(t => `
              <div class="dest-tab ${tab === t.id ? 'active' : ''}" data-dest-tab="${t.id}">
                ${icon(t.icon)} ${esc(t.label)}
                ${t.id === 'cart' && mlsCart.length ? `<span class="tab-badge">${mlsCart.length}</span>` : ''}
              </div>`).join('')}
          </div>
          ${body}
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline btn-block" id="modal-cancel">${state.draft.stops.length > (state.modal.initialStops ?? 0) ? 'Ajouter' : 'Fermer'}</button>
        </div>
      </div>
    </div>`;
}

function resultRow(p, addedMls) {
  const already = addedMls.has(p.mls);
  // The whole row is the click target and toggles the selection:
  // one click adds the property to the tour, a second click removes it.
  return `
    <div class="result-row ${already ? 'is-added' : ''}" data-toggle-property="${p.mls}">
      <img class="result-thumb" src="${thumbFor(p.mls, p.address)}" alt="">

      <div class="result-address">${esc(p.address)}</div>
      <span class="result-add-btn ${already ? 'added' : ''}">
        ${icon(already ? 'check' : 'plus')}
      </span>
    </div>`;
}

function renderMapModal() {
  const draft = state.draft;
  const stopsWithPos = draft.stops.filter(s => s.type === 'property').map((s, i) => {
    const h = hashStr(s.address);
    return { ...s, x: 12 + (h % 74), y: 12 + ((h >> 4) % 62), idx: i + 1 };
  });

  // Primary route: smooth curve through the stops in tour order.
  // Alternative route: same stops, curving the opposite way (dashed).
  const mkPath = (pts, sign) => {
    if (pts.length < 2) return '';
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i];
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      const dx = b.x - a.x, dy = b.y - a.y;
      const len = Math.max(Math.hypot(dx, dy), 0.01);
      const off = Math.min(12, len * 0.35) * sign;
      d += ` Q ${mx - (dy / len) * off} ${my + (dx / len) * off}, ${b.x} ${b.y}`;
    }
    return d;
  };

  const routesHtml = stopsWithPos.length >= 2 ? `
    <svg class="map-routes" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="${mkPath(stopsWithPos, -1)}" class="map-route-alt"/>
      <path d="${mkPath(stopsWithPos, 1)}" class="map-route-main"/>
      ${stopsWithPos.map(s => `<circle cx="${s.x}" cy="${s.y}" r="1.2" class="map-route-dot"/>`).join('')}
    </svg>` : '';

  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal">
        <div class="modal-head"><h2>Aperçu du tour sur la carte</h2><button class="modal-close" id="modal-close">${icon('x')}</button></div>
        <div class="modal-body">
          <div class="map-placeholder">
            <img class="map-bg" src="assets/map.svg" alt="">
            ${routesHtml}
            ${stopsWithPos.map(s => `<div class="map-pin" style="left:${s.x}%;top:${s.y}%;" title="${esc(s.address)}"><span>${s.idx}</span></div>`).join('')}
          </div>
          ${stopsWithPos.length >= 2 ? `
          <div class="map-legend">
            <span class="map-legend-item"><span class="map-legend-line main"></span> Trajet proposé</span>
            <span class="map-legend-item"><span class="map-legend-line alt"></span> Trajet alternatif</span>
          </div>` : ''}
          <p class="helper-text" style="margin-top:10px;">Aperçu simplifié — l'intégration carte réelle sera branchée dans une prochaine itération.</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline btn-block" id="modal-cancel">Fermer</button>
        </div>
      </div>
    </div>`;
}

function renderEditStopModal() {
  const stop = state.draft.stops.find(s => s.id === state.modal.stopId);
  if (!stop) return '';
  if (stop.type === 'pause') {
    return `
      <div class="modal-overlay" id="modal-overlay">
        <div class="modal modal-sm">
          <div class="modal-head"><h2>Modifier la pause</h2><button class="modal-close" id="modal-close">${icon('x')}</button></div>
          <div class="modal-body">
            <div class="field">
              <label class="field-label">Durée</label>
              <select class="input select" id="edit-pause-duration">
                ${[15, 30, 45, 60].map(v => `<option value="${v}" ${v === stop.duration ? 'selected' : ''}>${v} minutes</option>`).join('')}
              </select>
            </div>
          </div>
          <div class="modal-footer" style="display:flex;gap:10px;">
            <button class="btn btn-primary" id="btn-save-edit-pause">Enregistrer</button>
            <button class="btn btn-outline" id="modal-cancel">Annuler</button>
          </div>
        </div>
      </div>`;
  }
  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal modal-sm">
        <div class="modal-head"><h2>Modifier la visite</h2><button class="modal-close" id="modal-close">${icon('x')}</button></div>
        <div class="modal-body">
          <p class="helper-text" style="margin-top:0;">${esc(stop.address)}</p>
          <div class="field">
            <label class="field-label">Statut</label>
            <select class="input select" id="edit-stop-status">
              <option value="pending" ${stop.status === 'pending' ? 'selected' : ''}>À confirmer avec le courtier inscripteur</option>
              <option value="confirmed" ${stop.status === 'confirmed' ? 'selected' : ''}>Confirmée</option>
            </select>
          </div>
          <div class="field">
            <label class="field-label">Durée de la visite</label>
            <select class="input select" id="edit-stop-duration">
              ${[15, 30, 45, 60].map(v => `<option value="${v}" ${v === stop.duration ? 'selected' : ''}>${v} minutes</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="modal-footer" style="display:flex;gap:10px;">
          <button class="btn btn-primary" id="btn-save-edit-stop">Enregistrer</button>
          <button class="btn btn-outline" id="modal-cancel">Annuler</button>
        </div>
      </div>
    </div>`;
}

/* ---------------- Toast ---------------- */

function showToast(msg, type = 'default') {
  const root = document.getElementById('toast-root');
  root.innerHTML = `<div class="toast ${type}">${icon(type === 'success' ? 'checkCircle' : 'info')} ${esc(msg)}</div>`;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => { root.innerHTML = ''; }, 2600);
}

/* ---------------- Events ---------------- */

function bindEvents() {
  // Sidebar nav + mobile menu grid (only "tours" is wired; others show a toast)
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.onclick = (e) => {
      e.preventDefault();
      const id = el.getAttribute('data-nav');
      if (id === 'tours') { state.screen = 'list'; state.draft = null; render(); return; }
      if (id === 'logout') { showToast('Déconnexion — hors scope du prototype.'); return; }
      showToast('Cette section n\'est pas incluse dans ce prototype.');
    };
  });

  const menuBtn = document.getElementById('mobile-menu-btn');
  if (menuBtn) menuBtn.onclick = () => { state.screen = 'menu'; state.draft = null; render(); };

  const backBtn = document.getElementById('mobile-back-btn');
  if (backBtn) backBtn.onclick = () => {
    if (state.screen === 'contact' || state.screen === 'builder') { state.screen = 'list'; state.draft = null; }
    else { state.screen = 'menu'; }
    render();
  };

  if (state.screen === 'list') bindListEvents();
  if (state.screen === 'contact') bindContactEvents();
  if (state.screen === 'builder') bindBuilderEvents();
  bindModalEvents();
}

function bindListEvents() {
  document.querySelectorAll('[data-tab]').forEach(el => {
    el.onclick = () => { state.listTab = el.getAttribute('data-tab'); render(); };
  });
  const search = document.getElementById('list-search');
  if (search) {
    search.oninput = () => { state.listSearch = search.value; render(); setTimeout(() => { const s = document.getElementById('list-search'); if (s) { s.focus(); s.selectionStart = s.selectionEnd = s.value.length; } }, 0); };
  }
  document.querySelectorAll('[data-open-tour]').forEach(el => {
    el.onclick = () => {
      const t = state.tours.find(x => x.id === el.getAttribute('data-open-tour'));
      const buyer = state.buyers.find(b => b.id === t.buyerId);
      state.editingTourId = t.id;
      state.draft = { buyer, date: t.date, time: t.time, stops: JSON.parse(JSON.stringify(t.stops)) };
      state.screen = 'builder';
      render();
    };
  });
  const btn = document.getElementById('btn-create-tour');
  if (btn) btn.onclick = () => {
    state.screen = 'contact';
    state.contactSearch = '';
    state.contactSelectedBuyer = null;
    state.showBuyerForm = false;
    state.buyerFormDraft = null;
    state.editingTourId = null;
    render();
  };
}

function bindContactEvents() {

  const search = document.getElementById('contact-search');
  if (search) {
    search.oninput = () => { state.contactSearch = search.value; render(); setTimeout(() => { const s = document.getElementById('contact-search'); if (s) { s.focus(); s.selectionStart = s.selectionEnd = s.value.length; } }, 0); };
  }
  document.querySelectorAll('[data-select-buyer]').forEach(el => {
    el.onclick = () => {
      state.contactSelectedBuyer = state.buyers.find(b => b.id === el.getAttribute('data-select-buyer'));
      state.showBuyerForm = false;
      render();
    };
  });
  const removeBuyer = document.getElementById('btn-remove-selected-buyer');
  if (removeBuyer) removeBuyer.onclick = () => { state.contactSelectedBuyer = null; state.contactSearch = ''; render(); };
  const editBuyer = document.getElementById('btn-edit-selected-buyer');
  if (editBuyer) editBuyer.onclick = () => {
    const b = state.contactSelectedBuyer;
    state.buyerFormDraft = { prenom: b.prenom, nom: b.nom, emails: [b.email], tels: [b.tel], editingId: b.id };
    state.showBuyerForm = true;
    state.contactSelectedBuyer = null;
    state.contactSearch = '';
    render();
  };

  const toggleForm = document.getElementById('btn-toggle-buyer-form');
  if (toggleForm) toggleForm.onclick = () => {
    state.showBuyerForm = true;
    state.buyerFormDraft = { prenom: '', nom: '', emails: [''], tels: [''] };
    render();
    setTimeout(() => document.getElementById('bf-prenom')?.focus(), 0);
  };

  bindBuyerFormEvents();

  const saveBtn = document.getElementById('btn-save-contact');
  if (saveBtn) saveBtn.onclick = () => {
    let buyer = state.contactSelectedBuyer;
    if (!buyer && state.showBuyerForm) {
      const f = state.buyerFormDraft;
      if (f.editingId) {
        buyer = { id: f.editingId, prenom: f.prenom, nom: f.nom, email: f.emails[0], tel: f.tels[0] };
        const idx = state.buyers.findIndex(b => b.id === f.editingId);
        if (idx >= 0) state.buyers[idx] = buyer; else state.buyers.push(buyer);
      } else {
        buyer = { id: uid(), prenom: f.prenom, nom: f.nom, email: f.emails[0], tel: f.tels[0] };
        state.buyers.push(buyer);
      }
    }
    if (!buyer) return;
    state.draft = newDraft(buyer);
    state.screen = 'builder';
    render();
  };
  const cancelBtn = document.getElementById('btn-cancel-contact');
  if (cancelBtn) cancelBtn.onclick = () => { state.screen = 'list'; render(); };
}

function bindBuyerFormEvents() {
  const f = state.buyerFormDraft;
  if (!f) return;
  const bind = (id, key) => { const el = document.getElementById(id); if (el) el.oninput = () => { f[key] = el.value; syncSaveButton(); }; };
  bind('bf-prenom', 'prenom');
  bind('bf-nom', 'nom');
  document.querySelectorAll('[data-email-idx]').forEach(el => {
    el.oninput = () => { f.emails[+el.getAttribute('data-email-idx')] = el.value; syncSaveButton(); };
  });
  document.querySelectorAll('[data-tel-idx]').forEach(el => {
    el.oninput = () => { f.tels[+el.getAttribute('data-tel-idx')] = el.value; };
  });
  const addEmail = document.getElementById('bf-add-email');
  if (addEmail) addEmail.onclick = () => { f.emails.push(''); render(); };
  const addTel = document.getElementById('bf-add-tel');
  if (addTel) addTel.onclick = () => { f.tels.push(''); render(); };
  document.querySelectorAll('[data-remove-email]').forEach(el => {
    el.onclick = () => { f.emails.splice(+el.getAttribute('data-remove-email'), 1); render(); };
  });
  document.querySelectorAll('[data-remove-tel]').forEach(el => {
    el.onclick = () => { f.tels.splice(+el.getAttribute('data-remove-tel'), 1); render(); };
  });
}

function syncSaveButton() {
  const btn = document.getElementById('btn-save-contact');
  if (btn) btn.disabled = !buyerFormValid();
}

/* ----- Builder events ----- */

function bindBuilderEvents() {

  const changeBuyer = document.getElementById('btn-change-buyer');
  if (changeBuyer) changeBuyer.onclick = () => {
    const b = state.draft.buyer;
    state.editBuyerDraft = { prenom: b.prenom, nom: b.nom, emails: [b.email], tels: [b.tel] };
    state.modal = { type: 'editBuyer' };
    render();
  };

  const dateInput = document.getElementById('builder-date');
  if (dateInput) dateInput.onchange = () => { state.draft.date = dateInput.value; markDirtyIfSent(); render(); };
  const timeSelect = document.getElementById('builder-time');
  if (timeSelect) timeSelect.onchange = () => { state.draft.time = timeSelect.value; markDirtyIfSent(); render(); };

  const openDestModal = () => {
    // Remember how many stops the tour had when the modal opened: the footer
    // button reads "Fermer" until something is added, then becomes "Ajouter".
    state.modal = { type: 'destination', initialStops: state.draft.stops.length };
    state.destModalTab = 'cart';
    state.destModalSearch = '';
    render();
  };
  const addBtn1 = document.getElementById('btn-add-destination');
  if (addBtn1) addBtn1.onclick = openDestModal;

  const optimizeBtn = document.getElementById('btn-optimize');
  if (optimizeBtn) optimizeBtn.onclick = () => {
    const pauses = state.draft.stops.filter(s => s.type === 'pause');
    const props = state.draft.stops.filter(s => s.type === 'property')
      .slice()
      .sort((a, b) => a.address.localeCompare(b.address));
    state.draft.stops = [...props, ...pauses];
    markDirtyIfSent();
    render();
    showToast('Tour optimisé selon la distance estimée.', 'success');
  };

  const mapBtn = document.getElementById('btn-show-map');
  if (mapBtn) mapBtn.onclick = () => { state.modal = { type: 'map' }; render(); };

  document.querySelectorAll('[data-edit-stop]').forEach(el => {
    el.onclick = () => { state.modal = { type: 'editStop', stopId: el.getAttribute('data-edit-stop') }; render(); };
  });
  document.querySelectorAll('[data-edit-pause]').forEach(el => {
    el.onclick = () => { state.modal = { type: 'editStop', stopId: el.getAttribute('data-edit-pause') }; render(); };
  });
  document.querySelectorAll('[data-remove-stop]').forEach(el => {
    el.onclick = () => {
      state.draft.stops = state.draft.stops.filter(s => s.id !== el.getAttribute('data-remove-stop'));
      markDirtyIfSent();
      render();
    };
  });

  const sendBtn = document.getElementById('btn-send-tour');
  if (sendBtn) sendBtn.onclick = () => { state.modal = { type: 'confirmSend' }; render(); };

  const shareBtn = document.getElementById('btn-share-buyer');
  if (shareBtn) shareBtn.onclick = () => showToast('Le tour a été partagé avec l\'acheteur.', 'success');

  const saveDraftBtn = document.getElementById('btn-save-draft');
  if (saveDraftBtn) saveDraftBtn.onclick = () => {
    const existing = currentTour();
    if (existing) {
      existing.buyerId = state.draft.buyer.id;
      existing.date = state.draft.date;
      existing.time = state.draft.time;
      existing.stops = state.draft.stops;
    } else {
      const newId = uid();
      state.tours.push({
        id: newId, buyerId: state.draft.buyer.id, date: state.draft.date, time: state.draft.time,
        stops: state.draft.stops, sentAt: null,
      });
      state.editingTourId = newId;
    }
    state.screen = 'list';
    state.listTab = 'upcoming';
    state.draft = null;
    render();
    showToast('Tour enregistré. Vous pourrez l\'envoyer plus tard.', 'success');
  };

  const saveUpdateBtn = document.getElementById('btn-save-update');
  if (saveUpdateBtn) saveUpdateBtn.onclick = () => saveDraftToTour(true);
  const saveOnlyBtn = document.getElementById('btn-save-only');
  if (saveOnlyBtn) saveOnlyBtn.onclick = () => saveDraftToTour(false);

  const deleteBtn = document.getElementById('btn-delete-tour');
  if (deleteBtn) deleteBtn.onclick = () => { state.modal = { type: 'confirmDeleteTour' }; render(); };

  bindDragAndDrop();
}

function bindDragAndDrop() {
  const cards = document.querySelectorAll('.stop-card');
  cards.forEach(card => {
    card.addEventListener('dragstart', () => {
      state.dragStopId = card.getAttribute('data-stop-id');
      card.classList.add('dragging');
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      document.querySelectorAll('.stop-card').forEach(c => c.classList.remove('drag-over'));
    });
    card.addEventListener('dragover', (e) => {
      e.preventDefault();
      card.classList.add('drag-over');
    });
    card.addEventListener('dragleave', () => card.classList.remove('drag-over'));
    card.addEventListener('drop', (e) => {
      e.preventDefault();
      card.classList.remove('drag-over');
      const fromId = state.dragStopId;
      const toId = card.getAttribute('data-stop-id');
      if (!fromId || fromId === toId) return;
      const stops = state.draft.stops;
      const fromIdx = stops.findIndex(s => s.id === fromId);
      const toIdx = stops.findIndex(s => s.id === toId);
      const [moved] = stops.splice(fromIdx, 1);
      stops.splice(toIdx, 0, moved);
      markDirtyIfSent();
      render();
    });
  });
}

/* ----- Modal events ----- */

function closeModal() { state.modal = null; render(); }

function bindModalEvents() {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;
  overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };
  const closeBtn = document.getElementById('modal-close');
  if (closeBtn) closeBtn.onclick = closeModal;
  const cancelBtn = document.getElementById('modal-cancel');
  if (cancelBtn) cancelBtn.onclick = closeModal;

  document.addEventListener('keydown', escHandler);

  if (state.modal.type === 'destination') bindDestinationModalEvents();
  if (state.modal.type === 'confirmSend') {
    const finalizeSend = (notifyBuyer) => {
      const existing = currentTour();
      if (existing) {
        // Sending a saved draft: update it in place and mark it sent.
        existing.buyerId = state.draft.buyer.id;
        existing.date = state.draft.date;
        existing.time = state.draft.time;
        existing.stops = state.draft.stops;
        existing.sentAt = Date.now();
        existing.sharedWithBuyer = notifyBuyer;
      } else {
        const newId = uid();
        state.tours.push({
          id: newId, buyerId: state.draft.buyer.id, date: state.draft.date, time: state.draft.time,
          stops: state.draft.stops, sentAt: Date.now(), sharedWithBuyer: notifyBuyer,
        });
        state.editingTourId = newId;
      }
      state.dirty = false;
      state.modal = null;
      render();
      showToast(
        notifyBuyer
          ? "Demandes de visites envoyées aux courtiers inscripteurs et à l'acheteur."
          : 'Demandes de visites envoyées aux courtiers inscripteurs.',
        'success'
      );
    };
    const brokerOnly = document.getElementById('btn-send-broker-only');
    if (brokerOnly) brokerOnly.onclick = () => finalizeSend(false);
    const brokerBuyer = document.getElementById('btn-send-broker-buyer');
    if (brokerBuyer) brokerBuyer.onclick = () => finalizeSend(true);
  }
  if (state.modal.type === 'confirmDeleteTour') {
    const btn = document.getElementById('btn-confirm-delete-tour');
    if (btn) btn.onclick = () => {
      if (state.editingTourId) state.tours = state.tours.filter(t => t.id !== state.editingTourId);
      state.modal = null;
      state.screen = 'list';
      state.draft = null;
      render();
      showToast('Tour de visites supprimé.');
    };
  }
  if (state.modal.type === 'editBuyer') bindEditBuyerModalEvents();
  if (state.modal.type === 'editStop') {
    const saveStop = document.getElementById('btn-save-edit-stop');
    if (saveStop) saveStop.onclick = () => {
      const stop = state.draft.stops.find(s => s.id === state.modal.stopId);
      stop.status = document.getElementById('edit-stop-status').value;
      stop.duration = +document.getElementById('edit-stop-duration').value;
      stop.locked = stop.status === 'confirmed';
      if (stop.locked && !stop.lockedStart) {
        const rows = computeSchedule(state.draft);
        const r = rows.find(r => r.stop.id === stop.id);
        stop.lockedStart = minutesToLabel(r.start).replace('h', ':');
      }
      state.modal = null;
      markDirtyIfSent();
      render();
    };
    const savePause = document.getElementById('btn-save-edit-pause');
    if (savePause) savePause.onclick = () => {
      const stop = state.draft.stops.find(s => s.id === state.modal.stopId);
      stop.duration = +document.getElementById('edit-pause-duration').value;
      state.modal = null;
      markDirtyIfSent();
      render();
    };
  }
}

function escHandler(e) {
  if (e.key === 'Escape' && state.modal) { closeModal(); document.removeEventListener('keydown', escHandler); }
}

function bindEditBuyerModalEvents() {
  const f = state.editBuyerDraft;
  const bind = (id, key) => { const el = document.getElementById(id); if (el) el.oninput = () => { f[key] = el.value; }; };
  bind('eb-prenom', 'prenom');
  bind('eb-nom', 'nom');
  document.querySelectorAll('[data-eb-email-idx]').forEach(el => {
    el.oninput = () => { f.emails[+el.getAttribute('data-eb-email-idx')] = el.value; };
  });
  document.querySelectorAll('[data-eb-tel-idx]').forEach(el => {
    el.oninput = () => { f.tels[+el.getAttribute('data-eb-tel-idx')] = el.value; };
  });
  const addEmail = document.getElementById('eb-add-email');
  if (addEmail) addEmail.onclick = () => { f.emails.push(''); render(); };
  const addTel = document.getElementById('eb-add-tel');
  if (addTel) addTel.onclick = () => { f.tels.push(''); render(); };
  document.querySelectorAll('[data-eb-remove-email]').forEach(el => {
    el.onclick = () => { f.emails.splice(+el.getAttribute('data-eb-remove-email'), 1); render(); };
  });
  document.querySelectorAll('[data-eb-remove-tel]').forEach(el => {
    el.onclick = () => { f.tels.splice(+el.getAttribute('data-eb-remove-tel'), 1); render(); };
  });
  const saveBtn = document.getElementById('btn-save-edit-buyer');
  if (saveBtn) saveBtn.onclick = () => {
    const updated = { ...state.draft.buyer, prenom: f.prenom, nom: f.nom, email: f.emails[0], tel: f.tels[0] };
    state.draft.buyer = updated;
    const idx = state.buyers.findIndex(b => b.id === updated.id);
    if (idx >= 0) state.buyers[idx] = updated;
    state.modal = null;
    render();
  };
}

function bindDestinationModalEvents() {
  document.querySelectorAll('[data-dest-tab]').forEach(el => {
    el.onclick = () => { state.destModalTab = el.getAttribute('data-dest-tab'); state.destModalSearch = ''; render(); };
  });
  const search = document.getElementById('dest-search');
  if (search) {
    search.oninput = () => { state.destModalSearch = search.value; render(); setTimeout(() => { const s = document.getElementById('dest-search'); if (s) { s.focus(); s.selectionStart = s.selectionEnd = s.value.length; } }, 0); };
  }
  document.querySelectorAll('[data-toggle-property]').forEach(el => {
    el.onclick = () => {
      const mls = el.getAttribute('data-toggle-property');
      const existing = state.draft.stops.find(s => s.mls === mls);
      if (existing) {
        state.draft.stops = state.draft.stops.filter(s => s.id !== existing.id);
      } else {
        const prop = MLS_POOL.find(p => p.mls === mls) || mlsCart.find(p => p.mls === mls);
        if (!prop) return;
        state.draft.stops.push(makeStop(prop.address, prop.mls, { status: 'pending' }));
      }
      markDirtyIfSent();
      render();
    };
  });
  const addCustom = document.getElementById('btn-add-custom-stop');
  if (addCustom) addCustom.onclick = () => {
    const name = document.getElementById('stop-name').value.trim();
    const address = document.getElementById('stop-address').value.trim();
    if (!address) return;
    state.draft.stops.push({ id: uid(), type: 'property', address: name ? `${name} — ${address}` : address, mls: null, status: 'pending', duration: 20, locked: false });
    markDirtyIfSent();
    closeModal();
  };
  const addPause = document.getElementById('btn-add-pause');
  if (addPause) addPause.onclick = () => {
    const duration = +document.getElementById('pause-duration').value;
    state.draft.stops.push(makePause(duration));
    markDirtyIfSent();
    closeModal();
  };
}

/* ---------------- Init ---------------- */

renderSidebarNav();
render();

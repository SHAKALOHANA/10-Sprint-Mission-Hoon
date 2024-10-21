import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Mobile styles */

/* Updated color palette */
:root {
  /* Gray scale */
  --gray-900: #111827;
  --gray-800: #1F2937;
  --gray-700: #374151;
  --gray-600: #4b5563;
  --gray-500: #6b7280;
  --gray-400: #9ca3af;
  --gray-200: #e5e7eb;
  --gray-100: #f3f4f6;
  --gray-50: #f9fafb;

  /* Primary color */
  --blue: #3692ff;

  --red: #f74747;

  /* Layout dimensions */
  --header-height: 70px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

button,
input,
textarea,
select {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

button {
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
}

img,
svg {
  vertical-align: bottom;
}

body {
  color: var(--gray-700);
  word-break: keep-all;
  font-family: "Pretendard", sans-serif;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background-color: #ffffff;
  border-bottom: 1px solid #dfdfdf;
  z-index: 999;
}

.withHeader {
  margin-top: var(--header-height);
}

footer {
  background-color: var(--gray-900);
  color: var(--gray-400);
  font-size: 16px;
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
}

#copyright {
  order: 3;
  flex-basis: 100%;
}

#footerMenu {
  display: flex;
  gap: 30px;
  color: var(--gray-200);
}

#socialMedia {
  display: flex;
  gap: 12px;
}

.wrapper {
  width: 100%;
  padding: 0 16px;
}

.button {
  background-color: var(--blue);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.button:hover {
  background-color: #1967d6;
}

.button:focus {
  background-color: #1251aa;
}

.button:disabled {
  background-color: var(--gray-400);
  cursor: default;
  pointer-events: none;
}

.pill-button {
  font-size: 16px;
  font-weight: 600;
  border-radius: 999px;
  padding: 14.5px 33.5px;
}

.full-width {
  width: 100%;
}

.break-on-desktop {
  display: none;
}

/* Tablet styles */

@media (min-width: 768px) {
  header {
    padding: 0 24px;
  }

  .wrapper {
    padding: 0 24px;
  }

  .pill-button {
    font-size: 20px;
    font-weight: 700;
    padding: 16px 126px;
  }

  footer {
    padding: 32px 104px 108px 104px;
  }

  #copyright {
    flex-basis: auto;
    order: 0;
  }
}

/* Desktop styles */

@media (min-width: 1280px) {
  header {
    padding: 0 200px;
  }

  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }

  .break-on-desktop {
    display: inline;
  }

  footer {
    padding: 32px 200px 108px 200px;
  }
}

`;

export default GlobalStyle;

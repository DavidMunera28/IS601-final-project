# Setup Instructions

`npx create-next-app waywize` initialized Next.js files.

`npm run dev` runs local development server (must be run from the `IS601-final-project\waywize` directory).

`npm i @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion` installs Chakra UI (must be run from the `IS601-final-project\waywize` directory). From there, import ChakraProvider and wrap in root app container as described [here](https://chakra-ui.com/getting-started/nextjs-guide).

`npm install @chakra-ui/icons` installs Chakra UI icons (must be run from the `IS601-final-project\waywize` directory).

`npm init playwright@latest` installs Playwright (must be run from the `IS601-final-project\waywize` directory). The following options were selected:

* Do you want to use TypeScript or JavaScript? · **JavaScript**
* Where to put your end-to-end tests? · **tests**
* Add a GitHub Actions workflow? (y/N) · **false**
* Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · **true**

`npx playwright test` tests Playwright install (must be run from the `IS601-final-project\waywize` directory). All 6 tests should pass.

`npm install client-only` installs Client Only (must be run from the `IS601-final-project\waywize` directory).

`npm install react-cookie-consent` installs React Cookie Consent library (must be run from the `IS601-final-project\waywize` directory).

`npm install remark remark-html react-markdown` installs libraries for parsing and rendering content from Markdown files onto HTML pages (must be run from the `IS601-final-project\waywize` directory).

`npm install react-icons --save` installs React icons (must be run from the `IS601-final-project\waywize` directory).

# Vercel Deployment Instructions

Deploy `is601-final-project` to Vercel from GitHub, setting `Next.js` as the Framework and `waywize` as the root directory.

[Click here](https://is-601-final-project.vercel.app/) for production deployment in Vercel.

# Google Analytics Setup

## Attempt 1

Google tag is not detected on the [Vercel-hosted website](https://is-601-final-project.vercel.app/).

![image](/images/GA-Test-1.png)

Noted that the tag number prop was incorrectly entered on the root app - this is likely the root cause.

## Attempt 2

Google tag is successfully detected on the [Vercel-hosted website](https://is-601-final-project.vercel.app/) after correcting the tag number prop.

![image](/images/GA-Test-2.png)

# Lighthouse Testing

## Test 1 - 12/13/2023 ~ 6:00pm

![image](/images/Lighthouse-Test-1A.png)
![image](/images/Lighthouse-Test-1B.png)
![image](/images/Lighthouse-Test-1C.png)

* **Performance**
    * All pages require major improvement
* **Accessibility**
    * All pages are acceptable
* **Best Practices**
    * Home and about pages could benefit from minor improvement
    * Privacy policy page is acceptable
* **SEO**
    * Home and about pages could benefit from minor improvement
    * Privacy policy page is acceptable

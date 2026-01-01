Folder Structure & Customization
To setup you site's basic information like [Logo,Site title,Description, Menus,etc] go to ->
src/settings/site-settings.ts file
To customize tailwind configuration go to -> tailwind.config.js file .
/public: To change your api data, favicon, multi-language assets (images, placeholder)
etc here .
/src/components: This folder contains all the template related ui components .
/src/containers: This folder contains all the common sections related components.;
/src/contexts: This folder contains all necessary context for this template . Like cart, ui etc.
/src/framework: It's contain all the data fetching related codes. see below for more info.
/src/pages: All the pages created here which is used by nextjs routing mechanism .
/src/settings: To setup your site basic setting like privacy page, terms page, faq page etc.
/src/styles: Overwrites some third party packages CSS files and our custom CSS in the tailwind.css
file.
/src/utils : This folder contains hooks, routes, scrolls, local storage etc.
Multi-Language
We have used next-i18next(https://github.com/isaachinman/next-i18next) package for supporting multilanguage.
/public/locales: This folder contains all languages files. If you want to add more languages, please
add your language specific folder.
RTL
/src/utils/get-direction.ts: This file contains all RTL related codes. Change it according to your
need.

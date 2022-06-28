## Description

A chrome extension test for a full stack job interview. The design is my own and uses React, Typescript and Tailwind.

This was my first time using Typescript.

## Getting Started

### Dependencies

* Front end: React, Typescript, Tailwind and fontawesome
* Backend: Express and Passport (NOT REQUIRED TO RUN EXTENSION LOCALLY)
* Package manager: Vite

### Installing

Steps to open the extension locally in Chrome

* Clone the repo
```
git clone https://github.com/samburch/typescript-react-chrome-ext.git
```
* Open chrome and navigate to extension: chrome://extensions/
* Switch to developer mode in top right if not already
* Select 'Load unpacked' from top left and navigate to 'chrome-extension-test' -> 'dist' folder in order to add extension
<img width="1081" alt="Screen Shot 2022-06-28 at 11 58 37" src="https://user-images.githubusercontent.com/7994248/176163632-a4ccec4e-2bcc-4401-abab-12c4fe0c02eb.png">

* Activate extension if not already active
* Select extension from top right of chrome windor

* Add any name to name field
* Password must be 'password' to progress app to profile page

### Notes

The "chrome-extension-test-backend" is not required. I build this directory thinking initially that a backend server would be required for the test in order to authenticate users via social channels. I realised late on that this was not required when re-reading the test steps. It also wouldn't have made sense because the server wouldn't be able to access localStorage which is a key pass criteria for the test.

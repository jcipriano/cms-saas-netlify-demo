# Optimizely CMS Demo Site <!-- omit in toc -->

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE)

## Contents <!-- omit in toc -->
- [1. Introduction](#1-introduction)
- [2. Getting started](#2-getting-started)
  - [2.1. Requirements](#21-requirements)
  - [2.2. Deploying \& Configuring](#22-deploying--configuring)
  - [2.3. Additional configuration options](#23-additional-configuration-options)
  - [2.4. Product specific instructions](#24-product-specific-instructions)
    - [2.4.1. Content Recommendations](#241-content-recommendations)
- [3. Further documentation](#3-further-documentation)


## 1. Introduction
This repository contains content and frontend that form the Optimizely SaaS CMS Demo Site. 

If you're looking to build a new site from scratch, please use the [Create Next App Template](https://github.com/remkoj/optimizely-saas-starter) to create an empty frontend using the same structure and tooling as this demo site.

## 2. Getting started
### 2.1. Requirements
Make sure you're good to go, by:
- Requesting an Optimizely CMS instance using [Sign-up for the program](https://www.optimizely.com/saas-core-waitlist/)
- Ensure you have a GitHub account
- Ensuring you have (at least) a hobby plan account at Vercel, or are comfortable creating one

After signing up for the beta instance and provisioning of the instance, you'll get an e-mail with the keys and instructions to activate your account.

### 2.2. Deploying & Configuring
[Follow these instructions to configure the CMS](docs/cms-config.md)

After you've completed the CMS configuration instructions and collected the needed information, click the "Deploy to vercel" button below, to deploy this site to your Vercel Account

Durring the deploy process:
- You will be prompted to enter environement variables as described below.
- The demo site will build and deploy.
- A repo with this source code will be added to your Github account. When you make changes to that repo, Netlify CI/CD will automatlicy build and deploy the changes. 

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jcipriano/cms-saas-netlify-demo)

| Environment variable | Instruction |
| - | - |
| OPTIMIZELY_CMS_URL | The URL where the Optimizely CMS can be reached by the build process; for example: `https://example.cms.optimizely.com/`
| OPTIMIZELY_GRAPH_SECRET | The Content Graph Secret can be made visible on the CMS Dashboard, within the "Render Content" section. |
| OPTIMIZELY_GRAPH_APP_KEY | The Content Graph App key, which is shown on the CMS Dashboard, within the "Render Content" section. |
| OPTIMIZELY_GRAPH_SINGLE_KEY | The Content Graph Single key	, which is shown on the CMS Dashboard, within the "Render Content" section. |

When the deployment has succeeded, the following steps are needed to enable "On Page Editing" or "In Context Editing".

[Enable on-page / in context editing](docs/editing.md)

### 2.3. Additional configuration options

Please refer to the [Supported environment variables](docs/env-vars.md) document for all supported configuration options for the frontend. The steps above only outine the mimimum required configuration to obtain a working demo site. Many of the included features require additional configuration to be enabled.

***Please note:** every configuration change to the environment variables requires a new deployment to become active.*

### 2.4. Product specific instructions
#### 2.4.1. Content Recommendations
For Content Recommendations to work, the following steps are needed:
1. Configure Content Recommendations using the environment variables of the [`Next.JS Optimizely One package`](https://www.npmjs.com/package/@remkoj/optimizely-one-nextjs#252-list-of-supported-environment-variables)
2. Add the Content Recommendations widget using either the block (Page) or element (Experience), you will need to configure:
   - The API Key of the delivery, which is shown as value of 'data-api-key=' in the example code within Content Recommendations
   - The number of recommendations to show

## 3. Further documentation
* [Local development](docs/dev-env.md)
* [CMS Configuration](docs/cms-config.md)
* [Enable on-page / in context editing](docs/editing.md)
* [Supported environment variables](docs/env-vars.md)
* [Custom demo building](docs/demo-building.md)
* [General solution description](docs/solution/index.md)

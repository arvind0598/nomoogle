# Nomoogle V2

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

An updated version of the simple Chrome extension that can help you get rid of Google addiction.

![Nomoogle Banner](img/Nomoogle-Banner.png)

> For firefox extension check this repo : [nomoogle-firefox](https://github.com/sarthology/nomoogle-firefox)

## Features

1. Get google alternatives in one click.
2. Get a popup reminder, Everytime you use a google product.
3. With two special modes:

    **Strict Mode**: Block the entire webpage completly, doesn't allow you to move forward.

    **Redirects**: Automatically redirects the page to popular alternative.

## Getting Started

This project has not yet made it to the stores, so you'll have to use it completely locally for now. Refer to the installation instructions below even if you're an end-user and not a developer who plans to contribute.

### Prerequisites

Apart from a code editor (if you plan to contribute) and a browser that is chromium-based (like Google Chrome or the newer Microsoft Edge), you need nothing else as a pre-requisite to run this project.

### Installing

1. Clone or download this project (extract if needed).
1. Go to the extension settings in your browser and enable Developer mode.
1. Click on **Load Unpackaged** and select this folder.

### Testing your changes

This project currently has no automated testing, or testing of any other kind really. You'll have to rely on manual testing to check if your changes work and don't break anything else.

After making any changes, click on **Reload** in the extensions page for this extension. Check for the following three workflows still working:

1. On a non-google site, this stays inactive.
1. On a google site, when the strict mode is enabled, you are not able to access the site. You should be able to see the alternatives when clicking on the extension icon.
1. On a google site, when the strict mode is disabled, you are able to access the site. You should be able to see the alternatives when clicking on the extension icon.
1. On a google site, when the enable redirects button is enabled, you end up on the alternative automatically.

### Coding style tests

Linting is not in this project right now, so until that's there - stick to 2 spaces indentation in your JS and 4 spaces in HTML. Use single quotes for strings, and big arrow functions whenever possible.

Also use nice variable names and no magic numbers.

## Deployment

Doesn't quite exist right now. Will update when its up.

## Built With

This project currently uses HTML, CSS and absolutely vanilla JS. No fancy stuff of any kind right now.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Arvind S** - *Started Project Rewrite for v2* - [arvind0598](https://github.com/arvind0598)

See also the list of [contributors](https://github.com/arvind0598/nomoogle-v2/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Sathak Sharma, [sarthology](https://github.com/sarthology/), for the original project.
* [@levelsio](https://twitter.com/levelsio), [Nomoregoogle](https://nomoregoogle.com) was an inspiration for this.
* [PurpleBooth](https://github.com/PurpleBooth), for this fantastic readme template.
* *The spirit of Hacktoberfest, I guess?*

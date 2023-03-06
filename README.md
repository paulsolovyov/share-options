# Mage2 Module PaulSolovyov ShareOptions

    ``paulsolovyov/share-options``

 - [Main Functionalities](#markdown-header-main-functionalities)
 - [Installation](#markdown-header-installation)
 - [Configuration](#markdown-header-configuration)
 - [Specifications](#markdown-header-specifications)
 - [Attributes](#markdown-header-attributes)

## Based on serialize.js from Chris Ferdinandi
https://vanillajstoolkit.com/helpers/serialize/


## Main Functionalities
Tokenizes Custom / Bundle / Group Products and creates a custom link to specific product configuration 

## Installation
\* = in production please use the `--keep-generated` option

### Type 1: Zip file

 - Unzip the zip file in `app/code/PaulSolovyov`
 - Enable the module by running `php bin/magento module:enable PaulSolovyov_ShareOptions`
 - Apply database updates by running `php bin/magento setup:upgrade`\*
 - Flush the cache by running `php bin/magento cache:flush`

### Type 2: Composer

 - Make the module available in a composer repository for example:
    - private repository `repo.magento.com`
    - public repository `packagist.org`
    - public github repository as vcs
 - Add the composer repository to the configuration by running `composer config repositories.repo.magento.com composer https://repo.magento.com/`
 - Install the module composer by running `composer require paulsolovyov/share-options`
 - enable the module by running `php bin/magento module:enable PaulSolovyov_ShareOptions`
 - apply database updates by running `php bin/magento setup:upgrade`\*
 - Flush the cache by running `php bin/magento cache:flush`


## Configuration




## Specifications




## Attributes




define(['jquery'], function($)
{
    let form = document.querySelector('#product_addtocart_form');
    let data = new FormData(form);
    let path = window.location.href.split('?')[0]

    /*!
    * Serialize all form data into an object
    * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
    * @param  {FormData} data The FormData object to serialize
    * @return {String}        The serialized form data
    */
    function serialize (data) {
        let obj = {};
        for (let [key, value] of data) {
            if (obj[key] !== undefined) {
                if (!Array.isArray(obj[key])) {
                    obj[key] = [obj[key]];
                }
                obj[key].push(value);
            } else {
                obj[key] = value;
            }
        }
        return obj;
    }

    // Register click event on the share button.
    $( "#share-button").on("click", function(e)
    {
        e.preventDefault();

        let serializedString = serialize(data);
        let parameters = $.param(serializedString,true);
        let urlString = path + "?" + parameters;

        console.log(urlString);
        copyToClipboard(urlString);
    });

    function copyToClipboard(textToCopy) {
        // navigator clipboard api needs a secure context (https)
        if (navigator.clipboard && window.isSecureContext) {
            // navigator clipboard api method'
            return navigator.clipboard.writeText(textToCopy);
        } else {
            // fallback method
            var textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            
            // avoid scrolling to bottom
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.position = "fixed";
        
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
        
            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
            }

            document.body.removeChild(textArea);
        }
    }


    // Animating button during save to clipboard process.
    function animateShareButton()
    {
        console.log("animating!");
    }
});